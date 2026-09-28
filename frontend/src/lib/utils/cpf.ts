export function unmaskCpf(value: string) {
  return value.replace(/\D/g, '').slice(0, 11)
}

export function maskCpf(value: string) {
  const digits = unmaskCpf(value)
  return digits
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d{1,2})$/, '.$1-$2')
}

/** Confere os dois dígitos verificadores do CPF (mesma regra do backend). */
export function isValidCpf(value: string) {
  const digits = unmaskCpf(value)
  if (digits.length !== 11 || /^(\d)\1{10}$/.test(digits)) return false

  const calcCheckDigit = (length: number) => {
    let sum = 0
    for (let i = 0; i < length; i++) {
      sum += Number(digits[i]) * (length + 1 - i)
    }
    const rest = (sum * 10) % 11
    return rest === 10 ? 0 : rest
  }

  return calcCheckDigit(9) === Number(digits[9]) && calcCheckDigit(10) === Number(digits[10])
}
