import { getTotal, VOTE_OPTIONS, type VoteKey, type Votes } from './votes'

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
