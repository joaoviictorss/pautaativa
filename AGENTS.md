# AGENTS.md

Padrões do projeto PautaViva para agentes (e humanos) que forem mexer no código.

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

## Estrutura de páginas e rotas (TanStack Router)

- **`src/routes/`** — só as rotas do TanStack Router (file-based routing).
  Arquivo fino: importa a página de `src/pages/` e a passa como
  `component` da `Route`. Não tem lógica nem JSX próprio além disso.
  `src/routeTree.gen.ts` é gerado automaticamente pelo plugin do Vite —
  nunca editar à mão, está no `.gitignore`.
- **`src/pages/<page>/`** — a implementação de verdade da página, seguindo
  o padrão dumb/smart descrito abaixo (`index.tsx`, `data.ts`,
  `layout/index.tsx`).
- **`src/pages/<page>/components/`** — as seções que só fazem sentido
  dentro daquela página (ex.: `hero`, `faq`, `footer` da landing). Cada
  seção é, ela mesma, uma pasta dumb/smart. Um componente realmente
  reutilizável entre páginas vai em `src/components/`, não aqui.

## Componentes React (dumb & smart)

Todo componente React não trivial vira uma pasta com esse formato:

```
header/
  index.tsx        # smart — lógica
  data.ts           # interfaces
  layout/
    index.tsx       # dumb — apresentação
```

- **Pasta em minúsculo/kebab-case**, seguindo a regra geral de
  nomenclatura (`header`, `mobile-sticky-bar`). O componente React
  exportado continua em PascalCase (`Header`, `MobileStickyBar`) — só o
  nome da pasta/arquivo é minúsculo.
- **`index.tsx` (raiz) é o smart component.** Concentra toda a lógica
  (state, effects, handlers, fetch, formatação de dados, etc.) e exporta
  um componente com o mesmo nome da pasta (`Header`).
- **`layout/index.tsx` é o dumb component.** Só apresentação/JSX, sem
  lógica de negócio — só recebe props e renderiza. O componente dentro
  dele também se chama `Header` (mesmo nome do smart), mas ao importar no
  smart ele é renomeado para `Layout`:

  ```tsx
  import { Header as Layout } from './layout'
  ```

- **`data.ts` só tem interfaces**, seguindo o padrão:

  ```ts
  export interface HeaderProps {}
  export interface HeaderLayoutProps extends HeaderProps {}
  ```

  `HeaderLayoutProps` estende `HeaderProps` — o layout recebe tudo que o
  smart recebe, mais o que for específico da apresentação.

- **Dado que não é tipagem** (objeto, lista, mock, constante) fica no
  `index.tsx` do smart, nunca no `data.ts`. `data.ts` é exclusivamente
  interface.

- **O smart monta um `layoutProps`** tipado como `HeaderLayoutProps` e
  spreada no retorno — nunca passa as props uma a uma:

  ```tsx
  const layoutProps: HeaderLayoutProps = { ... }

  return <Layout {...layoutProps} />
  ```
