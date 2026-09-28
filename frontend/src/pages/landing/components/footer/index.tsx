import { Footer as Layout } from './layout'
import type { FooterColumn, FooterLayoutProps, FooterProps } from './data'

const COLUMNS: FooterColumn[] = [
  {
    title: 'Plataforma',
    links: [
      { label: 'Recursos', href: '#recursos' },
      { label: 'Resultados', href: '#resultados' },
      { label: 'Como funciona', href: '#como-funciona' },
    ],
  },
  {
    title: 'Participe',
    links: [
      { label: 'Pautas abertas', href: '#' },
      { label: 'Resultados encerrados', href: '#' },
      { label: 'Dúvidas', href: '#faq' },
    ],
  },
  {
    title: 'Conta',
    links: [
      { label: 'Entrar', href: '#' },
      { label: 'Criar conta', href: '#' },
    ],
  },
]

export function Footer(_props: FooterProps) {
  const layoutProps: FooterLayoutProps = { columns: COLUMNS }

  return <Layout {...layoutProps} />
}
