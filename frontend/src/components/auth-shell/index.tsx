import { AuthShell as Layout } from './layout'
import type { AuthShellLayoutProps, AuthShellProps } from './data'

export function AuthShell({ children }: AuthShellProps) {
  const layoutProps: AuthShellLayoutProps = { children }

  return <Layout {...layoutProps} />
}
