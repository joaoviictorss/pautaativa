import type { ReactNode } from 'react'

export interface LandingProps {}

export interface LandingLayoutProps extends LandingProps {
  header: ReactNode
  hero: ReactNode
  roles: ReactNode
  features: ReactNode
  results: ReactNode
  mobileShowcase: ReactNode
  howItWorks: ReactNode
  guarantees: ReactNode
  faq: ReactNode
  ctaFinal: ReactNode
  footer: ReactNode
  mobileStickyBar: ReactNode
}
