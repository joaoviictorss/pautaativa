# AGENTS.md

Padrões do projeto PautaAtiva para agentes (e humanos) que forem mexer no código.

## Nomenclatura de arquivos

- **Minúsculo, sem PascalCase.** Componente React em `App.tsx` vira `app.tsx`.
- **Palavra única quando possível** (`env.ts`, `prisma.ts`, `header.tsx`).
- **kebab-case para múltiplas palavras** — é o padrão que já existe no
  backend (`error-handler.ts`, `bad-request-error.ts`,
  `unauthorized-error.ts`) e também o padrão do shadcn/ui
  (`dropdown-menu.tsx`, `alert-dialog.tsx`). Não usar camelCase em nome de
  arquivo (evitar `appShell.tsx`, `badRequestError.ts`).
- Exceção: arquivos que uma ferramenta/framework exige com nome fixo
  (`vite.config.ts`, `tsconfig.json`) mantêm o nome padrão da ferramenta.
