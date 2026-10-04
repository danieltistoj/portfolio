---
name: portfolio-checks
description: "Use before considering a change to the portfolio done, before a commit, or before opening a PR. Triggers on 'valida el cambio', 'está listo?', 'pasa el build?', 'ejecuta el lint'. Runs npm run lint, tsc --noEmit, npm run build and graphify update, and reports PASS / FAIL / NOT RUN / BLOCKED per step."
---

# Validación — portfolio

Ejecutar desde la raíz del repositorio. **No afirmar PASS de un paso que no se ejecutó.**

```bash
npm run lint
npx tsc --noEmit
npm run build
graphify update .
```

- Si falta `node_modules/`, ejecutar antes `npm install` y decirlo.
- Ante un fallo, reportar solo el error relevante (archivo, línea, mensaje). Corregir lo que introduce el cambio;
  no arreglar deuda ajena (anotarla en `docs/gaps/README.md`).
- Si el cambio toca `messages/`, comprobar que las tres traducciones tienen las mismas claves:
  ```bash
  for f in messages/*.json; do echo "$f $(jq -r '[paths(scalars)|join(".")]|sort|join(",")' "$f" | md5)"; done
  ```
  Los tres hashes deben coincidir.
- Cambio visual: levantar `npm run dev` y revisar la página en `/`, `/es` y `/pt`, en escritorio y en ancho de
  móvil. Si no se pudo revisar, decirlo (NOT RUN).

## Reporte

```
### Validation
- Lint: PASS
- Tipos: PASS
- Build: PASS
- i18n (claves): PASS / NOT RUN
- Revisión visual: PASS / NOT RUN
- graphify: PASS
```
