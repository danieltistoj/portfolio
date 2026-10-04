---
name: inicio-portfolio
description: "Use at the start of a session on the portfolio repository, or when asked '/inicio-portfolio', 'inicio portafolio', 'retoma el portafolio', or to continue from a handoff of this repository. Loads CLAUDE.md, INICIO.md and the latest local handoff, then verifies the real state against git before doing anything."
---

# Inicio — portfolio

| Archivo | Contenido | En git |
|---|---|---|
| `CLAUDE.md` | Qué es el proyecto, estructura, comandos y reglas | Sí |
| `INICIO.md` | Orden de arranque y validación | Sí |
| `docs/` | Arquitectura, gaps y bitácora | Sí |
| `handoff/handoff_*.md` | Bitácora personal de sesiones | No (`.gitignore`) |
| `graphify-out/` | Grafo del código | No (`.gitignore`) |

## Qué hacer

1. Leer completos `CLAUDE.md` e `INICIO.md`.
2. Leer el handoff más reciente, si existe:
   ```bash
   ls -1t handoff/handoff_*.md 2>/dev/null | head -1
   ```
3. Verificar el estado real antes de afirmar nada del handoff:
   ```bash
   git status --short
   git branch --show-current
   git log --oneline -10
   ```
4. Grafo: si falta `graphify-out/graph.json`, ejecutar `graphify update .`. Para preguntas de estructura, usar
   `graphify query "<pregunta>"` antes de leer el árbol completo.
5. Resumir en pocas líneas: rama, último commit, qué dice el handoff que falta y qué difiere del estado real.

## Reglas mientras se trabaja

- No tocar código ni proponer un plan hasta haber hecho los pasos 1 a 3.
- El handoff es estado curado, no verdad: lo que contradiga a git o al código se corrige en el handoff.
- Nunca commit ni push en `main`: rama propia y PR. Sin commit ni push sin confirmación explícita. Sin
  `git add -A` ni `git add .`.
- Antes de dar un cambio por terminado: skill `portfolio-checks`. Documentación: `portfolio-docs`.
- Al cerrar la sesión: skill `portfolio-handoff`.
