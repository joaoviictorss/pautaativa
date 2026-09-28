import { createFileRoute } from '@tanstack/react-router'

import { Entrar } from '@/pages/entrar'

export const Route = createFileRoute('/_visitante/entrar')({
  component: Entrar,
})
