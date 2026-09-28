import { Link } from '@tanstack/react-router'

import type { AuthShellLayoutProps } from '../data'

export function AuthShell({ children }: AuthShellLayoutProps) {
  return (
    <div className="flex min-h-dvh gap-3 p-3 lg:h-dvh">
      <main className="flex min-w-0 flex-1 flex-col overflow-y-auto px-2 sm:px-8">
        <div className="flex items-center justify-between gap-4 py-2">
          <Link to="/" className="flex items-center gap-2.5 text-inherit no-underline">
            <img src="/logo-mark.svg" alt="" className="block size-8" />
            <span className="text-lg font-bold tracking-tight text-primary">PautaViva</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-sm">{children}</div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 py-2 text-sm text-muted-foreground">
          <span>© 2026 PautaViva</span>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground no-underline hover:text-foreground">
              Termos de uso
            </a>
            <a href="#" className="text-muted-foreground no-underline hover:text-foreground">
              Privacidade
            </a>
          </div>
        </div>
      </main>

      <aside className="relative hidden flex-1 overflow-hidden rounded-2xl bg-muted lg:block">
        <img
          src="/login-image.png"
          alt="Vizinhos reunidos na praça do bairro"
          className="absolute inset-0 size-full object-cover"
        />
      </aside>
    </div>
  )
}
