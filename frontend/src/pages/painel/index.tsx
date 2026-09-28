import { useState } from 'react'
import { getRouteApi, useNavigate } from '@tanstack/react-router'

import { toast } from '@/components/ui/toast'
import { signOut } from '@/lib/auth/client'
import { getInitials } from '@/lib/utils/format'

import { Painel as Layout } from './layout'
import type { PainelLayoutProps, PainelProps } from './data'

const route = getRouteApi('/_autenticado')

const ROLE_LABELS: Record<string, string> = {
  cidadao: 'Cidadão',
  gestor: 'Gestor público',
  moderador: 'Moderador',
}

export function Painel(_props: PainelProps) {
  const navigate = useNavigate()
  const { session } = route.useRouteContext()
  const [signingOut, setSigningOut] = useState(false)
  const { user } = session

  async function handleSignOut() {
    setSigningOut(true)
    const { error } = await signOut()
    setSigningOut(false)

    if (error) {
      toast.add({ type: 'error', title: 'Não foi possível sair', description: 'Tente novamente em instantes.' })
      return
    }
    navigate({ to: '/entrar' })
  }

  const layoutProps: PainelLayoutProps = {
    name: user.name,
    firstName: user.name.split(' ')[0],
    initials: getInitials(user.name),
    email: user.email,
    image: user.image ?? undefined,
    roleLabel: ROLE_LABELS[user.role ?? 'cidadao'] ?? ROLE_LABELS.cidadao,
    signingOut,
    onSignOut: handleSignOut,
  }

  return <Layout {...layoutProps} />
}
