import type { PollDemo } from '@/pages/landing'
import type { DonutSegment } from '@/lib/poll/charts'
import type { VoteBar } from '@/lib/poll/votes'

export type ResultsTabId = 'vivo' | 'bairro' | 'hora'

export interface ResultsProps {
  poll: PollDemo
}

export interface ResultsTab {
  id: ResultsTabId
  label: string
  active: boolean
  onSelect: () => void
}

export interface Kpi {
  label: string
  value: string
}

export interface BairroRow {
  name: string
  favWidth: string
  contraWidth: string
  totalLabel: string
}

export interface HeatCell {
  opacity: string
  title: string
}

export interface HeatRow {
  day: string
  cells: HeatCell[]
}

export interface ResultsLayoutProps extends ResultsProps {
  tabs: ResultsTab[]
  activeTab: ResultsTabId
  favPctLabel: string
  totalLabel: string
  bars: VoteBar[]
  donut: DonutSegment[]
  kpis: Kpi[]
  lineD: string
  areaD: string
  lastY: number
  bairros: BairroRow[]
  heat: HeatRow[]
}
