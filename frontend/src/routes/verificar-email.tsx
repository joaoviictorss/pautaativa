import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

import { redirectAfterVerification } from '@/lib/auth/guards'
import { VerificarEmail } from '@/pages/verificar-email'

export const Route = createFileRoute('/verificar-email')({
  validateSearch: z.object({
    error: z.string().optional(),
  }),
  beforeLoad: redirectAfterVerification,
  component: VerificarEmail,
})
