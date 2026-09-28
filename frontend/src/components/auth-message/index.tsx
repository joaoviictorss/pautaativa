import { AuthMessage as Layout } from './layout'
import type { AuthMessageLayoutProps, AuthMessageProps } from './data'

export function AuthMessage(props: AuthMessageProps) {
  const layoutProps: AuthMessageLayoutProps = { ...props }

  return <Layout {...layoutProps} />
}
