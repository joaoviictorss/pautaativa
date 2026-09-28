import type { LucideIcon } from 'lucide-react'

import type { AvatarData } from '@/lib/mocks/people'

export interface RolesProps {}

export interface Role {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
  people: AvatarData[]
  delay: number
}

export interface RolesLayoutProps extends RolesProps {
  roles: Role[]
}
