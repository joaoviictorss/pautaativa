import { Faq as Layout } from './layout'
import type { FaqItem, FaqLayoutProps, FaqProps } from './data'

const FAQS: Omit<FaqItem, 'id'>[] = [
  {
    question: 'Quem pode votar?',
    answer:
      'Qualquer morador com conta ativa. O cadastro pede nome, CPF, e-mail e senha, e só é liberado depois que você confirma o e-mail.',
  },
  {
    question: 'Alguém consegue ver em quem eu votei?',
    answer:
      'Não. O voto fica associado à sua identidade só para impedir voto duplicado. Publicamente aparecem apenas os percentuais e o total de participantes.',
  },
  {
    question: 'Posso mudar meu voto depois?',
    answer:
      'Sim, enquanto a pauta estiver aberta você pode trocar de opção quantas vezes quiser. Depois que a votação encerra, o resultado fica definitivo.',
  },
  {
    question: 'Quem cria as pautas?',
    answer:
      'Gestores públicos cadastram cada pauta com título, descrição, categoria e período de votação. Enquanto está agendada, ela ainda pode ser editada.',
  },
  {
    question: 'Por que meu comentário não apareceu na hora?',
    answer:
      'Todo comentário passa por uma triagem automática e depois por um moderador. Conteúdo ofensivo ou spam é bloqueado; o resto é publicado após a aprovação.',
  },
  {
    question: 'Onde vejo o resultado final?',
    answer:
      'Na própria pauta. Quando a votação encerra, o resultado consolidado fica disponível em gráficos e o gestor pode exportá-lo em CSV ou PDF.',
  },
]

export function Faq(_props: FaqProps) {
  const faqs: FaqItem[] = FAQS.map((faq, index) => ({ ...faq, id: `faq-${index}` }))

  const layoutProps: FaqLayoutProps = { faqs, defaultOpen: [faqs[0].id] }

  return <Layout {...layoutProps} />
}
