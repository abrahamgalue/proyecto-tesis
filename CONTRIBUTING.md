# Contributing Guide

Thanks for your interest in contributing!
This monorepo aims to facilitate collaborative development of **Green Wall Manager** (Expo/React Native mobile app) and the ESP32 firmware, as well as its local infrastructure (Supabase). Before you start, please read this guide and the [Code of Conduct](CODE_OF_CONDUCT.md).

If you want to propose an idea or a significant change, first open an **Issue** describing the problem, context, and proposal. For early discussions, you can use Issues with the `discussion` label.

## Principles

- Respect and empathy: follow the [Code of Conduct](CODE_OF_CONDUCT.md).
- Frequent iteration: prefer small, continuous changes over large monolithic PRs.
- Transparency: justify technical decisions in the PR description.
- Consistency: apply the conventions already established in the project.

## Local Environment Setup

1. Clone the repository

   ```bash
   git clone https://github.com/abrahamgalue/proyecto-tesis.git
   cd proyecto-tesis
   ```

1. Install dependencies (Bun)

   ```bash
   bun install
   ```

1. Main scripts (root)

   The root `package.json` scripts act as a proxy to the mobile app:

   ```bash
   bun run start    # Start the Expo app (apps/green-wall-manager)
   bun run lint     # Run the project linter
   bun run test     # Run the complete test suite
   bun run db:start # Start Supabase (Docker)
   bun run db:stop  # Stop Supabase services
   ```

