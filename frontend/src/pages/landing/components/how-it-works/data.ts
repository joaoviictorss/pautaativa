import type { LucideIcon } from 'lucide-react'

export interface HowItWorksProps {}

export interface Step {
  icon: LucideIcon
  n: string
  title: string
  description: string
  delayMs: number
}

export interface HowItWorksLayoutProps extends HowItWorksProps {
  steps: Step[]
}
