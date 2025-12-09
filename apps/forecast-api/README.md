<div align='center'>

# 🌤️ Express: Forecast API

</div>

### API for weather forecasting data used by the Green Wall Manager mobile app.

> 🧩 Here you can see its [**Live Demo**](https://proyecto-tesis-forecast-api.vercel.app/)

![01-forecast-page-preview](https://github.com/user-attachments/assets/cbe453ee-d6ff-4e18-bff9-51b93ed078b9)


## 🚀 Description

This is a lightweight ExpressJS API that fetches weather forecast data from Open-Meteo and transforms it into a format suitable for the Green Wall Manager mobile application.

The API provides:

- 3-day weather forecasts
- Temperature ranges (min/max)
- Humidity levels
- Precipitation probability
- Weather condition classification (sunny, cloudy, rainy)

## ⚡ Getting Started

### Prerequisites

1. Git
2. Bun (any version from v1.0 or higher)
3. Node.js LTS

## 🔧 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abrahamgalue/proyecto-tesis.git
   cd proyecto-tesis/apps/forecast-api
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

### Environment Setup

Create a `.env` file in the `apps/forecast-api` directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```bash
PORT=3000
FORECAST_API_URL=https://open-meteo.com/en/docs
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

The API will be available at [http://localhost:3000](http://localhost:3000)

## 📡 API Endpoints

### `GET /`

Returns a simple message identifying the API.

**Response:**

```
Green Wall Manager: Forecast API
```

### `GET /api/forecast`

Returns a 3-day weather forecast.

**Response:**

```json
{
	"forecastDays": [
		{
			"day": "Monday",
			"type": "sunny",
			"temp": "22°/30°",
			"detail": "65% Sol"
		},
		{
			"day": "Tuesday",
			"type": "cloudy",
			"temp": "20°/28°",
			"detail": "70% Nub"
		},
		{
			"day": "Wednesday",
			"type": "rainy",
			"temp": "19°/25°",
			"detail": "80% Llu"
		}
	]
}
```

## 🎭 Technologies

- [**Express**](https://expressjs.com/) Fast, unopinionated web framework for Node.js
- [**TypeScript**](https://www.typescriptlang.org/) For type safety
- [**Bun**](https://bun.sh/) Fast JavaScript runtime and package manager
- [**Open-Meteo API**](https://open-meteo.com/) Free weather forecast API
