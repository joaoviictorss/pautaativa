import type { PasswordStrength as Strength } from '@/hooks/use-password-strength'

export interface PasswordStrengthProps {
  password: string
}

export interface PasswordStrengthLayoutProps extends PasswordStrengthProps {
  strength: Strength
}
