# Inicio de sesión — portfolio

**Versión:** `v1.0`
**Fecha:** 2026-10-03

Pasos para retomar el trabajo en el portafolio. En Claude Code, la skill `/inicio-portfolio` los ejecuta. Las
reglas del proyecto están en [`CLAUDE.md`](CLAUDE.md).

## 1. Estado

```bash
git status
git branch --show-current
git log --oneline -10
```

`main` no recibe commits directos: se trabaja en una rama propia y se integra con un PR.

## 2. Bitácora local (handoff)

Si existe `handoff/`, leer el archivo más reciente (`handoff/handoff_AAAA-MM-DD-HHMM.md`) y verificar lo que dice
contra el código y git antes de continuar. La carpeta está en `.gitignore`: es la bitácora personal y no se sube.
Al cerrar una sesión, dejar un handoff nuevo con la skill `/portfolio-handoff`.

## 3. Grafo del código (graphify)

`graphify-out/` no se versiona. En un clon nuevo, o si falta:

```bash
graphify update .
```

Para preguntas de estructura: `graphify query "<pregunta>"`. Después de cambiar código: `graphify update .`.

## 4. Validación antes de dar un cambio por terminado

| Paso | Comando |
|---|---|
| Lint | `npm run lint` |
| Tipos | `npx tsc --noEmit` |
| Build | `npm run build` |
| Grafo | `graphify update .` |

En Claude Code, la skill `/portfolio-checks` ejecuta estos pasos. Reportar cada uno como PASS, FAIL, NOT RUN o
BLOCKED; no se afirma PASS de lo que no se ejecutó.

## 5. Documentación que acompaña cada cambio

- `CHANGELOG.md`: entrada bajo `[Unreleased]`.
- `docs/`: según la tabla de la skill `/portfolio-docs`.

---

## Changelog

| Versión | Fecha | Cambio |
|---|---|---|
| `v1.0` | 2026-10-03 | Versión inicial |
