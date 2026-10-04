# Gaps

**Versión:** `v1.0`
**Fecha:** 2026-10-03

## Abiertos

| ID | Brecha | Impacto | Detectado |
|---|---|---|---|
| G-01 | `components/ContactForm.tsx` (react-hook-form + zod) no se importa en ninguna página; el formulario real es un `<form>` nativo a Formspree en `page.tsx` | Código y dependencias sin uso | 2026-10-03 |
| G-02 | Conviven `package-lock.json` y `yarn.lock` | Resoluciones distintas según el gestor | 2026-10-03 |
| G-03 | Varias dependencias en `latest` en `package.json` | Builds no reproducibles sin lockfile | 2026-10-03 |
| G-04 | Las imágenes de estadísticas de GitHub se piden por `http://` | Contenido mixto en producción (HTTPS) | 2026-10-03 |
| G-05 | `README.md` es el de `create-next-app` | No describe el proyecto | 2026-10-03 |

## Cerrados

| ID | Brecha | Cierre | Referencia |
|---|---|---|---|

## Changelog

| Versión | Fecha | Cambio |
|---|---|---|
| `v1.0` | 2026-10-03 | Versión inicial |
