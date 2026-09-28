import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'

import { useEmailSender } from '@/hooks/use-email-sender'
import { sendPasswordResetLink } from '@/lib/auth/client'
import { emailSchema, type EmailValues } from '@/lib/auth/schemas'
import { formField } from '@/lib/form/field'

import { EsqueciSenha as Layout } from './layout'
import type { EsqueciSenhaLayoutProps, EsqueciSenhaProps } from './data'

export function EsqueciSenha(_props: EsqueciSenhaProps) {
  const navigate = useNavigate()
  const [view, setView] = useState<'form' | 'sent'>('form')
  const resetLink = useEmailSender(sendPasswordResetLink)

  const form = useForm<EmailValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: '' },
  })

  const goToLogin = () => navigate({ to: '/entrar' })

  // A resposta é sempre a mesma, exista ou não a conta (não revela cadastro).
  const onSubmit = form.handleSubmit(async ({ email }) => {
    if (await resetLink.send(email)) setView('sent')
  })

  const layoutProps: EsqueciSenhaLayoutProps =
    view === 'sent'
      ? {
          view: 'sent',
          message: {
            title: 'Verifique sua caixa de entrada',
            description: {
              before: 'Se existir uma conta com ',
              highlight: form.getValues('email').trim(),
              after: ', você vai receber um link para criar uma nova senha.',
            },
            primary: {
              label: resetLink.resendLabel,
              onClick: () => resetLink.send(form.getValues('email').trim()),
              disabled: resetLink.cooldownActive,
              loading: resetLink.sending,
            },
            back: { label: 'Voltar para o login', onClick: goToLogin },
          },
        }
      : {
          view: 'form',
          email: formField(form, 'email'),
          loading: form.formState.isSubmitting,
          onSubmit,
          onBack: goToLogin,
        }

  return <Layout {...layoutProps} />
}
