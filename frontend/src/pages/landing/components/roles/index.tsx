import { LandmarkIcon, ShieldCheckIcon, UserRoundIcon } from 'lucide-react'

import { getAvatar } from '@/lib/avatars'

import { Roles as Layout } from './layout'
import type { Role, RolesLayoutProps, RolesProps } from './data'

const ROLES: (Omit<Role, 'people' | 'delay'> & { people: string[] })[] = [
  {
    icon: UserRoundIcon,
    title: 'Cidadão',
    description: 'Participa das pautas da sua comunidade.',
    items: [
      'Vota a favor, contra ou se abstém',
      'Comenta e denuncia comentários',
      'Acompanha o resultado ao vivo',
    ],
    people: ['Marina Souza', 'João Pedro', 'Denise Alves'],
  },
  {
    icon: LandmarkIcon,
    title: 'Gestor público',
    description: 'Abre as pautas e presta contas.',
    items: [
      'Cadastra pautas com período de votação',
      'Edita enquanto a pauta está agendada',
      'Exporta o resultado em CSV e PDF',
    ],
    people: ['Paulo Henrique', 'Fernanda Costa'],
  },
  {
    icon: ShieldCheckIcon,
    title: 'Moderador',
    description: 'Mantém a conversa respeitosa.',
    items: [
      'Aprova ou rejeita comentários em análise',
      'Trata denúncias da comunidade',
      'Recebe só o que passou na triagem automática',
    ],
    people: ['Thiago Rocha', 'Beatriz Nunes'],
  },
]

export function Roles(_props: RolesProps) {
  const roles: Role[] = ROLES.map((role, roleIndex) => ({
    ...role,
    delay: roleIndex * 90,
    people: role.people.map((name, personIndex) => getAvatar(name, roleIndex * 2 + personIndex + 1)),
  }))

  const layoutProps: RolesLayoutProps = { roles }

  return <Layout {...layoutProps} />
}
