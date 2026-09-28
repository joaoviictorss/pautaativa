import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { getRouteApi, useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'

import { useEmailSender } from '@/hooks/use-email-sender'
import { sendVerificationLink } from '@/lib/auth/client'
import { readPendingEmail } from '@/lib/auth/pending-email'
import { emailSchema, type EmailValues } from '@/lib/auth/schemas'
import { formField } from '@/lib/form/field'

import { VerificarEmail as Layout } from './layout'
import type { VerificarEmailLayoutProps, VerificarEmailProps } from './data'

const route = getRouteApi('/verificar-email')

/**
 * Destino do link de confirmação quando ele falha (UC01 E02): expirado ou
 * inválido. Com o link válido o usuário já é logado e segue pro painel
 * (ver redirectAfterVerification na rota).
 */
export function VerificarEmail(_props: VerificarEmailProps) {
  const navigate = useNavigate()
  const { error } = route.useSearch()
  const [status, setStatus] = useState<'expired' | 'sent'>('expired')
  const verification = useEmailSender(sendVerificationLink)

  const form = useForm<EmailValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: readPendingEmail() },
  })

  const goToLogin = () => navigate({ to: '/entrar' })

  const onSubmit = form.handleSubmit(async ({ email }) => {
    if (await verification.send(email)) setStatus('sent')
  })

  let layoutProps: VerificarEmailLayoutProps

  if (status === 'sent') {
    layoutProps = {
      view: 'message',
      message: {
        title: 'Confirme seu e-mail',
        description: {
          before: 'Enviamos um novo link de confirmação para ',
          highlight: form.getValues('email').trim(),
          after: '. Seu cadastro é concluído assim que você clicar nele.',
        },
        primary: {
          label: verification.resendLabel,
          onClick: () => verification.send(form.getValues('email').trim()),
          disabled: verification.cooldownActive,
          loading: verification.sending,
        },
        back: { label: 'Voltar para o login', onClick: goToLogin },
      },
    }
  } else {
    layoutProps = {
      view: 'expired',
      title: error === 'TOKEN_EXPIRED' ? 'Link de confirmação expirado' : 'Link de confirmação inválido',
      email: formField(form, 'email'),
      loading: form.formState.isSubmitting,
      onSubmit,
      onBack: goToLogin,
    }
  }

  return <Layout {...layoutProps} />
}
