import { createFileRoute } from '@tanstack/react-router'

import { EsqueciSenha } from '@/pages/esqueci-senha'

export const Route = createFileRoute('/_visitante/esqueci-senha')({
  component: EsqueciSenha,
})
