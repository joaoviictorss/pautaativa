import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

import { RedefinirSenha } from '@/pages/redefinir-senha'

export const Route = createFileRoute('/redefinir-senha')({
  validateSearch: z.object({
    token: z.string().optional(),
    error: z.string().optional(),
  }),
  component: RedefinirSenha,
})
