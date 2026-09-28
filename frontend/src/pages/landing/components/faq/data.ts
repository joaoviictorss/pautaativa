export interface FaqProps {}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface FaqLayoutProps extends FaqProps {
  faqs: FaqItem[]
  defaultOpen: string[]
}
