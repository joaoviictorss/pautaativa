import type { FormEvent } from 'react'

import type { AuthMessageProps } from '@/components/auth-message/data'
import type { FormField } from '@/lib/form/field'

export interface EsqueciSenhaProps {}

export interface EsqueciSenhaFormView {
  view: 'form'
  email: FormField
  loading: boolean
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  onBack: () => void
}

export interface EsqueciSenhaSentView {
  view: 'sent'
  message: AuthMessageProps
}

export type EsqueciSenhaLayoutProps = EsqueciSenhaFormView | EsqueciSenhaSentView
