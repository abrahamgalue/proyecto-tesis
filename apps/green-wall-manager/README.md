<div align='center'>

# 🌳 Expo: Green Wall Manager

</div>

### Modern indoor garden app for mobile, built with Expo.

> 🧩 Here you can see its [**Live Demo.**](https://github.com/abrahamgalue/proyecto-tesis/releases)

<p align="center">
  <img src="https://github.com/user-attachments/assets/e020cc76-7635-448b-b2eb-88c7b091e6c9" alt="App Icon" width="128"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/7d06363a-e13e-4cee-ab18-6a679ba26f27" alt="Screenshot 1" width="200"/>
  <img src="https://github.com/user-attachments/assets/d5074e0f-2eb3-48fa-8a02-0d52719fc19c" alt="Screenshot 2" width="200"/>
  <img src="https://github.com/user-attachments/assets/16db1582-136a-4192-af3b-28ff702c8544" alt="Screenshot 3" width="200"/>
  <img src="https://github.com/user-attachments/assets/e9b76873-e98f-4d6d-a23f-fc1f2e8c963e" alt="Screenshot 4" width="200"/>
</p>

## 🚀 Description

**Green Wall Manager** is designed to make monitoring and controlling lights, pumps, weather, and notifications simple and seamless.

The app features:

- **Weather Dashboard**: Current conditions, forecasts, and helpful alerts
- **Device Control**: Manage lights and pumps with real-time status and quick actions
- **Notifications**: Stay informed about weather changes and device events
- **Authentication & Account**: Sign in securely and manage your profile
- **Settings**: Customize preferences and app behavior
- **Modern UI**: Clean, responsive design with smooth animations and dark/light modes
- **Cross-Platform**: Works on Android and iOS

## ⚡ Getting Started

### Prerequisites

1. Git
2. Bun (any version from v1.0 or higher)
3. Node.js LTS
4. For device/simulator:
   - Android Studio (SDK 34+) or Xcode (for iOS simulators)
   - Expo Go or a [custom dev client](https://github.com/abrahamgalue/proyecto-tesis/releases)
5. Docker (Windows, macOS, or Linux) for backend services

## 🔧 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abrahamgalue/proyecto-tesis.git
   cd proyecto-tesis/apps/green-wall-manager
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

### Environment Setup

Create a `.env` file in the `apps/green-wall-manager` directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your Supabase connection details and API endpoint URLs:

```bash
EXPO_PUBLIC_API_URL=YOUR_REACT_NATIVE_SUPABASE_URL
EXPO_PUBLIC_API_KEY=YOUR_REACT_NATIVE_SUPABASE_ANON_KEY

FORECAST_API_URL=http://localhost:3000/api/forecast
SENSOR_API_URL=http://localhost:3001/api/sensors
WEATHER_API_URL=https://cloud.urbe.edu/web/v1/core/weather
```

**Important notes:**

- The Supabase URL should point to your local or emulator Supabase API (e.g. `http://10.0.2.2:8000` for Android Emulator)
- The Supabase keys match those from the backend `.env` (`ANON_KEY`)
- The example API endpoint URLs are provided for reference; adjust them based on your setup

### Local Execution

Start the mobile app:

```bash
bun run start
```

Start on iOS simulator:

```bash
bun run ios
```

Start on Android emulator:

```bash
bun run android
```

## 🧪 Testing

Run all tests:

```bash
bun run test
```

Run tests in debug mode:

```bash
bun run testDebug
```

Run final test suite with coverage:

```bash
bun run testFinal
```

## 🎨 Linting & Formatting

Run lint:

```bash
bun run lint
```

Auto-fix lint issues:

```bash
bun run lint:fix
```

Generate design tokens (colors):

```bash
bun run generate-colors
```

## 🎭 Technologies

- [**Expo**](https://expo.dev/) Cross-platform development framework
- [**React Native**](https://reactnative.dev/) Mobile app framework
- [**TypeScript**](https://www.typescriptlang.org/) For type safety
- [**Expo Router**](https://docs.expo.dev/versions/latest/sdk/router/) File-based navigation and deep linking
- [**Zustand**](https://zustand.docs.pmnd.rs/getting-started/introduction) Lightweight global state management
- [**AsyncStorage**](https://react-native-async-storage.github.io/) State persistence
- [**React Hook Form**](https://react-hook-form.com/) Form management
- [**Zod**](https://zod.dev/) Type-safe schema validation
- [**TanStack Query**](https://tanstack.com/query/latest) Data fetching and caching
- [**Supabase**](https://supabase.com/) Authentication and backend services
- [**NativeWind**](https://www.nativewind.dev/) / [**Tailwind CSS**](https://tailwindcss.com/) Utility-first styling
- [**expo-image**](https://docs.expo.dev/versions/latest/sdk/image/) Performant image rendering
- [**Jest**](https://jestjs.io/) + [**Testing Library**](https://callstack.github.io/react-native-testing-library/index) Unit and UI testing
- [**Metro**](https://metrobundler.dev/) Fast development builds
