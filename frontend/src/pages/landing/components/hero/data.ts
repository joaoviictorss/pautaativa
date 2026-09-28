import type { AvatarData } from '@/lib/avatars'
import type { PollDemo } from '@/pages/landing'
import type { VoteBar, VoteKey } from '@/lib/poll'

export interface HeroProps {
  poll: PollDemo
}

export interface HeroVoteOption {
  key: VoteKey
  label: string
  active: boolean
  onVote: () => void
}

export interface HeroLayoutProps extends HeroProps {
  rotatingWord: string
  wordKey: number
  avatars: AvatarData[]
  totalLabel: string
  countdownLabel: string
  bars: VoteBar[]
  voteOptions: HeroVoteOption[]
  voteMessage: string
  recentVoters: AvatarData[]
  participantsLabel: string
  lastVoterName: string
  lastVoterAvatar: AvatarData
  pulse: number
}
