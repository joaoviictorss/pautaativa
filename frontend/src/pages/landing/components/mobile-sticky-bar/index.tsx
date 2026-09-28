import { useEffect, useState } from 'react'

import { useCountdown } from '@/hooks/use-countdown'
import { formatNumber } from '@/lib/format'
import { getTotal, POLL_END_AT } from '@/lib/poll'

import { MobileStickyBar as Layout } from './layout'
import type { MobileStickyBarLayoutProps, MobileStickyBarProps } from './data'

const SCROLL_THRESHOLD_PX = 520
const MAX_WIDTH_PX = 768

/** `true` quando a página rolou além de `SCROLL_THRESHOLD_PX` e a viewport é mobile. */
function useScrollPast() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const check = () => {
      setVisible(window.innerWidth < MAX_WIDTH_PX && window.scrollY > SCROLL_THRESHOLD_PX)
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  return visible
}

export function MobileStickyBar({ poll }: MobileStickyBarProps) {
  const visible = useScrollPast()
  const countdown = useCountdown(POLL_END_AT)

  const layoutProps: MobileStickyBarLayoutProps = {
    poll,
    visible,
    totalLabel: formatNumber(getTotal(poll.votes)),
    countdownLabel: countdown.label,
  }

  return <Layout {...layoutProps} />
}
