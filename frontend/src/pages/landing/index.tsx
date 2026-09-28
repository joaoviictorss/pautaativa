import { useCallback, useEffect, useState } from 'react'

import { PEOPLE } from '@/lib/mocks/people'
import { seededRandom } from '@/lib/mocks/random'
import type { VoteKey, Votes } from '@/lib/poll/votes'

import { CtaFinal } from './components/cta-final'
import { Faq } from './components/faq'
import { Features } from './components/features'
import { Footer } from './components/footer'
import { Guarantees } from './components/guarantees'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { HowItWorks } from './components/how-it-works'
import { MobileShowcase } from './components/mobile-showcase'
import { MobileStickyBar } from './components/mobile-sticky-bar'
import { Results } from './components/results'
import { Roles } from './components/roles'
import type { LandingLayoutProps, LandingProps } from './data'
import { Landing as Layout } from './layout'

const INITIAL_VOTES: Votes = { f: 812, c: 341, a: 131 }
const SERIES_LENGTH = 30
const TICK_MS = 1700

function buildInitialSeries() {
  return Array.from(
    { length: SERIES_LENGTH },
    (_, i) => 14 + Math.round(seededRandom(i + 3) * 18 + Math.sin(i / 4) * 6)
  )
}

/**
 * Estado simulado de uma votação ao vivo, compartilhado entre as seções que
 * mostram a mesma pauta de exemplo (hero, painel de recursos, resultados,
 * barra fixa).
 */
function usePollDemo() {
  const [votes, setVotes] = useState<Votes>(INITIAL_VOTES)
  const [myVote, setMyVote] = useState<VoteKey | null>(null)
  const [voteMessage, setVoteMessage] = useState('Escolha uma opção para votar.')
  const [series, setSeries] = useState<number[]>(buildInitialSeries)
  const [lastVoterIndex, setLastVoterIndex] = useState(0)
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setVotes((current) => {
        const next = { ...current }
        const increments = 1 + Math.floor(Math.random() * 3)
        for (let i = 0; i < increments; i++) {
          const roll = Math.random()
          if (roll < 0.6) next.f++
          else if (roll < 0.88) next.c++
          else next.a++
        }
        return next
      })
      setSeries((current) => [...current.slice(1), 12 + Math.round(Math.random() * 26)])
      setLastVoterIndex(Math.floor(Math.random() * PEOPLE.length))
      setPulse((p) => p + 1)
    }, TICK_MS)
    return () => clearInterval(id)
  }, [])

  const castVote = useCallback((key: VoteKey) => {
    setMyVote((current) => {
      if (current === key) return current

      setVotes((v) => {
        const next = { ...v, [key]: v[key] + 1 }
        if (current) next[current] -= 1
        return next
      })
      setVoteMessage('Voto registrado. Ninguém vê em quem você votou.')
      return key
    })
  }, [])

  return { votes, myVote, castVote, voteMessage, series, lastVoterIndex, pulse }
}

export type PollDemo = ReturnType<typeof usePollDemo>

export function Landing(_props: LandingProps) {
  const poll = usePollDemo()

  const layoutProps: LandingLayoutProps = {
    header: <Header />,
    hero: <Hero poll={poll} />,
    roles: <Roles />,
    features: <Features poll={poll} />,
    results: <Results poll={poll} />,
    mobileShowcase: <MobileShowcase />,
    howItWorks: <HowItWorks />,
    guarantees: <Guarantees />,
    faq: <Faq />,
    ctaFinal: <CtaFinal />,
    footer: <Footer />,
    mobileStickyBar: <MobileStickyBar poll={poll} />,
  }

  return <Layout {...layoutProps} />
}
