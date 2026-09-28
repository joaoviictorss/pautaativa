import type { FormEvent } from 'react'

import type { AuthMessageProps } from '@/components/auth-message/data'
import type { FormField } from '@/lib/form/field'

export interface CadastroProps {}

export interface CadastroFormView {
  view: 'form'
  nome: FormField
  cpf: FormField
  cpfValid: boolean
  email: FormField
  password: FormField
  passwordValue: string
  loading: boolean
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export interface CadastroSentView {
  view: 'sent'
  message: AuthMessageProps
}

export type CadastroLayoutProps = CadastroFormView | CadastroSentView
