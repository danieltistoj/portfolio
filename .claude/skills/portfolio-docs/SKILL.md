---
name: portfolio-docs
description: "Use when a portfolio change touches a section, component, i18n config, external service or dependency, or when creating or editing docs/ or CHANGELOG.md in this repository. Triggers on 'documenta esto', 'actualiza el changelog', 'agrega la bitácora', 'anota el gap'. Keeps docs/arquitectura/, docs/gaps/, docs/bitacora/ and CHANGELOG.md in sync with the code, with versions and changelog rows."
---

# Documentación — portfolio

Versión para este proyecto de `spring-boot-docs`. La documentación se actualiza en el **mismo** cambio que el
código.

## Cuándo se actualiza qué

| El cambio toca | Actualizar |
|---|---|
| Locales, middleware o `i18n/` | `docs/arquitectura/README.md` → Internacionalización |
| Servicio externo (Formspree, imágenes de terceros, analytics) | `docs/arquitectura/README.md` → Servicios externos |
| Decisión de estructura o dependencia nueva | `docs/arquitectura/README.md` → Decisiones |
| Cualquier cambio visible o de dependencias | `CHANGELOG.md` bajo `[Unreleased]` (`Added`, `Changed`, `Fixed`, `Removed`) |
| Se descubre una brecha que no se resuelve ahora | `docs/gaps/README.md` (fila en Abiertos, ID `G-NN`) |
| Se cierra una brecha | Moverla a Cerrados con fecha y referencia (commit o PR) |
| Se termina una tarea | `docs/bitacora/AAAA-MM-DD-<tarea>.md` desde `_plantilla.md` |
| Cambia un comando o una regla | `CLAUDE.md` o `INICIO.md` |

## Versión y changelog de cada documento

Cabecera `**Versión:**` / `**Fecha:**` y tabla `## Changelog` al final, la versión más reciente arriba. `v1.0` →
`v1.1` por un cambio menor; `v2.0` si cambia el significado. Describe **qué** cambió.

## `CHANGELOG.md`

Una entrada por tarea, con sus componentes anidados. Sin tests ni trabajo pendiente. Las entradas antiguas no se
editan.

## Reglas de redacción

- En español, impersonal, sin voseo.
- Sin rutas fuera del repositorio ni referencias que el lector no pueda abrir (`handoff/`, `/Users/...`).
- Verificar contra el código antes de escribir; no documentar de memoria ni lo que el código ya dice solo.

## Al terminar

1. Comprobar que los enlaces relativos de `docs/README.md` existen.
2. Reportar qué documentos se actualizaron y a qué versión.
