import { formatNumber, formatPercent } from '@/lib/format'

/** Prazo fixo (avaliado uma vez, no carregamento da página) usado pelo countdown da pauta de exemplo. */
export const POLL_END_AT = Date.now() + (2 * 86400 + 14 * 3600 + 32 * 60 + 10) * 1000

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

export interface DonutSegment {
  key: VoteKey
  color: string
  dashArray: string
  dashOffset: string
}

export function getDonutSegments(votes: Votes, radius = 54): DonutSegment[] {
  const circumference = 2 * Math.PI * radius
  const total = getTotal(votes)
  let accumulated = 0
  return VOTE_OPTIONS.map(({ key, color }) => {
    const length = total === 0 ? 0 : (votes[key] / total) * circumference
    const segment: DonutSegment = {
      key,
      color,
      dashArray: `${Math.max(0, length - 2).toFixed(2)} ${circumference.toFixed(2)}`,
      dashOffset: (-accumulated).toFixed(2),
    }
    accumulated += length
    return segment
  })
}

export interface SeriesPath {
  lineD: string
  areaD: string
  lastY: number
}

export function getSeriesPath(
  series: number[],
  { max = 44, width = 600, height = 170 }: { max?: number; width?: number; height?: number } = {}
): SeriesPath {
  const points = series.map((value, i) => [
    i * (width / (series.length - 1)),
    height - (value / max) * height,
  ])
  const lineD = points
    .map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`)
    .join(' ')
  const areaD = `${lineD} L${width} ${height} L0 ${height} Z`
  return { lineD, areaD, lastY: points[points.length - 1][1] }
}
