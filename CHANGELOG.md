# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [Unreleased]

### Added

- Configuración para agentes: `CLAUDE.md`, `INICIO.md`, `docs/` y skills del proyecto en `.claude/skills/`
  (`inicio-portfolio`, `portfolio-checks`, `portfolio-docs`, `portfolio-handoff`). `handoff/` y `graphify-out/`
  quedan fuera de git.
- `sonar-project.properties` y `scripts/sonar-scan.sh`: análisis SonarQube y Quality Gate contra un SonarQube
  local, integrados en `/portfolio-checks`.
- Tests con Vitest y Testing Library para `lib/utils.ts` y `components/LanguageSwitcher.tsx` (`npm test`,
  `npm run test:run`), con cobertura reportada a SonarQube.

### Changed

- Todas las dependencias de `package.json` fijadas a una versión exacta; ninguna queda en `latest`. Cierra
  G-03 en `docs/gaps/README.md`.
- `npm` como único gestor de paquetes: eliminado `yarn.lock`. Cierra G-02.

### Removed

- `components/ContactForm.tsx` y su test: no se importaba en ninguna página (el formulario real es el `<form>`
  nativo a Formspree en `page.tsx`). Con él, las dependencias `react-hook-form`, `@hookform/resolvers` y `zod`,
  que solo él usaba. Cierra G-01.

### Fixed

- Imágenes de estadísticas de GitHub cargadas por `http://` en vez de `https://`, lo que generaba contenido
  mixto en producción. Cierra [#2](https://github.com/danieltistoj/portfolio/issues/2).
