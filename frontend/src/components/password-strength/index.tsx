import { usePasswordStrength } from '@/hooks/use-password-strength'

import { PasswordStrength as Layout } from './layout'
import type { PasswordStrengthLayoutProps, PasswordStrengthProps } from './data'

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = usePasswordStrength(password)

  const layoutProps: PasswordStrengthLayoutProps = { password, strength }

  return <Layout {...layoutProps} />
}
