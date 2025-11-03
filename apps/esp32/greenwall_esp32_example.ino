/*
  greenwall_esp32_example.ino
  Ejemplo para tesis: ESP32 como servidor HTTP para una "pared verde" (GreenWall)
  - Lee sensores reales:
      * DHT22 -> humedad ambiente (+temp ambiente)
      * DS18B20 -> temperatura del sustrato
      * Nivel de agua -> sensor analógico (float/resistance)
      * pH -> sensor analógico
      * Sensor de obstrucción -> digital o analógico (ajustable)
  - Controla actuadores:
      * Bombas -> Relés (ON/OFF) (2 bombas de ejemplo, puedes agregar más)
      * Luces -> LED RGB (3 canales PWM) + brillo
  - Servidor HTTP (Opción A): ESP32 levanta servidor y la app móvil hace requests
  - Notificaciones persistentes en SPIFFS (JSON). La app hace GET /notifications
  - Lógica de riego automático con chequeo de lluvia/agua
  - Librerías requeridas (instalar desde Library Manager):
      * ArduinoJson
      * DHT sensor library (by Adafruit)
      * OneWire
      * DallasTemperature
      * SPIFFS (incluida en core ESP32)
  CONFIG:
    - Conecta la APP móvil a la red WiFi creada por el ESP32 (AP)
    - Cambia pines y thresholds a tu hardware real

  NOTA:
    Ajusta constantes: WIFI_SSID, WIFI_PASS, umbrales, pines.
*/

#include <WiFi.h>
#include <WebServer.h>
#include <SPIFFS.h>
#include <ArduinoJson.h>

// DHT
#include <DHT.h>
#define DHTPIN 15          // pin digital conectado al DHT
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

// DS18B20 (temperatura sustrato)
#include <OneWire.h>
#include <DallasTemperature.h>
#define ONE_WIRE_BUS 4
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

// Web server (puerto 80)
WebServer server(80);

// Pines actuadores
#define PUMP_1_PIN 16
#define PUMP_2_PIN 17
#define LED_R_PIN 25
#define LED_G_PIN 26
#define LED_B_PIN 27
#define LIGHT_POWER_PIN 14 // switch general de luz (si usas relé)
#define OBSTRUCTION_PIN 34 // analog pin para obstrucción o digital
#define WATER_LEVEL_PIN 35 // analog pin nivel de agua
#define PH_PIN 32          // analog pin pH

// PWM channels for RGB (ESP32 has ledc channels)
const int chanR = 0, chanG = 1, chanB = 2;
const int pwmFreq = 5000;
const int pwmResolution = 8; // 0-255

// Umbrales (ajustar en práctica)
const int WATER_LEVEL_THRESHOLD = 1500; // analogRead threshold (0-4095)
const float PH_LOW = 5.5;
const float PH_HIGH = 7.5;
const float RAIN_HUMIDITY_THRESHOLD = 90.0; // si la humedad ambiente > X consideramos lluvia/lluvia reciente

// Riego programado
unsigned long lastAutoWaterMillis = 0;
unsigned long autoWaterIntervalMs = 1000UL * 60UL * 60UL * 24UL; // 24 horas por defecto

// Notificaciones (persistir en SPIFFS /notifications.json)
const char *NOTIF_FILE = "/notifications.json";
const size_t MAX_NOTIFS = 50;

// estructura simple de notificación
struct Notification {
  unsigned long ts;
  String level; // "info","warning","error"
  String message;
};

// almacenamiento en memoria
std::vector<Notification> notifications;

// Estado de dispositivos
bool pump1State = false;
bool pump2State = false;
int ledR = 0;
int ledG = 0;
int ledB = 0;
int brightnessPct = 100; // 0-100

// WiFi AP credentials
const char *WIFI_SSID = "GreenWall_ESP32";
const char *WIFI_PASS = "greenwall123";

// Forward
void handleRoot();
void handleGetStatus();
void handleSetDevice();
void handleGetNotifications();
void handleClearNotifications();
void handleSetColor();
void handleSetSchedule();
void createNotification(const char *level, const char *msg);
void loadNotifications();
void saveNotifications();
void checkAutoWatering();
float readPH();
int readWaterLevel();
bool readObstruction();
void setPump(int pumpIndex, bool on);
void applyRGB(int r, int g, int b, int brightnessPercent);
String jsonEscape(const String &s);

