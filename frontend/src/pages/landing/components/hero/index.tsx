import { useEffect, useState } from 'react'

import { getAvatar, PEOPLE } from '@/lib/avatars'
import { formatNumber } from '@/lib/format'
import { getBars, getTotal, POLL_END_AT } from '@/lib/poll'
import { useCountdown } from '@/hooks/use-countdown'

import { Hero as Layout } from './layout'
import type { HeroLayoutProps, HeroProps, HeroVoteOption } from './data'

const ROTATING_WORDS = ['em tempo real', 'com transparência', 'de onde estiver', 'junto']
const ROTATING_WORD_MS = 2400
const HERO_VOTER_NAMES = ['Marina Souza', 'Carlos Mendes', 'Ana Beatriz', 'João Pedro', 'Lúcia Ramos']

/** Faz a palavra do headline trocar sozinha a cada `ROTATING_WORD_MS`. */
function useRotatingWordIndex() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % ROTATING_WORDS.length)
    }, ROTATING_WORD_MS)
    return () => clearInterval(id)
  }, [])

  return index
}

export function Hero({ poll }: HeroProps) {
  const wordIndex = useRotatingWordIndex()
  const countdown = useCountdown(POLL_END_AT)

  const total = getTotal(poll.votes)
  const bars = getBars(poll.votes)
  const lastVoterName = PEOPLE[poll.lastVoterIndex]
  const lastVoterAvatar = getAvatar(lastVoterName, poll.lastVoterIndex)

  const voteOptions: HeroVoteOption[] = bars.map((bar) => ({
    key: bar.key,
    label: bar.label,
    active: poll.myVote === bar.key,
    onVote: () => poll.castVote(bar.key),
  }))

  const recentVoters = [0, 1, 2, 3].map((offset) => {
    const index = (poll.lastVoterIndex + offset * 5) % PEOPLE.length
    return getAvatar(PEOPLE[index], index)
  })

  const layoutProps: HeroLayoutProps = {
    poll,
    rotatingWord: ROTATING_WORDS[wordIndex],
    wordKey: wordIndex,
    avatars: HERO_VOTER_NAMES.map((name, index) => getAvatar(name, index)),
    totalLabel: formatNumber(total),
    countdownLabel: countdown.label,
    bars,
    voteOptions,
    voteMessage: poll.voteMessage,
    recentVoters,
    participantsLabel: formatNumber(total),
    lastVoterName,
    lastVoterAvatar,
    pulse: poll.pulse,
  }

  return <Layout {...layoutProps} />
}
