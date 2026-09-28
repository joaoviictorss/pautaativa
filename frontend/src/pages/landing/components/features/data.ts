import type { LucideIcon } from 'lucide-react'

import type { PollDemo } from '@/pages/landing'
import type { AvatarData } from '@/lib/mocks/people'
import type { VoteBar } from '@/lib/poll/votes'

export interface FeaturesProps {
  poll: PollDemo
}

export interface FlowStep {
  n: string
  label: string
  active: boolean
  /** Só usado quando `animating` é false: 0 (a fazer) ou 100 (concluído). */
  progressPercent: number
  animating: boolean
  animateKey: number
  onSelect: () => void
}

export interface StackPanelStyle {
  opacity: number
  transform: string
  zIndex: number
  pointerEvents: 'auto' | 'none'
}

export interface ModerationItem extends AvatarData {
  key: string
  text: string
  status: string
  statusIcon: LucideIcon
  statusBg: string
  statusFg: string
  blurred: boolean
  highlighted: boolean
}

export interface SyncClient {
  icon: LucideIcon
  name: string
  latencyLabel: string
  flashKey: number
}

export interface FeaturesLayoutProps extends FeaturesProps {
  flowSteps: FlowStep[]
  panelStyles: StackPanelStyle[]
  favPctLabel: string
  totalLabel: string
  bars: VoteBar[]
  moderationFeed: ModerationItem[]
  publishedLabel: string
  syncClients: SyncClient[]
}
