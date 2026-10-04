---
name: portfolio-handoff
description: "Use when closing a work session on the portfolio and handing off to the next one — 'haz el handoff', 'cerremos la sesión', 'deja el traspaso'. Verifies git and remote state before writing, creates handoff/ if missing, and saves handoff/handoff_AAAA-MM-DD-HHMM.md with the project's fixed skeleton, including failed attempts, ordered next steps and a ready-to-paste kickoff message for the next session."
---

# Handoff de cierre de sesión — portfolio

Lo lee la sesión siguiente (skill `inicio-portfolio`) para retomar sin releer la conversación. Vive en `handoff/`,
que está en `.gitignore` y no se sube.

## 1. Dónde y cómo se llama

`handoff/handoff_AAAA-MM-DD-HHMM.md`, con el momento en que se **escribe**.

```bash
mkdir -p handoff
git check-ignore -q handoff/x.md || echo "ATENCIÓN: handoff/ no está en .gitignore"
ls -1t handoff/handoff_*.md 2>/dev/null | head -1   # si existe, seguir su formato
```

Un handoff por cierre; los anteriores no se editan salvo para corregir algo falso.

## 2. Verificar el estado antes de escribir

```bash
git branch --show-current
git status --short
git log --oneline main..HEAD
git stash list
gh pr list --state open --json number,title,headRefName,reviewDecision
```

Lint, tipos y build se anotan **solo si se ejecutaron en esta sesión**; si no, `NOT RUN`. Declarar qué no se pudo
verificar y por qué.

## 3. Esqueleto

```markdown
# Handoff — AAAA-MM-DD HH:MM

### Objetivo
### Estado
### Decisiones vigentes
### Relevante
### Validación
- Lint / Tipos / Build: PASS / FAIL / NOT RUN
- Revisión visual: PASS / NOT RUN
- graphify: PASS / NOT RUN
### Bloqueos
### Failed attempts
- Qué falló, la causa y la lección accionable.
### Pendiente
1. Ordenado por lo que desbloquea, con el comando o la ruta para arrancar.
### Git
- Rama, commits sobre `main`, árbol de trabajo, PR abiertos.
### Arranque de la sesión siguiente

1. `cd <ruta del repositorio> && claude`
2. `/inicio-portfolio` — carga `CLAUDE.md`, `INICIO.md` y `handoff/handoff_AAAA-MM-DD-HHMM.md`.
3. Mensaje para pegar:

> Continúa desde `handoff/handoff_AAAA-MM-DD-HHMM.md`. Objetivo: <una oración>.
> Alcance mínimo: <lista corta>. Fuera de alcance: <lo que no se toca>.
> Skills: <las que aplican, p. ej. /portfolio-checks antes de dar por terminado; /portfolio-docs; /portfolio-handoff al cerrar>.
> Restricciones: rama propia; commit, push y merge con confirmación.
```

## 4. Reglas de redacción

- Fechas absolutas. Evidencia en todo: hash corto, `archivo:línea`, número de PR.
- Distinguir lo verificado de lo asumido. Decir qué está incompleto.
- Nunca secretos. Sin voseo. No repetir lo que ya está en `CLAUDE.md`, `INICIO.md` o `docs/`: enlazarlo; si cambió
  una regla, se actualiza ese documento.

## 5. Checklist de cierre

1. Verificar el estado (§2) y escribir el handoff (§3).
2. Si se cambió código: `graphify update .`.
3. Confirmar que `git status --short` no muestra `handoff/` ni `graphify-out/`.
4. Terminar la respuesta con la ruta del handoff y "Arranque de la sesión siguiente", lista para copiar.
