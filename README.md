<div align='center'>

# Green Wall Manager 🌳

</div>

<p align="center">
  <img src="https://github.com/user-attachments/assets/e020cc76-7635-448b-b2eb-88c7b091e6c9" alt="App Icon" width="128"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/7d06363a-e13e-4cee-ab18-6a679ba26f27" alt="Screenshot 1" width="200"/>
  <img src="https://github.com/user-attachments/assets/d5074e0f-2eb3-48fa-8a02-0d52719fc19c" alt="Screenshot 2" width="200"/>
  <img src="https://github.com/user-attachments/assets/16db1582-136a-4192-af3b-28ff702c8544" alt="Screenshot 3" width="200"/>
  <img src="https://github.com/user-attachments/assets/e9b76873-e98f-4d6d-a23f-fc1f2e8c963e" alt="Screenshot 4" width="200"/>
</p>

<p align="center">
    <a href="https://github.com/abrahamgalue/proyecto-tesis/releases/latest">
        <img src="https://img.shields.io/github/v/release/abrahamgalue/proyecto-tesis?include_prereleases&logo=github&style=for-the-badge&label=Latest%20Release&labelColor=072b31" alt="Latest Release">
    </a>
    <a href="https://github.com/abrahamgalue/proyecto-tesis/releases">
        <img src="https://img.shields.io/github/downloads/abrahamgalue/proyecto-tesis/total?style=for-the-badge&labelColor=072b31" alt="Total Downloads">
    </a>
</p>

**Green Wall Manager** is a modern indoor garden app for mobile, built with Expo. It's designed to make monitoring and controlling lights, pumps, weather, and notifications simple and seamless.

## ✨ Core Features

- **Weather Dashboard**: Current conditions, forecasts, and helpful alerts.
- **Device Control**: Manage lights and pumps with real-time status and quick actions.
- **Notifications**: Stay informed about weather changes and device events.
- **Authentication & Account**: Sign in securely and manage your profile.
- **Settings**: Customize preferences and app behavior.
- **Modern UI**: Clean, responsive design with smooth animations and dark/light modes.
- **Cross-Platform**: Works on Android, iOS, and the web with Expo.

## 🛠️ Tech Stack & Architecture