> [!TIP]
> The project does NOT currently define `dev` or `build` at the root. For mobile app builds, use [EAS (`eas build`)](https://docs.expo.dev/build/introduction/).

1. Run the mobile app directly

   Inside `apps/green-wall-manager`:

   ```bash
   bun run start    # Interactive dev server (Expo)
   bun run web      # Build and start in web mode
   bun run android  # Open on Android emulator/device
   bun run ios      # Open on iOS simulator
   ```

1. Local Supabase (Docker)

   Inside `infra/supabase`:

   ```bash
   cp .env.example .env
   # Adjust variables as needed

   docker compose pull
   docker compose -f docker-compose.yml -f ./dev/docker-compose.dev.yml up -d
   # Access Studio: http://localhost:8000
   # Stop services:
   docker compose -f docker-compose.yml -f ./dev/docker-compose.dev.yml stop
   ```

> [!TIP]
> Alternatively, use the ROOT scripts: `bun run db:start` and `bun run db:stop`.

1. ESP32 Firmware (Optional)

   The source code is located at `apps/esp32/greenwall_esp32_example.ino`. Open it with Arduino IDE or PlatformIO, adjust credentials, and flash your device.

> [!NOTE]
> In the RELEASES section, you’ll find a [build for local development](https://github.com/abrahamgalue/proyecto-tesis/releases).

## Monorepo Structure

```bash
/apps/              # Applications (Expo mobile app, ESP32 firmware)
/infra/             # Infrastructure (Supabase Docker, scripts)
README.md           # General information
package.json        # Shared scripts and dev tooling
```

Internal structure of the mobile app (`apps/green-wall-manager`):

```bash
app/                # Routes (expo-router)
components/         # Shared components
features/           # Isolated features (auth, devices, weather...)
store/              # Global state (Zustand)
services/           # API/local HTTP logic
config/             # Configuration (Supabase, etc.)
constants/          # Design tokens and generated colors
lib/                # Utilities and formatters
__tests__/          # Tests (Jest + Testing Library)
```

Keep new features within `features/` including their UI, tests, and logic.

## Contribution Workflow

1. **Issue (optional but recommended)**: Open an issue if you’re introducing a new feature, architecture change, or significant refactor.
2. **Branch**: Create a descriptive branch from `main`:
   - `feature/<summary>`
   - `fix/<bug>`
   - `refactor/<area>`
   - `docs/<topic>`
3. **Commits**: Use conventional commits (validated by commitlint):
   - `feat: add login flow`
   - `fix: correct humidity calculation`
   - `refactor: simplify devices store`
   - `docs: update installation guide`
4. **Tests & Lint**: Before the PR, run:

   ```bash
   bun run lint
   bun run test
   ```

Tests must pass with no failures or critical warnings.

5. **Pull Request** Include:
   - Clear description (what, why, how).
   - Screenshots or logs.
   - Verification checklist (lint, tests, Supabase, migrations, etc.).

6. **Review**: Address comments and keep the history clean.

### Suggested PR Checklist

- [ ] Properly named branch
- [ ] Conventional commits
- [ ] `bun run lint` passes with no errors
- [ ] `bun run test` passes with no failures
- [ ] No temp files or compromised credentials

## Testing and Validation

- Final CI-like suite: `bun run test` (at root).
- Debug mode: `bun run testDebug` (in /app/green-wall-manager/).
- Add tests when creating new features (at minimum: unit tests).
- Use mocks in `__mocks__/` to isolate dependencies (AsyncStorage, Supabase, etc.).

If CI/CD is enabled, tests and linters will run automatically on each Pull Request. Make sure your PR is green before requesting a review.

### Testing Best Practices

- Avoid unnecessary mocks: test observable behavior.
- Use `beforeEach`/`afterEach` for common setup/teardown.
- Prefer `screen.getBy...` over fragile queries.
- Follow Testing Library and Jest conventions.

## Style Guides

- **Lint**: ESLint with Expo and Tailwind rules; run `bun run lint` before your PR.
- **Formatting**: Prettier and `prettier-plugin-tailwindcss` order classes (don’t change the order manually).
- **TypeScript**:
  - Explicit types in functions and stores. Avoid `any`.
  - Use Zod for form validation.
- **Naming**:
  - Components: `PascalCase`.
  - Hooks & stores: `camelCase` (`useWeather`, `devicesStore`).
  - Branches: prefixes (`feature/`, `fix/`, etc.).
  - Commits: conventional (validated by commitlint + husky).
- **Architecture**: Keep each feature self-contained (UI + logic + tests). Extract repeated utilities to `lib/`.

## Deployment and Builds

- For mobile builds use [EAS](https://docs.expo.dev/build/introduction/):

  ```bash
  eas build --platform android
  # or
  eas build --platform ios
  ```

- Use internal/preview channels with profiles defined in `eas.json`.
- Local Supabase is not production: use separate credentials.
- Never publish private keys.
- ESP32 firmware: compile/flash with Arduino IDE or PlatformIO (optional).

> [!TIP]
> For production you can use [Supabase](https://docs.expo.dev/guides/using-supabase/) with the same schemas defined in `infra/dev/data.sql`.

### Production Build (Expo)

1. Verify variables in `.env`.
2. Test the app in release mode (preferably on a physical device).
3. Run `eas build`.
4. Verify artifacts, signing, and publishing.

## Security

- Never include secret keys in commits.
- Use `.env` and examples (`.env.example`).
- Check [Security](SECURITY.md) for security reports.

## Resources and References

- [Readme](README.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [License](LICENSE)
- [Supabase Self-Hosting](https://supabase.com/docs/guides/self-hosting/docker)
- [Expo](https://docs.expo.dev/)
- [Bun](https://bun.sh/docs)
- [Zustand](https://zustand.docs.pmnd.rs/)
- [Conventional Commitlint](https://www.conventionalcommits.org/)

### Contact

- Issues: open one in GitHub with the appropriate label.
- Email for conduct or security: abrahamgaluecontacto@gmail.com

## Frequently Asked Questions (FAQ)

**Why is there no build script at the root?**
Because EAS is used for mobile builds. In **Releases** you’ll find a [build for local development](https://github.com/abrahamgalue/proyecto-tesis/releases).

**Can I add another app to the monorepo?** Yes, create a folder under `apps/` and set up its `package.json`. Reuse the root tooling when possible.

**How do I add a shared dependency?** Add it to the root `package.json` if it’s tooling (devDependency), otherwise install it within the specific app.

## Thanks 🙌

Every contribution improves the experience and stability of the **Green Wall Manager** ecosystem. Your contributions are welcome!
