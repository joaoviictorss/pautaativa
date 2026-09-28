import type { FormField } from '@/lib/form/field'

export interface PasswordInputProps {
  id: string
  field: FormField
  autoComplete: 'current-password' | 'new-password'
  placeholder?: string
}

export interface PasswordInputLayoutProps extends PasswordInputProps {
  visible: boolean
  onToggleVisible: () => void
}
