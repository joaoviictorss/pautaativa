import { formatNumber, formatPercent } from '@/lib/utils/format'

export type VoteKey = 'f' | 'c' | 'a'

export interface Votes {
  f: number
  c: number
  a: number
}

export const VOTE_OPTIONS: Array<{ key: VoteKey; label: string; color: string }> = [
  { key: 'f', label: 'A favor', color: 'var(--primary)' },
  { key: 'c', label: 'Contra', color: 'var(--chart-4)' },
  { key: 'a', label: 'Abstenção', color: 'var(--chart-5)' },
]

export function getTotal(votes: Votes) {
  return votes.f + votes.c + votes.a
}

export function getPercent(votes: Votes, key: VoteKey) {
  const total = getTotal(votes)
  return total === 0 ? 0 : Math.round((votes[key] / total) * 1000) / 10
}

export interface VoteBar {
  key: VoteKey
  label: string
  color: string
  percent: number
  percentLabel: string
  countLabel: string
}

export function getBars(votes: Votes): VoteBar[] {
  return VOTE_OPTIONS.map(({ key, label, color }) => {
    const percent = getPercent(votes, key)
    return {
      key,
      label,
      color,
      percent,
      percentLabel: formatPercent(percent),
      countLabel: formatNumber(votes[key]),
    }
  })
}
