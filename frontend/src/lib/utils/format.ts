export function formatNumber(value: number) {
  return value.toLocaleString('pt-BR')
}

export function formatPercent(value: number) {
  return value.toFixed(1).replace('.', ',') + '%'
}

/** Iniciais do primeiro e do último nome: "Marina Souza" → "MS". */
export function getInitials(name: string) {
  const words = name.trim().split(/\s+/)
  const first = words[0]?.[0] ?? ''
  const last = words.length > 1 ? words[words.length - 1][0] : ''
  return (first + last).toUpperCase()
}