void setup() {
  Serial.begin(115200);
  delay(1000);
  Serial.println("Iniciando GreenWall ESP32 example...");

  // Pines
  pinMode(PUMP_1_PIN, OUTPUT);
  pinMode(PUMP_2_PIN, OUTPUT);
  pinMode(LIGHT_POWER_PIN, OUTPUT);
  digitalWrite(PUMP_1_PIN, LOW);
  digitalWrite(PUMP_2_PIN, LOW);
  digitalWrite(LIGHT_POWER_PIN, LOW);

  // PWM init
  ledcSetup(chanR, pwmFreq, pwmResolution);
  ledcSetup(chanG, pwmFreq, pwmResolution);
  ledcSetup(chanB, pwmFreq, pwmResolution);
  ledcAttachPin(LED_R_PIN, chanR);
  ledcAttachPin(LED_G_PIN, chanG);
  ledcAttachPin(LED_B_PIN, chanB);
  applyRGB(0, 0, 0, brightnessPct);

  // Sensores
  dht.begin();
  sensors.begin();

  // SPIFFS
  if (!SPIFFS.begin(true)) {
    Serial.println("Error montando SPIFFS");
  } else {
    Serial.println("SPIFFS montado");
  }

  // Cargar notificaciones previas
  loadNotifications();

  // WiFi AP mode (móvil se conecta a este AP)
  WiFi.softAP(WIFI_SSID, WIFI_PASS);
  IPAddress IP = WiFi.softAPIP();
  Serial.print("AP iniciado. IP: ");
  Serial.println(IP);

  // Rutas HTTP
  server.on("/", HTTP_GET, handleRoot);
  server.on("/status", HTTP_GET, handleGetStatus);           // devuelve JSON con lecturas y estados
  server.on("/setDevice", HTTP_POST, handleSetDevice);       // cuerpo JSON para cambiar bomba/estado
  server.on("/setColor", HTTP_POST, handleSetColor);         // cambiar color RGB + brillo
  server.on("/notifications", HTTP_GET, handleGetNotifications);
  server.on("/notifications/clear", HTTP_POST, handleClearNotifications);
  server.on("/setSchedule", HTTP_POST, handleSetSchedule);   // ajustar intervalo de riego automático
  server.begin();
  Serial.println("Servidor HTTP iniciado en puerto 80");
}

void loop() {
  server.handleClient();
  static unsigned long lastSensorMillis = 0;
  unsigned long now = millis();

  // Leer sensores cada 5s
  if (now - lastSensorMillis >= 5000) {
    lastSensorMillis = now;

    // Lecturas
    float hum = dht.readHumidity();
    float tempAmbient = dht.readTemperature();
    sensors.requestTemperatures();
    float tempSubstrate = sensors.getTempCByIndex(0);
    int waterLevel = readWaterLevel();
    float ph = readPH();
    bool obstruct = readObstruction();

    Serial.printf("Amb: %.2f C  Hum: %.2f  Substr: %.2f  WaterLvl: %d  pH: %.2f  Obstr: %d\n",
                  tempAmbient, hum, tempSubstrate, waterLevel, ph, obstruct);

    // Generar notificaciones si hay condiciones de alarma
    if (waterLevel < WATER_LEVEL_THRESHOLD) {
      createNotification("warning", "Nivel de agua bajo");
    }
    if (ph < PH_LOW || ph > PH_HIGH) {
      createNotification("warning", "Nivel de pH fuera de rango");
    }
    if (obstruct) {
      createNotification("error", "Obstrucción en canal de agua detectada");
    }
    if (hum > RAIN_HUMIDITY_THRESHOLD) {
      createNotification("info", "Alta humedad detectada (posible lluvia)");
    }
  }

  // Verificar riego automático cada minuto
  checkAutoWatering();
}

// --------- Handlers HTTP ----------
void handleRoot() {
  String page = "<html><body><h2>GreenWall ESP32</h2><p>Endpoints:<br>/status /notifications /setDevice /setColor /setSchedule</p></body></html>";
  server.send(200, "text/html", page);
}

void handleGetStatus() {
  StaticJsonDocument<1024> doc;
  // Sensores
  float hum = dht.readHumidity();
  float tempAmbient = dht.readTemperature();
  sensors.requestTemperatures();
  float tempSubstrate = sensors.getTempCByIndex(0);
  int waterLevel = readWaterLevel();
  float ph = readPH();
  bool obstruct = readObstruction();

  doc["timestamp"] = millis();
  JsonObject s = doc.createNestedObject("sensors");
  s["tempAmbient"] = isnan(tempAmbient) ? nullptr : tempAmbient;
  s["humidity"] = isnan(hum) ? nullptr : hum;
  s["tempSubstrate"] = (tempSubstrate == DEVICE_DISCONNECTED_F) ? nullptr : tempSubstrate;
  s["waterLevelRaw"] = waterLevel;
  s["ph"] = ph;
  s["obstruction"] = obstruct;

  JsonObject dev = doc.createNestedObject("devices");
  dev["pump1"] = pump1State;
  dev["pump2"] = pump2State;
  dev["ledR"] = ledR;
  dev["ledG"] = ledG;
  dev["ledB"] = ledB;
  dev["brightnessPct"] = brightnessPct;

  String out;
  serializeJson(doc, out);
  server.send(200, "application/json", out);
}

