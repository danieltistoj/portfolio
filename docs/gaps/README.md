# Gaps

**Versión:** `v1.3`
**Fecha:** 2026-10-04

## Abiertos

| ID | Brecha | Impacto | Detectado | Referencia |
|---|---|---|---|---|
| G-01 | `components/ContactForm.tsx` (react-hook-form + zod) no se importa en ninguna página; el formulario real es un `<form>` nativo a Formspree en `page.tsx` | Código y dependencias sin uso | 2026-10-03 | |
| G-02 | Conviven `package-lock.json` y `yarn.lock` | Resoluciones distintas según el gestor | 2026-10-03 | |
| G-05 | `README.md` es el de `create-next-app` | No describe el proyecto | 2026-10-03 | |

## Cerrados

| ID | Brecha | Cierre | Referencia |
|---|---|---|---|
| G-03 | Varias dependencias en `latest` en `package.json` | Todas fijadas a una versión exacta. Se confirmó el riesgo real: un `npm install` de rutina subió `lucide-react` de major y rompió el build (`Github`/`Linkedin` ya no se exportan igual) | `package.json` |
| G-04 | Las imágenes de estadísticas de GitHub se piden por `http://` | Cambiadas a `https://` en `app/[locale]/page.tsx:323,328` | [#2](https://github.com/danieltistoj/portfolio/issues/2) |

## Changelog

| Versión | Fecha | Cambio |
|---|---|---|
| `v1.3` | 2026-10-04 | G-03 cerrado: dependencias fijadas a versión exacta |
| `v1.2` | 2026-10-04 | G-04 cerrado: imágenes de estadísticas de GitHub movidas a `https://` |
| `v1.1` | 2026-10-04 | G-04 enlazado a [danieltistoj/portfolio#2](https://github.com/danieltistoj/portfolio/issues/2) |
| `v1.0` | 2026-10-03 | Versión inicial |
