export function formatNumber(value: number) {
  return value.toLocaleString('pt-BR')
}

export function formatPercent(value: number) {
  return value.toFixed(1).replace('.', ',') + '%'
}

/** Pseudo-aleatório determinístico (mesma seed sempre gera o mesmo valor). */
export function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}
