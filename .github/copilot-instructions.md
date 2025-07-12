# Copilot Instructions for proyecto-tesis

## Project Overview

This is a React Native (Expo) application with TypeScript support, organized for modularity and maintainability. The codebase is structured around feature folders, shared components, hooks, context providers, and service integrations.

## Architecture & Key Patterns

- **App Entry & Layouts:**
  - Main navigation and layout logic is in `app/_layout.jsx` and `app/(protected)/_layout.jsx`.
  - Route-based file organization under `app/` (e.g., `sign-in.jsx`, `(protected)/index.jsx`).
- **Feature Modules:**
  - Features are grouped in `features/` (e.g., `account/`, `auth/`, `devices/`, `settings/`, `weather/`).
- **Shared Components:**
  - Reusable UI elements in `components/` (e.g., `ScreenWithBackButton.tsx`, `Footer.tsx`, `icons/`, `date/`, `ui/`).
- **State Management:**
  - Zustand is used for state management (`store/`).
- **Context Providers:**
  - Supabase context in `context/supabase-provider.jsx`.
- **Services & Libs:**
  - API/service logic in `services/` (e.g., `weather.ts`).
  - Utility functions in `lib/` (e.g., `utils.ts`, `formatters.ts`).
- **Config & Constants:**
  - Supabase config in `config/supabase.ts`.
  - Color constants in `constants/colors.ts` and generated colors in `constants/generatedColors.ts`.

## Developer Workflows

**Build & Start:**

- Bun is the only supported package manager and script runner. Do NOT use npm or npx.
- Start the app: `bunx expo start` or `bun start`
- Start for web: `bun run web`
- Start for Android: `bun run android`
- Start for iOS: `bun run ios`

**Testing:**

- Run all tests: `bun test`
- Debug tests: `bun run testDebug`
- Run final test suite: `bun run testFinal`
- Tests use Jest and are located in `__tests__/`.
- Use mocks from `__mocks__/`.

**Linting & Formatting:**

- Lint: `bun run lint`
- Lint and fix: `bun run lint:fix`
- Format: Prettier is configured (see `package.json`).

**Color Generation:**

- Generate colors and auto-fix: `bun run generate-colors`

**Nativewind/Tailwind:**

- Tailwind CSS config is in `tailwind.config.js` and `nativewind-env.d.ts`.

**Supabase Integration:**

- Credentials are managed via environment variables and context provider.
- MCP server config is in `.vscode/mcp.json`.

## Conventions & Patterns

- **File Naming:**
  - Use PascalCase for components, camelCase for hooks and stores.
- **Testing:**
  - Test files mirror source structure and use `*-test.js(x)` naming.
- **Feature Isolation:**
  - Keep feature logic, UI, and tests within their respective folders.
- **Assets:**
  - Images and fonts in `assets/`.

## Integration Points

- **Supabase:**
  - Used for authentication and backend data. Configured in `config/supabase.ts` and context provider.
- **Weather Service:**
  - API logic in `services/weather.ts` and related feature in `features/weather/`.
- **Expo:**
  - Handles app build, device features, and deployment.

## Example: Adding a Feature

1. Create a folder in `features/`.
2. Add UI components to `components/` if reusable.
3. Add state logic to `store/` if needed.
4. Add service/API logic to `services/`.
5. Add tests to `__tests__/features/<feature>`.

---

For questions about unclear conventions or missing documentation, ask the user for clarification or examples.
