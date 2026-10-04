# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [Unreleased]

### Added

- Configuración para agentes: `CLAUDE.md`, `INICIO.md`, `docs/` y skills del proyecto en `.claude/skills/`
  (`inicio-portfolio`, `portfolio-checks`, `portfolio-docs`, `portfolio-handoff`). `handoff/` y `graphify-out/`
  quedan fuera de git.
- `sonar-project.properties` y `scripts/sonar-scan.sh`: análisis SonarQube y Quality Gate contra un SonarQube
  local, integrados en `/portfolio-checks`.
