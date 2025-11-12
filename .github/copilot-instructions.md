# Copilot Instructions for proyecto-tesis (Monorepo)

## Monorepo Overview

This repository is a monorepo that hosts:

- `apps/esp32`: ESP32 firmware source (`apps/esp32/greenwall_esp32_example.ino`).
- `apps/green-wall-manager`: React Native (Expo) mobile app (`apps/green-wall-manager`).
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
- Note: This ESP32-to-app communication does not go through the Supabase backend; it’s direct over local HTTP.

## Backend: Local Supabase (Docker)

- Location: `infra/supabase`
- Compose files: `infra/supabase/docker-compose.yml` with dev overlay `infra/supabase/dev/docker-compose.dev.yml`
- Docs reference: https://supabase.com/docs/guides/self-hosting/docker

Quick start (from `infra/supabase`):

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

## Developer Workflows

Bun is the only supported package manager and script runner for app tasks.

Root scripts (proxy to Green Wall Manager app):

- Start dev: `bun start`
- Lint: `bun run lint`
- Test (final suite): `bun test`

Per-app (explicit cwd), if needed:

- Start: `bun run --cwd apps/green-wall-manager start`
- Web: `bun run --cwd apps/green-wall-manager web`
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

---

If any conventions are unclear or missing, ask for clarification or examples.