- **Language**: TypeScript + JavaScript with [Expo](https://expo.dev/) and [React Native](https://reactnative.dev/) for cross‑platform development.
- **Navigation**: [Expo Router](https://docs.expo.dev/versions/latest/sdk/router/) for file‑based navigation and deep linking.
- **State**: [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) with persistence via [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) for lightweight global state.
- **Forms/Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for type‑safe forms and schema validation.
- **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest) for caching, background refetching, and mutation management.
- **Auth**: [Supabase](https://supabase.com/) for authentication and backend data services.
- **UI**: [NativeWind](https://www.nativewind.dev/) / [Tailwind CSS](https://tailwindcss.com/) for utility‑first styling and theme support (dark/light).
- **Images**: [expo-image](https://docs.expo.dev/versions/latest/sdk/image/) for performant, cached image rendering.
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) for smooth, native‑driven animations and gestures.
- **Testing**: [Jest](https://jestjs.io/) + [Testing Library for React Native](https://callstack.github.io/react-native-testing-library/index) for unit and UI tests.
- **Bundler**: [Metro](https://metrobundler.dev/) for fast development builds and transforms.
- **Runtime**: [Docker Compose](https://docs.docker.com/compose/) for backend orchestration.
- **Database**: [PostgreSQL](https://www.postgresql.org/) managed by Supabase.
- **API**: [Supabase RESTful & Realtime APIs](https://supabase.com/docs/guides/api) for data access and synchronization.
- **Studio**: [Supabase Studio](https://supabase.com/docs/guides/self-hosting/docker#accessing-supabase-studio) available locally on port 8000.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js LTS.
- Node package manager installed: npm, pnpm, yarn or bun (I use bun for the examples).
- For device/simulator:
  - Android Studio (SDK 34+) or Xcode (for iOS simulators).
  - Expo Go or a [custom dev client](https://github.com/abrahamgalue/proyecto-tesis/releases).
- Git
- Docker (Windows, macOS, or Linux)

### 📱 Frontend Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/abrahamgalue/proyecto-tesis.git
   cd proyecto-tesis
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Environment variables**
   Inside `apps/green-wall-manager`, copy `.env.example` to `.env` and edit it:

   ```bash
   cd apps/green-wall-manager
   cp .env.example .env
   ```

   Inside, set your Supabase connection details:

   ```bash
   EXPO_PUBLIC_API_URL=YOUR_REACT_NATIVE_SUPABASE_URL
   EXPO_PUBLIC_API_KEY=YOUR_REACT_NATIVE_SUPABASE_ANON_KEY
   ```

   - The URL should point to your local or emulator Supabase API (e.g. `http://10.0.2.2:8000` for Android Emulator).
   - These keys match those from the backend `.env` (`ANON_KEY`).

4. **Start the app**
   - From the project root:
     ```bash
     bun run start
     ```
   - Or navigate to the app folder for more scripts:
     ```bash
     cd apps/green-wall-manager
     bun run ios
     bun run android
     ```

### 🗄️ Backend Setup

1. **Environment variables**
   Inside `infra/supabase`, copy `.env.example` to `.env` and edit it:

   ```bash
   cd infra/supabase
   cp .env.example .env
   ```

   Adjust any variables as needed (e.g., passwords, ports).

1. **Start Supabase locally** From the project root:

   ```bash
   bun run db:start
   ```

1. **Stop Supabase**

   ```bash
   bun run db:stop
   ```

1. **Access Supabase Studio**
   - URL: [http://localhost:8000](http://localhost:8000)
   - Default credentials:
     ```
     Username: supabase
     Password: this_password_is_insecure_and_should_be_updated
     ```
   - Change these immediately as documented here:
     - [Dashboard authentication](https://supabase.com/docs/guides/self-hosting/docker#dashboard-authentication)
     - [Securing your services](https://supabase.com/docs/guides/self-hosting/docker#securing-your-services)

1. **Generate API keys**
   Follow these guides to generate new anon and service keys:
   - [Generate and update keys](https://supabase.com/docs/guides/self-hosting/docker#update-api-keys)

   Replace `ANON_KEY` and `SERVICE_ROLE_KEY` in `infra/supabase/docker/.env`.

1. **Create your first user**
   Once the dashboard is running, create a user in the **Authentication** section — this user’s credentials will be used to log in to the mobile app.

## 🧪 Testing

- Run all frontend tests from the root:

  ```bash
  bun run test
  ```

- You can also run test scripts directly inside `apps/green-wall-manager` for more granular control:
  ```bash
  cd apps/green-wall-manager
  bun run test
  bun run testDebug
  bun run testFinal
  ```

In the future, the test setup can be extended to support multiple apps in the monorepo.

## 🎨 Linting, Formatting & Colors

- Run lint:

  ```bash
  bun run lint
  ```

- Auto-fix lint issues:
  ```bash
  bun run lint:fix
  ```

Currently, this only applies to `apps/green-wall-manager`, but it can be expanded to include other workspaces in the future.

- Generate design tokens (colors) and auto-fix generated file:
  ```bash
  bun run generate-colors
  ```

Output is written to [`apps/green-wall-manager/constants/generatedColors.ts`](apps/green-wall-manager/constants/generatedColors.ts). Tailwind tokens are configured in [`apps/green-wall-manager/tailwind.config.js`](apps/green-wall-manager/tailwind.config.js).

## 📂 Project Structure

```bash
greenwall-monorepo/
├── apps
│   ├── esp32                  # ESP32 firmware
│   └── green-wall-manager     # Expo mobile app
├── bun.lock                   # Bun lockfile
├── bunfig.toml                # Bun configuration
├── infra
│   └── supabase               # Supabase infrastructure
├── package.json               # Root workspace setup
└── tsconfig.json              # TS configuration
```

## License

See [LICENSE](LICENSE).

## Contributing Guidelines

See [CONTRIBUTING](CONTRIBUTING.md).

## Code of Conduct

See [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md).
