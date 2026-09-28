import { useEffect, useState } from 'react'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
  label: string
  shortLabel: string
}

export function useCountdown(endAt: number): Countdown {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const remaining = Math.max(0, Math.floor((endAt - now) / 1000))
  const days = Math.floor(remaining / 86400)
  const hours = Math.floor((remaining % 86400) / 3600)
  const minutes = Math.floor((remaining % 3600) / 60)
  const seconds = remaining % 60

  return {
    days,
    hours,
    minutes,
    seconds,
    label: `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`,
    shortLabel: `${days}d ${pad(hours)}h ${pad(minutes)}m`,
  }
}
