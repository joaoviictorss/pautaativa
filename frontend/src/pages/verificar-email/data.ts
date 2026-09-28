import type { FormEvent } from 'react'

import type { AuthMessageProps } from '@/components/auth-message/data'
import type { FormField } from '@/lib/form/field'

export interface VerificarEmailProps {}

export interface VerificarEmailExpiredView {
  view: 'expired'
  title: string
  email: FormField
  loading: boolean
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  onBack: () => void
}

export interface VerificarEmailMessageView {
  view: 'message'
  message: AuthMessageProps
}

export type VerificarEmailLayoutProps = VerificarEmailExpiredView | VerificarEmailMessageView
