---
name: portfolio-checks
description: "Use before considering a change to the portfolio done, before a commit, or before opening a PR. Triggers on 'valida el cambio', 'está listo?', 'pasa el build?', 'ejecuta el lint', 'corre sonar', 'corre los tests'. Runs npm run lint, tsc --noEmit, npm run test:run, npm run build, SonarQube with Quality Gate, and graphify update, and reports PASS / FAIL / NOT RUN / BLOCKED per step."
---

# Validación — portfolio

Ejecutar desde la raíz del repositorio. **No afirmar PASS de un paso que no se ejecutó.**

```bash
npm run lint
npx tsc --noEmit
npm run test:run
npm run build
graphify update .
```

- Si falta `node_modules/`, ejecutar antes `npm install` y decirlo. `npm install` no debe cambiar ninguna
  versión: todas las dependencias van fijadas en `package.json`. Si cambia una versión sin que el cambio la
  haya pedido, revertirla antes de seguir (ver `CLAUDE.md`).
- `npm run test:run` deja `coverage/` y `test-results.xml` (no versionados, los consume `sonar-scan.sh`). Un
  test nuevo o modificado va junto con el cambio que prueba, no después.
- Ante un fallo, reportar solo el error relevante (archivo, línea, mensaje). Corregir lo que introduce el cambio;
  no arreglar deuda ajena (anotarla en `docs/gaps/README.md`).
- Si el cambio toca `messages/`, comprobar que las tres traducciones tienen las mismas claves:
  ```bash
  for f in messages/*.json; do echo "$f $(jq -r '[paths(scalars)|join(".")]|sort|join(",")' "$f" | md5)"; done
  ```
  Los tres hashes deben coincidir.
- Cambio visual: levantar `npm run dev` y revisar la página en `/`, `/es` y `/pt`, en escritorio y en ancho de
  móvil. Si no se pudo revisar, decirlo (NOT RUN).

## SonarQube

Requiere un SonarQube local arriba (`sonarqube:community` en `http://localhost:9000`) y `SONAR_HOST_URL` /
`SONAR_TOKEN` exportados. Nunca imprimir ni guardar el token. Antes de reportar BLOCKED, comprobar que es válido:

```bash
[ -n "$SONAR_TOKEN" ] && curl -s -u "$SONAR_TOKEN:" "$SONAR_HOST_URL/api/authentication/validate"
```

```bash
./scripts/sonar-scan.sh
```

`./scripts/sonar-scan.sh` corre `npm run test:run` antes del análisis, así que la cobertura ya queda incluida.
El análisis se procesa en segundo plano: esperar a que termine antes de leer el gate (umbral de cobertura 80 %
sobre el código con lógica propia — ver exclusiones en `sonar-project.properties`). Corregir lo que introduce
el cambio; no arreglar deuda ajena.

## Reporte

```
### Validation
- Lint: PASS
- Tipos: PASS
- Tests: PASS — 10/10, cobertura 99,6 %
- Build: PASS
- i18n (claves): PASS / NOT RUN
- Revisión visual: PASS / NOT RUN
- Sonar: PASS / FAIL / NOT RUN / BLOCKED
- graphify: PASS
```
