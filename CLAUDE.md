# CLAUDE.md

Guía para Claude Code (y cualquier agente) en este repositorio. Al empezar una sesión: skill `/inicio-portfolio`
(o [`INICIO.md`](INICIO.md)). Antes de dar un cambio por terminado: `/portfolio-checks`. Documentación:
`/portfolio-docs`. Cierre de sesión: `/portfolio-handoff`.

## Qué es

Portafolio personal de una sola página en Next.js 16 (App Router), React 19, Tailwind CSS 4 y TypeScript, con
traducciones en `en` (por defecto), `es` y `pt` vía `next-intl`. Remoto: `github.com/danieltistoj/portfolio`.

| Ruta | Contenido |
|---|---|
| `app/[locale]/` | `layout.tsx`, `page.tsx` (todas las secciones), `not-found.tsx` |
| `components/` | `LanguageSwitcher`, `ContactForm`; `ui/` con primitivas estilo shadcn (Radix + CVA) |
| `i18n/` | `config.ts` (locales, `routing` con `localePrefix: "as-needed"`), `request.ts`, `navigation.ts` |
| `messages/` | `en.json`, `es.json`, `pt.json`: todo el texto visible |
| `middleware.ts` | Middleware de `next-intl` |
| `public/` | Imagen de perfil (`images/`) y CV en PDF (`cv/`) |

Servicios externos: el formulario de contacto envía a Formspree y las estadísticas de GitHub son imágenes de
`github-profile-summary-cards`. Arquitectura y decisiones: [`docs/arquitectura/README.md`](docs/arquitectura/README.md).

## Comandos

```bash
npm install          # dependencias (package-lock.json)
npm run dev          # http://localhost:3000
npm run lint         # ESLint (eslint-config-next)
npx tsc --noEmit     # tipos
npm run build        # build de producción
./scripts/sonar-scan.sh   # SonarQube + Quality Gate (SONAR_HOST_URL y SONAR_TOKEN del entorno)
graphify update .    # actualizar el grafo local (graphify-out/, no versionado)
```

## Reglas

- **Texto en `messages/`:** nada de texto visible en duro en los componentes. Una clave nueva va en los tres
  idiomas en el mismo cambio.
- **Cambio mínimo:** sin abstracciones de un solo uso, sin dependencias nuevas para lo que resuelven unas líneas
  o la plataforma (CSS, HTML nativo).
- **Datos personales:** solo los que ya son públicos en el sitio. Nunca secretos ni `.env` en el repositorio.
- **Git:** rama propia (`feat/`, `fix/`, `docs/`, `chore/`); nunca commit ni push en `main`. Sin `git add -A` ni
  `git add .`. Sin commit ni push sin confirmación explícita.
- **Documentación:** en español, con `CHANGELOG.md` actualizado en el mismo cambio (skill `/portfolio-docs`).
