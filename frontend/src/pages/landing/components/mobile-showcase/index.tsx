import { MobileShowcase as Layout } from './layout'
import type { MobileListItem, MobileShowcaseLayoutProps, MobileShowcaseProps } from './data'

const ITEMS: MobileListItem[] = [
  { title: 'Vote no seu tempo', description: 'A pauta fica aberta por dias, não por uma noite de reunião.' },
  {
    title: 'Leia antes de decidir',
    description: 'Descrição completa, período de votação e os comentários publicados.',
  },
  {
    title: 'Veja o que mudou',
    description: 'O resultado parcial atualiza sozinho enquanto você está na página.',
  },
]

export function MobileShowcase(_props: MobileShowcaseProps) {
  const layoutProps: MobileShowcaseLayoutProps = { items: ITEMS }

  return <Layout {...layoutProps} />
}
