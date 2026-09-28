import type { FormEvent } from 'react'

import type { AuthMessageProps } from '@/components/auth-message/data'
import type { FormField } from '@/lib/form/field'

export interface EntrarProps {}

export interface EntrarFormView {
  view: 'form'
  email: FormField
  password: FormField
  attemptsHint?: string
  loading: boolean
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export interface EntrarSentView {
  view: 'sent'
  message: AuthMessageProps
}

export type EntrarLayoutProps = EntrarFormView | EntrarSentView
