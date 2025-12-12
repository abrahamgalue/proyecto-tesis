# Copilot Instructions for proyecto-tesis (Monorepo)

## Monorepo Overview

This repository is a monorepo that hosts:

- `apps/esp32`: ESP32 firmware source (`apps/esp32/greenwall_esp32_example.ino`).
- `apps/green-wall-manager`: React Native (Expo) mobile app (`apps/green-wall-manager`).
- `apps/forecast-api`: ExpressJS API for weather forecasting (`apps/forecast-api`).
- `apps/sensors-api`: ExpressJS API for sensor data management (`apps/sensors-api`).
- `infra/supabase`: A local Supabase stack for backend development lives under `infra/supabase`.

The root `package.json` provides scripts to run Green Wall Manager tasks and shared dev tooling (Husky, ESLint, Jest, TypeScript) as common devDependencies for current and future apps.

## App: Green Wall Manager (React Native/Expo)

- App root: `apps/green-wall-manager`
- Entry & Routing (expo-router):
  - Layouts: `app/_layout.jsx`, `app/(protected)/_layout.jsx`
  - Routes: `app/sign-in.jsx`, `app/(protected)/index.jsx`
- Features: `features/`
- Shared Components: `components/`
  - Examples: `components/ScreenWithBackButton.tsx`, `components/Footer.tsx`, `components/icons/`, `components/date/`, `components/ui/`
- State: Zustand in `store/`
- Context: Supabase provider in `context/supabase-provider.tsx`
- Services & Libs:
  - Services: `services/weather.ts`, `services/sensor.ts`
  - Utils: `lib/utils.ts`, `lib/formatters.ts`, `lib/colors.ts`
- Config & Constants:
  - Supabase client: `config/supabase.ts`
  - Colors: `constants/colors.ts`, `constants/generatedColors.ts`
  - Tailwind: `tailwind.config.js`, `nativewind-env.d.ts`
- Tests (Jest): `__tests__/`
  - Use mocks from `__mocks__/`

## App: ESP32 Firmware

- Source: `apps/esp32/greenwall_esp32_example.ino`
- Flashing and run-time: Use Arduino IDE (or PlatformIO) to build and flash the sketch to a physical ESP32 board. The firmware starts an HTTP server in AP mode (default SSID `GreenWall_ESP32`, password `greenwall123`) and runs continuously in the main loop.
- Communication model: The mobile app communicates directly with the ESP32 over the local Wi‑Fi network using HTTP GET/POST requests to the ESP32 host (SoftAP IP, typically `192.168.4.1`). Core endpoints include:
  - `GET /status` — current sensor readings and device state
  - `POST /setDevice` — toggle pumps/lights
  - `POST /setColor` — set RGB and brightness
  - `GET /notifications`, `POST /notifications/clear`
  - `POST /setSchedule` — configure automatic watering interval
- Note: This ESP32-to-app communication does not go through the Supabase backend; it's direct over local HTTP.

## App: ExpressJS APIs (Forecast & Sensors)

### Forecast API

- App root: `apps/forecast-api`
- Stack: ExpressJS + TypeScript, running on Bun
- Purpose: Provides weather forecast data by proxying/aggregating external weather APIs
- Entry point: `src/index.ts`
- Config: `config/`
- Environment:
  - `PORT`: Server port (default: 3000)
  - `FORECAST_API_URL`: External weather API endpoint
- Communication: The mobile app calls this API over HTTP to fetch forecast data

### Sensors API

- App root: `apps/sensors-api`
- Stack: ExpressJS + TypeScript, running on Bun
- Purpose: Manages and serves sensor data for the green wall system
- Entry point: `src/index.ts`
- Config: `config/`
- Lib: `lib/`
- Environment:
  - `PORT`: Server port (default: 3001)
- Communication: The mobile app calls this API over HTTP to fetch and manage sensor readings

## Backend: Local Supabase (Docker)

- Location: `infra/supabase`
- Compose files: `infra/supabase/docker-compose.yml` with dev overlay `infra/supabase/dev/docker-compose.dev.yml`
- Docs reference: https://supabase.com/docs/guides/self-hosting/docker

```bash
# 1) Copy env and adjust as needed
cp .env.example .env

# 2) Pull images
docker compose pull

# 3) Start with dev overlay (seeds the database)
docker compose -f docker-compose.yml -f ./dev/docker-compose.dev.yml up

# 4) Stop
docker compose down

# 5) Full reset helper
./reset.sh
```

Access:

- Studio: http://localhost:8000 (configure dashboard credentials via env)
- APIs via Kong gateway: REST/auth/storage/realtime proxied as configured in compose

See additional details in `infra/supabase/README.md`.

## Environment Configuration (Mobile App)

### Environment Variables

The mobile app (`apps/green-wall-manager`) uses the following environment variables:

```bash
EXPO_PUBLIC_SUPABASE_URL=YOUR_REACT_NATIVE_SUPABASE_URL
EXPO_PUBLIC_SUPABASE_KEY=YOUR_REACT_NATIVE_SUPABASE_PUBLISHABLE_KEY

EXPO_PUBLIC_FORECAST_API_URL=http://localhost:3000/api/forecast
EXPO_PUBLIC_SENSOR_API_URL=http://localhost:3001/api/sensors
EXPO_PUBLIC_WEATHER_API_URL=https://cloud.urbe.edu/web/v1/core/weather
```

### Localhost vs IP Address Configuration

**Important:** `localhost` URLs do NOT work in all development scenarios. Configure based on your environment:

#### Supabase URL

