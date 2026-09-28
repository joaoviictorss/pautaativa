const LEVELS = [
  { label: '', color: 'oklch(0.93 0 0)' },
  { label: 'Fraca', color: 'oklch(0.55 0.19 23)' },
  { label: 'Média', color: 'oklch(0.7 0.15 60)' },
  { label: 'Boa', color: 'oklch(0.65 0.14 130)' },
  { label: 'Forte', color: 'oklch(0.55 0.14 150)' },
]

export interface PasswordStrength {
  score: number
  label: string
  color: string
  bars: string[]
}

/** Heurística simples: 1 ponto por critério atendido (tamanho, caixa, número, símbolo). */
export function usePasswordStrength(password: string): PasswordStrength {
  const criteria = [
    password.length >= 8,
    /[a-z]/i.test(password) && /\d/.test(password),
    /[A-Z]/.test(password) && /[a-z]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ]
  const score = password ? Math.max(1, criteria.filter(Boolean).length) : 0
  const level = LEVELS[score]

  return {
    score,
    label: level.label,
    color: level.color,
    bars: [1, 2, 3, 4].map((i) => (i <= score ? level.color : LEVELS[0].color)),
  }
}
