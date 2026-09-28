import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { getRouteApi, useNavigate } from '@tanstack/react-router'
import { useForm, useWatch } from 'react-hook-form'

import { toast } from '@/components/ui/toast'
import { resetPassword } from '@/lib/auth/client'
import type { AuthError } from '@/lib/auth/errors'
import { resetPasswordSchema, type ResetPasswordValues } from '@/lib/auth/schemas'
import { formField } from '@/lib/form/field'

import { RedefinirSenha as Layout } from './layout'
import type { RedefinirSenhaLayoutProps, RedefinirSenhaProps } from './data'

const route = getRouteApi('/redefinir-senha')

export function RedefinirSenha(_props: RedefinirSenhaProps) {
  const navigate = useNavigate()
  const { token, error } = route.useSearch()
  const [status, setStatus] = useState<'form' | 'invalid' | 'done'>(token && !error ? 'form' : 'invalid')

  const form = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: '', confirmPassword: '' },
  })
  const password = useWatch({ control: form.control, name: 'password' })

  const goToLogin = () => navigate({ to: '/entrar' })

  const onSubmit = form.handleSubmit(async (values) => {
    const { error } = await resetPassword({ newPassword: values.password, token: token ?? '' })

    if (!error) {
      setStatus('done')
      return
    }

    if ((error as AuthError).code === 'INVALID_TOKEN') {
      setStatus('invalid')
      return
    }

    toast.add({
      type: 'error',
      title: 'Não foi possível salvar a nova senha',
      description: 'Tente novamente em instantes.',
    })
  })

  let layoutProps: RedefinirSenhaLayoutProps

  if (status === 'done') {
    layoutProps = {
      view: 'message',
      message: {
        title: 'Senha alterada',
        description: 'Use a nova senha para entrar na sua conta.',
        primary: { label: 'Ir para o login', onClick: goToLogin },
      },
    }
  } else if (status === 'invalid') {
    layoutProps = {
      view: 'message',
      message: {
        title: 'Link de redefinição expirado',
        description: 'Por segurança, o link vale por tempo limitado e só pode ser usado uma vez. Peça um novo para continuar.',
        primary: { label: 'Pedir novo link', onClick: () => navigate({ to: '/esqueci-senha' }) },
        back: { label: 'Voltar para o login', onClick: goToLogin },
      },
    }
  } else {
    layoutProps = {
      view: 'form',
      password: formField(form, 'password'),
      passwordValue: password,
      confirmPassword: formField(form, 'confirmPassword'),
      loading: form.formState.isSubmitting,
      onSubmit,
    }
  }

  return <Layout {...layoutProps} />
}
