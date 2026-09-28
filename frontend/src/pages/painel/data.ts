export interface PainelProps {}

export interface PainelLayoutProps extends PainelProps {
  name: string
  firstName: string
  initials: string
  email: string
  image?: string
  roleLabel: string
  signingOut: boolean
  onSignOut: () => void
}