- **Cloud Supabase**: Use cloud project URL (e.g., `https://your-project.supabase.co`)
- **Local Supabase (Docker)**:
  - Android Emulator: `http://10.0.2.2:8000`
  - Physical Android Device: `http://YOUR_IPV4:8000`
  - iOS Simulator: `http://localhost:8000`

#### API Endpoints (Forecast, Sensors)

- **iOS Simulator / Expo Go**: `http://localhost:PORT`
- **Android Emulator**: `http://10.0.2.2:PORT`
- **Physical Android Device (Dev Build)**: `http://YOUR_IPV4:PORT`

**Finding your IPv4 address (Windows):**

```bash
ipconfig
```

Look for the IPv4 address under your active network interface (e.g., `192.168.1.20`). Your device must be on the same local network.

**Why 10.0.2.2 for Android Emulator:**
The Android Emulator uses `10.0.2.2` as a special alias to the host machine's `localhost`. This is an Android Emulator-specific IP address.

## Developer Workflows

Bun is the only supported package manager and script runner for app tasks.

Root scripts (proxy to Green Wall Manager app and APIs):

- Start dev: `bun start` (starts all apps with start scripts)
- Start mobile only: `bun run start:mobile`
- Start forecast API: `bun run start:api-forecast`
- Start sensors API: `bun run start:api-sensors`
- Dev mode (hot reload):
  - Forecast API: `bun run dev:api-forecast`
  - Sensors API: `bun run dev:api-sensors`
- Lint: `bun run lint`
- Test (final suite): `bun test`

Per-app (explicit cwd), if needed:

- Start: `bun run --cwd apps/green-wall-manager start`
- Android: `bun run --cwd apps/green-wall-manager android`
- iOS: `bun run --cwd apps/green-wall-manager ios`
- Lint: `bun run --cwd apps/green-wall-manager lint`
- Lint and fix: `bun run --cwd apps/green-wall-manager lint:fix`
- Tests:
  - All (CI suite): `bun run --cwd apps/green-wall-manager testFinal`
  - Watch changed: `bun run --cwd apps/green-wall-manager test`
  - Debug (only failed): `bun run --cwd apps/green-wall-manager testDebug`
- Generate colors: `bun run --cwd apps/green-wall-manager generate-colors`

## Conventions & Patterns (Green Wall Manager)

- File naming: PascalCase for components, camelCase for hooks/stores.
- Feature isolation: Keep feature UI, logic, and tests within their folders.
- Assets: `assets/`
- MCP server config: `.vscode/mcp.json` (if present)

## Example: Adding a Feature (Green Wall Manager)

1. Create a feature folder in `features/`.
2. Add reusable UI to `components/`.
3. Add state logic to `store/`.
4. Add API/service logic to `services/`.
5. Add tests under `__tests__/features`.

## Conventions & Patterns (ExpressJS APIs)

### Common Conventions

- **Runtime**: Bun (not Node.js) for all TypeScript execution
- **File naming**: camelCase for files, PascalCase for types/interfaces
- **Module system**: ESM (`"type": "module"` in package.json)
- **TypeScript**: Strict mode enabled in `tsconfig.json`

### Standard Folder Structure

```
apps/[api-name]/
├── src/
│   └── index.ts          # Entry point
├── config/               # Configuration files
├── constants/            # Constants and enums (if needed)
├── lib/                  # Utility functions and helpers (if needed)
├── .env                  # Environment variables (gitignored)
├── .env.example          # Environment template
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

### TypeScript Configuration

Each API should have a `tsconfig.json` with:

- `"module": "ESNext"`
- `"target": "ESNext"`
- `"moduleResolution": "bundler"`
- Strict type checking enabled

### Environment Variables

- Always create `.env.example` with placeholder values
- Document required variables in comments
- Common variables:
  - `PORT`: Server port number
  - API-specific URLs or keys

### Package.json Scripts

Standard scripts for all APIs:

- `"start": "bun run ./src/index.ts"` - Production start
- `"dev": "bun --hot run ./src/index.ts"` - Development with hot reload

## Example: Creating a New API

1. **Create app folder**:

   ```bash
   mkdir -p apps/[api-name]/{src,config}
   cd apps/[api-name]
   ```

2. **Initialize package.json**:

   ```json
   {
   	"name": "[api-name]",
   	"version": "1.0.0",
   	"type": "module",
   	"scripts": {
   		"start": "bun run ./src/index.ts",
   		"dev": "bun --hot run ./src/index.ts"
   	},
   	"dependencies": {
   		"express": "5.1.0"
   	},
   	"devDependencies": {
   		"@types/node": "20.11.17",
   		"@types/express": "5.0.0",
   		"typescript": "5.8.3"
   	}
   }
   ```

3. **Create tsconfig.json**:

   ```json
   {
   	"extends": "../../tsconfig.json",
   	"compilerOptions": {
   		"target": "ESNext",
   		"module": "ESNext",
   		"moduleResolution": "bundler",
   		"strict": true,
   		"esModuleInterop": true,
   		"skipLibCheck": true,
   		"forceConsistentCasingInFileNames": true
   	},
   	"exclude": ["node_modules"]
   }
   ```

4. **Create .env.example**:

   ```bash
   PORT=3000
   # Add other required environment variables
   ```

5. **Create .gitignore**:

   ```
   node_modules/
   .env
   dist/
   ```

6. **Create src/index.ts** with basic Express setup

7. **Add root scripts** in root `package.json`:

   ```json
   "start:[api-name]": "bun run --cwd apps/[api-name] start",
   "dev:[api-name]": "bun run --cwd apps/[api-name] dev"
   ```

8. **Install dependencies**:
   ```bash
   bun install
   ```

---

If any conventions are unclear or missing, ask for clarification or examples.
