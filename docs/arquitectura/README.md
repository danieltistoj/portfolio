# Arquitectura

**Versión:** `v1.0`
**Fecha:** 2026-10-03

## Estructura

Sitio de una sola página. `app/[locale]/page.tsx` contiene todas las secciones; los componentes de `components/`
se extraen solo cuando tienen estado o se reutilizan.

## Internacionalización

- Locales en `i18n/config.ts`: `en` (por defecto), `es`, `pt`. `localePrefix: "as-needed"`: el inglés va sin
  prefijo (`/`), los demás con él (`/es`, `/pt`).
- `middleware.ts` resuelve el locale; `i18n/request.ts` carga `messages/<locale>.json` y cae en el locale por
  defecto si no es válido.
- `next-intl.config.js` repite la lista de locales; si se añade uno, actualizar ambos archivos y `messages/`.

## Servicios externos

| Servicio | Uso | Dónde |
|---|---|---|
| Formspree | Envío del formulario de contacto (`action` del `<form>`) | `app/[locale]/page.tsx` |
| github-profile-summary-cards | Imágenes de estadísticas de GitHub | `app/[locale]/page.tsx` |

## Decisiones

- Sin backend propio: el contacto lo resuelve Formspree.
- UI con primitivas de `components/ui/` (Radix + `class-variance-authority` + `tailwind-merge`), sin librería de
  componentes completa.

## Changelog

| Versión | Fecha | Cambio |
|---|---|---|
| `v1.0` | 2026-10-03 | Versión inicial |
