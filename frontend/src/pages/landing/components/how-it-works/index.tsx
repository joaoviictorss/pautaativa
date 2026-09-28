import { ListFilterIcon, MailCheckIcon, UserPlusIcon, VoteIcon } from 'lucide-react'

import { HowItWorks as Layout } from './layout'
import type { HowItWorksLayoutProps, HowItWorksProps, Step } from './data'

const STEPS: Omit<Step, 'n' | 'delayMs'>[] = [
  {
    icon: UserPlusIcon,
    title: 'Crie sua conta',
    description: 'Nome, CPF, e-mail e senha. Um cadastro por CPF.',
  },
  {
    icon: MailCheckIcon,
    title: 'Confirme o e-mail',
    description: 'O link de verificação ativa sua conta.',
  },
  {
    icon: ListFilterIcon,
    title: 'Encontre as pautas',
    description: 'Filtre por categoria e por status: agendada, aberta ou encerrada.',
  },
  {
    icon: VoteIcon,
    title: 'Vote e acompanhe',
    description: 'A favor, contra ou abstenção. O resultado muda na sua frente.',
  },
]

export function HowItWorks(_props: HowItWorksProps) {
  const steps: Step[] = STEPS.map((step, index) => ({
    ...step,
    n: '0' + (index + 1),
    delayMs: index * 180,
  }))

  const layoutProps: HowItWorksLayoutProps = { steps }

  return <Layout {...layoutProps} />
}
