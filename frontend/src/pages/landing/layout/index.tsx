import type { LandingLayoutProps } from '../data'

export function Landing({
  header,
  hero,
  roles,
  features,
  results,
  mobileShowcase,
  howItWorks,
  guarantees,
  faq,
  ctaFinal,
  footer,
  mobileStickyBar,
}: LandingLayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {header}
      {hero}
      {roles}
      {features}
      {results}
      {mobileShowcase}
      {howItWorks}
      {guarantees}
      {faq}
      {ctaFinal}
      {mobileStickyBar}
      {footer}
    </div>
  )
}
