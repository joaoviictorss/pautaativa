import type { PollDemo } from '@/pages/landing'

export interface MobileStickyBarProps {
  poll: PollDemo
}

export interface MobileStickyBarLayoutProps extends MobileStickyBarProps {
  visible: boolean
  totalLabel: string
  countdownLabel: string
}
