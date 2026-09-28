import { useCallback, useState } from 'react'

import { useCountdown } from './use-countdown'

/** Trava uma ação (ex.: reenviar e-mail) por alguns segundos. */
export function useCooldown(durationMs: number, startActive = false) {
  const [until, setUntil] = useState(() => (startActive ? Date.now() + durationMs : 0))
  const countdown = useCountdown(until)
  const seconds = countdown.minutes * 60 + countdown.seconds

  const start = useCallback(() => setUntil(Date.now() + durationMs), [durationMs])

  return {
    active: seconds > 0,
    label: `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`,
    start,
  }
}
