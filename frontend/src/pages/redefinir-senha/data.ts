import type { FormEvent } from 'react'

import type { AuthMessageProps } from '@/components/auth-message/data'
import type { FormField } from '@/lib/form/field'

export interface RedefinirSenhaProps {}

export interface RedefinirSenhaFormView {
  view: 'form'
  password: FormField
  passwordValue: string
  confirmPassword: FormField
  loading: boolean
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export interface RedefinirSenhaMessageView {
  view: 'message'
  message: AuthMessageProps
}

export type RedefinirSenhaLayoutProps = RedefinirSenhaFormView | RedefinirSenhaMessageView
