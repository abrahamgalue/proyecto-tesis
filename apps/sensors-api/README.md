<div align='center'>

# 📊 Express: Sensors API

</div>

### API for sensor data monitoring used by the Green Wall Manager mobile app.

> 🧩 Here you can see its [**Live Demo.**](https://proyecto-tesis-sensors-api.vercel.app/)

## 🚀 Description

This is a lightweight ExpressJS API that provides sensor data for the Green Wall Manager mobile application. Currently, it generates simulated sensor readings for development and testing purposes.

The API provides:

- Water level monitoring
- Soil temperature readings
- Substrate temperature readings
- pH level measurements
- Water flow obstruction detection

## ⚡ Getting Started

### Prerequisites

1. Git
2. Bun (any version from v1.0 or higher)
3. Node.js LTS

## 🔧 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abrahamgalue/proyecto-tesis.git
   cd proyecto-tesis/apps/sensors-api
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

### Environment Setup

Create a `.env` file in the `apps/sensors-api` directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```bash
PORT=3001
```

### Local Execution

Start the development server:

```bash
bun run dev
```

Or start the production server:

```bash
bun run start
```

The API will be available at [http://localhost:3001](http://localhost:3001)

## 📡 API Endpoints

### `GET /`

Returns a simple message identifying the API.

**Response:**

```
Green Wall Manager: Sensors API
```

### `GET /api/sensors`

Returns current sensor readings.

**Response:**

```json
{
	"waterLevel": "75%",
	"soilTemp": "24°C",
	"substrateTemp": "22°C",
	"phLevel": 6.2,
	"waterFlowObstruction": "5%"
}
```

**Note:** Currently returns simulated data with random values within realistic ranges for development purposes.

## 🎭 Technologies

- [**Express**](https://expressjs.com/) Fast, unopinionated web framework for Node.js
- [**TypeScript**](https://www.typescriptlang.org/) For type safety
- [**Bun**](https://bun.sh/) Fast JavaScript runtime and package manager
