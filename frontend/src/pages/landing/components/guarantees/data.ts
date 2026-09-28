import type { LucideIcon } from 'lucide-react'

export interface GuaranteesProps {}

export interface Guarantee {
  icon: LucideIcon
  title: string
  description: string
}

export interface GuaranteesLayoutProps extends GuaranteesProps {
  guarantees: Guarantee[]
}
