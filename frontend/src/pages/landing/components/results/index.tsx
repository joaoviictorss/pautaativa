import { useState } from 'react'

import { useCountdown } from '@/hooks/use-countdown'
import { formatNumber, seededRandom } from '@/lib/format'
import { getBars, getDonutSegments, getSeriesPath, getTotal, POLL_END_AT } from '@/lib/poll'

import { Results as Layout } from './layout'
import type {
  BairroRow,
  HeatRow,
  Kpi,
  ResultsLayoutProps,
  ResultsProps,
  ResultsTab,
  ResultsTabId,
} from './data'

const TAB_LABELS: Array<[ResultsTabId, string]> = [
  ['vivo', 'Ao vivo'],
  ['bairro', 'Por bairro'],
  ['hora', 'Por horário'],
]

const BAIRROS: Array<[name: string, favPercent: number, contraPercent: number, total: number]> = [
  ['Mooca', 62, 28, 412],
  ['Vila Mariana', 58, 31, 356],
  ['Tatuapé', 49, 40, 287],
  ['Belém', 55, 33, 198],
  ['Ipiranga', 44, 45, 171],
  ['Brás', 67, 21, 122],
]

const DAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']

function buildHeat(): HeatRow[] {
  return DAYS.map((day, dayIndex) => ({
    day,
    cells: Array.from({ length: 24 }, (_, hour) => {
      const isWeekend = dayIndex >= 5
      let value = isWeekend
        ? hour < 8
          ? 0.05
          : hour < 20
            ? 0.45
            : 0.3
        : hour < 6
          ? 0.04
          : hour < 9
            ? 0.2
            : hour < 12
              ? 0.3
              : hour < 14
                ? 0.55
                : hour < 18
                  ? 0.32
                  : hour < 22
                    ? 0.9
                    : 0.35
      value = Math.min(1, Math.max(0.05, value + (seededRandom(dayIndex * 24 + hour) - 0.5) * 0.2))
      return { opacity: value.toFixed(2), title: `${day} ${String(hour).padStart(2, '0')}h` }
    }),
  }))
}

export function Results({ poll }: ResultsProps) {
  const [activeTab, setActiveTab] = useState<ResultsTabId>('vivo')
  const countdown = useCountdown(POLL_END_AT)

  const total = getTotal(poll.votes)
  const bars = getBars(poll.votes)
  const donut = getDonutSegments(poll.votes)
  const { lineD, areaD, lastY } = getSeriesPath(poll.series)
  const publishedTotal = 214 + Math.floor(poll.pulse * 0.6)

  const tabs: ResultsTab[] = TAB_LABELS.map(([id, label]) => ({
    id,
    label,
    active: activeTab === id,
    onSelect: () => setActiveTab(id),
  }))

  const kpis: Kpi[] = [
    { label: 'Participantes', value: formatNumber(total) },
    { label: 'Comentários publicados', value: formatNumber(publishedTotal) },
    { label: 'Tempo restante', value: countdown.shortLabel },
  ]

  const bairros: BairroRow[] = BAIRROS.map(([name, fav, contra, count]) => ({
    name,
    favWidth: `${fav}%`,
    contraWidth: `${contra}%`,
    totalLabel: formatNumber(count),
  }))

  const layoutProps: ResultsLayoutProps = {
    poll,
    tabs,
    activeTab,
    favPctLabel: `${Math.round((poll.votes.f / total) * 100)}%`,
    totalLabel: formatNumber(total),
    bars,
    donut,
    kpis,
    lineD,
    areaD,
    lastY,
    bairros,
    heat: buildHeat(),
  }

  return <Layout {...layoutProps} />
}
