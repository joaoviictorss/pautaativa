export interface AuthMessageAction {
  label: string
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

/** Texto com um trecho em destaque (ex.: o e-mail do usuário). */
export interface AuthMessageHighlightedText {
  before: string
  highlight: string
  after: string
}

export interface AuthMessageProps {
  title: string
  description: string | AuthMessageHighlightedText
  primary?: AuthMessageAction
  secondary?: AuthMessageAction
  back?: AuthMessageAction
}

export interface AuthMessageLayoutProps extends AuthMessageProps {}
