import { Button } from '@/components/ui/button'

import type { MobileStickyBarLayoutProps } from '../data'

export function MobileStickyBar({ visible, totalLabel, countdownLabel }: MobileStickyBarLayoutProps) {
  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-3 border-t border-border bg-background/96 px-4 py-3 backdrop-blur-md [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] md:hidden">
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm font-bold">{totalLabel} já votaram</span>
        <span className="text-xs text-muted-foreground">Encerra em {countdownLabel}</span>
      </div>
      <Button className="h-11 rounded-[22px] px-4.5 font-semibold">Votar</Button>
    </div>
  )
}
