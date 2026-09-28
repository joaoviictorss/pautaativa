import { CalendarCheckIcon, FingerprintIcon, LockIcon, ZapIcon } from 'lucide-react'

import { Guarantees as Layout } from './layout'
import type { Guarantee, GuaranteesLayoutProps, GuaranteesProps } from './data'

const GUARANTEES: Guarantee[] = [
  {
    icon: FingerprintIcon,
    title: 'Um CPF, um voto',
    description: 'Identidade verificada no cadastro. Voto duplicado é recusado.',
  },
  {
    icon: LockIcon,
    title: 'Voto sigiloso',
    description: 'O resultado é público. Em quem você votou, não.',
  },
  {
    icon: ZapIcon,
    title: 'Até 5 segundos',
    description: 'Tempo máximo para todas as telas verem o novo resultado.',
  },
  {
    icon: CalendarCheckIcon,
    title: 'Prazo respeitado',
    description: 'A votação fecha sozinha no horário definido, sem voto fora de hora.',
  },
]

export function Guarantees(_props: GuaranteesProps) {
  const layoutProps: GuaranteesLayoutProps = { guarantees: GUARANTEES }

  return <Layout {...layoutProps} />
}
