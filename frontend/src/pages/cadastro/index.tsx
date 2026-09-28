import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import { useForm, useWatch } from 'react-hook-form'

import { toast } from '@/components/ui/toast'
import { useEmailSender } from '@/hooks/use-email-sender'
import { sendVerificationLink, signUp, verifyEmailCallbackUrl } from '@/lib/auth/client'
import type { AuthError } from '@/lib/auth/errors'
import { savePendingEmail } from '@/lib/auth/pending-email'
import { signUpSchema, type SignUpValues } from '@/lib/auth/schemas'
import { formField } from '@/lib/form/field'
import { isValidCpf, maskCpf, unmaskCpf } from '@/lib/utils/cpf'

import { Cadastro as Layout } from './layout'
import type { CadastroLayoutProps, CadastroProps } from './data'

export function Cadastro(_props: CadastroProps) {
  const navigate = useNavigate()
  const [view, setView] = useState<'form' | 'sent'>('form')
  const verification = useEmailSender(sendVerificationLink)

  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { nome: '', cpf: '', email: '', password: '' },
  })

  const [cpf, password] = useWatch({ control: form.control, name: ['cpf', 'password'] })
  const email = form.getValues('email').trim()

  const onSubmit = form.handleSubmit(async (values) => {
    const { error } = await signUp.email({
      name: values.nome,
      email: values.email,
      password: values.password,
      cpf: unmaskCpf(values.cpf),
      callbackURL: verifyEmailCallbackUrl(),
    })

    if (!error) {
      // O Better Auth já envia o e-mail no cadastro: aqui só trava o reenvio.
      savePendingEmail(values.email)
      verification.startCooldown()
      setView('sent')
      return
    }

    const authError = error as AuthError

    if (authError.code === 'USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL' || authError.code === 'CPF_ALREADY_EXISTS') {
      toast.add({
        type: 'error',
        title: 'CPF ou e-mail já cadastrado',
        description: 'Se a conta é sua, entre com ela ou redefina a senha.',
        actionProps: { children: 'Ir para o login', onClick: () => navigate({ to: '/entrar' }) },
      })
      return
    }

    if (authError.code === 'INVALID_CPF') {
      form.setError('cpf', { message: 'CPF inválido. Confira os números.' })
      return
    }

    if (authError.status === 429) {
      toast.add({
        type: 'error',
        title: 'Muitas tentativas a partir desta rede',
        description: 'Por segurança, novos cadastros estão pausados por alguns minutos.',
      })
      return
    }

    toast.add({
      type: 'error',
      title: 'Não foi possível criar sua conta',
      description: 'Tente novamente em instantes.',
    })
  })

  const layoutProps: CadastroLayoutProps =
    view === 'sent'
      ? {
          view: 'sent',
          message: {
            title: 'Confirme seu e-mail',
            description: {
              before: 'Enviamos um link de confirmação para ',
              highlight: email,
              after: '. Seu cadastro é concluído assim que você clicar nele.',
            },
            primary: {
              label: verification.resendLabel,
              onClick: () => verification.send(email),
              disabled: verification.cooldownActive,
              loading: verification.sending,
            },
            secondary: { label: 'Usar outro e-mail', onClick: () => setView('form') },
          },
        }
      : {
          view: 'form',
          nome: formField(form, 'nome'),
          cpf: formField(form, 'cpf', {
            onChange: (e) => form.setValue('cpf', maskCpf(e.target.value)),
          }),
          cpfValid: isValidCpf(cpf),
          email: formField(form, 'email'),
          password: formField(form, 'password'),
          passwordValue: password,
          loading: form.formState.isSubmitting,
          onSubmit,
        }

  return <Layout {...layoutProps} />
}
