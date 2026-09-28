import { useState } from 'react'

import { toast } from '@/components/ui/toast'

import { useCooldown } from './use-cooldown'

const RESEND_COOLDOWN_MS = 60000

type SendEmail = (email: string) => Promise<{ error: { status: number } | null }>

/**
 * Envio de e-mail com trava de reenvio (60s), estado de carregamento e toast
 * de erro. Usado nas telas de confirmação de cadastro e de redefinição de senha.
 */
export function useEmailSender(sendEmail: SendEmail) {
  const [sending, setSending] = useState(false)
  const cooldown = useCooldown(RESEND_COOLDOWN_MS)

  async function send(email: string) {
    setSending(true)
    const { error } = await sendEmail(email)
    setSending(false)

    if (error) {
      toast.add({
        type: 'error',
        title: error.status === 429 ? 'Muitas tentativas' : 'Não foi possível enviar o e-mail',
        description: 'Tente novamente em instantes.',
      })
      return false
    }

    cooldown.start()
    return true
  }

  return {
    send,
    sending,
    startCooldown: cooldown.start,
    cooldownActive: cooldown.active,
    resendLabel: cooldown.active ? `Reenviar e-mail em ${cooldown.label}` : 'Reenviar e-mail',
  }
}