void handleSetDevice() {
  if (server.hasArg("plain") == false) {
    server.send(400, "application/json", "{\"error\":\"body required\"}");
    return;
  }
  String body = server.arg("plain");
  StaticJsonDocument<512> doc;
  DeserializationError err = deserializeJson(doc, body);
  if (err) {
    server.send(400, "application/json", "{\"error\":\"invalid json\"}");
    return;
  }

  if (doc.containsKey("pump1")) {
    bool on = doc["pump1"];
    setPump(1, on);
  }
  if (doc.containsKey("pump2")) {
    bool on = doc["pump2"];
    setPump(2, doc["pump2"]);
  }
  if (doc.containsKey("light")) {
    bool on = doc["light"];
    digitalWrite(LIGHT_POWER_PIN, on ? HIGH : LOW);
  }

  server.send(200, "application/json", "{\"ok\":true}");
}

void handleSetColor() {
  if (server.hasArg("plain") == false) {
    server.send(400, "application/json", "{\"error\":\"body required\"}");
    return;
  }
  String body = server.arg("plain");
  StaticJsonDocument<256> doc;
  DeserializationError err = deserializeJson(doc, body);
  if (err) {
    server.send(400, "application/json", "{\"error\":\"invalid json\"}");
    return;
  }
  int r = doc["r"] | 0;
  int g = doc["g"] | 0;
  int b = doc["b"] | 0;
  int brig = doc["brightnessPct"] | brightnessPct;
  brightnessPct = constrain(brig, 0, 100);
  applyRGB(r, g, b, brightnessPct);

  server.send(200, "application/json", "{\"ok\":true}");
}

void handleGetNotifications() {
  // Cargar actuales en memoria (ya se cargan en setup y se actualizan)
  DynamicJsonDocument doc(2048);
  JsonArray arr = doc.createNestedArray("notifications");
  for (auto &n : notifications) {
    JsonObject obj = arr.createNestedObject();
    obj["ts"] = n.ts;
    obj["level"] = n.level;
    obj["message"] = n.message;
  }
  String out;
  serializeJson(doc, out);
  server.send(200, "application/json", out);
}

void handleClearNotifications() {
  notifications.clear();
  saveNotifications();
  server.send(200, "application/json", "{\"ok\":true}");
}

void handleSetSchedule() {
  if (server.hasArg("plain") == false) {
    server.send(400, "application/json", "{\"error\":\"body required\"}");
    return;
  }
  String body = server.arg("plain");
  StaticJsonDocument<256> doc;
  DeserializationError err = deserializeJson(doc, body);
  if (err) {
    server.send(400, "application/json", "{\"error\":\"invalid json\"}");
    return;
  }
  if (doc.containsKey("intervalHours")) {
    int hours = doc["intervalHours"];
    if (hours <= 0) hours = 24;
    autoWaterIntervalMs = (unsigned long)hours * 60UL * 60UL * 1000UL;
    server.send(200, "application/json", "{\"ok\":true}");
  } else {
    server.send(400, "application/json", "{\"error\":\"intervalHours required\"}");
  }
}

// ---------- Utilities ----------
void createNotification(const char *level, const char *msg) {
  // Evitar duplicados simples: si último mensaje igual, no repetir
  if (!notifications.empty()) {
    Notification &last = notifications.back();
    if (last.message == String(msg) && last.level == String(level)) {
      return;
    }
  }
  Notification n;
  n.ts = millis();
  n.level = String(level);
  n.message = String(msg);
  notifications.push_back(n);
  // recortar si muy grande
  if (notifications.size() > MAX_NOTIFS) {
    notifications.erase(notifications.begin());
  }
  saveNotifications();
  Serial.printf("Notification created: %s - %s\n", level, msg);
}

void loadNotifications() {
  notifications.clear();
  if (!SPIFFS.exists(NOTIF_FILE)) return;
  File f = SPIFFS.open(NOTIF_FILE, "r");
  if (!f) return;
  size_t len = f.size();
  std::unique_ptr<char[]> buf(new char[len + 1]);
  f.readBytes(buf.get(), len);
  buf[len] = 0;
  DynamicJsonDocument doc(4096);
  DeserializationError err = deserializeJson(doc, buf.get());
  if (err) {
    Serial.println("No se pudo parsear notifications.json");
    f.close();
    return;
  }
  JsonArray arr = doc["notifications"].as<JsonArray>();
  for (JsonObject o : arr) {
    Notification n;
    n.ts = o["ts"] | 0;
    n.level = String((const char *)o["level"]);
    n.message = String((const char *)o["message"]);
    notifications.push_back(n);
  }
  f.close();
  Serial.printf("Cargadas %d notificaciones\n", (int)notifications.size());
}

