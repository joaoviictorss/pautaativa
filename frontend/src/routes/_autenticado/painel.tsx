import { createFileRoute } from '@tanstack/react-router'

import { Painel } from '@/pages/painel'

export const Route = createFileRoute('/_autenticado/painel')({
  component: Painel,
})