void saveNotifications() {
  DynamicJsonDocument doc(4096);
  JsonArray arr = doc.createNestedArray("notifications");
  for (auto &n : notifications) {
    JsonObject o = arr.createNestedObject();
    o["ts"] = n.ts;
    o["level"] = n.level;
    o["message"] = n.message;
  }
  File f = SPIFFS.open(NOTIF_FILE, FILE_WRITE);
  if (!f) {
    Serial.println("Error al abrir notifications.json para escribir");
    return;
  }
  serializeJson(doc, f);
  f.close();
}

// Lógica de riego automático:
void checkAutoWatering() {
  static unsigned long lastCheck = 0;
  unsigned long now = millis();
  if (now - lastCheck < 60000) return; // check cada 60s
  lastCheck = now;

  if (now - lastAutoWaterMillis >= autoWaterIntervalMs) {
    // condiciones ambiente
    float hum = dht.readHumidity();
    int waterLevel = readWaterLevel();
    bool obstruct = readObstruction();

    // Si hay obstrucción o poco agua, no regar
    if (obstruct) {
      createNotification("error", "Riego cancelado: obstruccion detectada");
      lastAutoWaterMillis = now; // evitar reintentos inmediatos
      return;
    }
    if (waterLevel < WATER_LEVEL_THRESHOLD) {
      createNotification("warning", "Riego cancelado: nivel de agua insuficiente");
      lastAutoWaterMillis = now;
      return;
    }
    if (!isnan(hum) && hum > RAIN_HUMIDITY_THRESHOLD) {
      createNotification("info", "Riego cancelado: humedad alta (posible lluvia)");
      lastAutoWaterMillis = now;
      return;
    }

    // Si todo OK -> activar bombas por X segundos (simulación o real)
    createNotification("info", "Riego automático iniciado");
    setPump(1, true);
    delay(5000); // regar 5s (ajustar a válvula real)
    setPump(1, false);
    createNotification("info", "Riego automático finalizado");
    lastAutoWaterMillis = now;
  }
}

// Lecturas sensorers auxiliares
int readWaterLevel() {
  // analogRead -> 0..4095
  int raw = analogRead(WATER_LEVEL_PIN);
  return raw;
}

float readPH() {
  // Esto es muy dependiente del sensor y el circuito. Aquí hacemos un mapeo simple.
  int raw = analogRead(PH_PIN);
  // Suponiendo 0..4095 -> 0..5V, mapear a pH 0..14 (solo ejemplo)
  float voltage = (raw / 4095.0) * 3.3; // si tu circuito referencia 3.3V
  float ph = 7.0 + ((2.5 - voltage) * 3.0); // fórmula aproximada, calibrar
  return ph;
}

bool readObstruction() {
  // Si usas sensor digital, cambia por digitalRead.
  int raw = analogRead(OBSTRUCTION_PIN);
  // Si la lectura supera cierto nivel consideramos obstrucción
  return (raw > 3000); // ajustar
}

// Control bombas
void setPump(int pumpIndex, bool on) {
  if (pumpIndex == 1) {
    pump1State = on;
    digitalWrite(PUMP_1_PIN, on ? HIGH : LOW);
  } else if (pumpIndex == 2) {
    pump2State = on;
    digitalWrite(PUMP_2_PIN, on ? HIGH : LOW);
  }
}

// RGB
void applyRGB(int r, int g, int b, int brightnessPercent) {
  // r,g,b esperados 0..255
  brightnessPercent = constrain(brightnessPercent, 0, 100);
  float factor = brightnessPercent / 100.0;
  int rr = (int)(constrain(r,0,255) * factor);
  int gg = (int)(constrain(g,0,255) * factor);
  int bb = (int)(constrain(b,0,255) * factor);

  ledR = rr;
  ledG = gg;
  ledB = bb;

  ledcWrite(chanR, rr);
  ledcWrite(chanG, gg);
  ledcWrite(chanB, bb);

  Serial.printf("RGB applied: %d %d %d (br %d%%)\n", rr, gg, bb, brightnessPercent);
}

// Simple escape
String jsonEscape(const String &s) {
  String out = s;
  out.replace("\"", "\\\"");
  return out;
}
