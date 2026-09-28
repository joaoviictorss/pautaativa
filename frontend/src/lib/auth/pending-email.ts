const KEY = 'pautaviva:pending-email'

/**
 * Guarda o e-mail do último cadastro/login pendente nesta aba, pra tela de
 * link expirado já vir preenchida. O link de confirmação não traz o e-mail.
 */
export function savePendingEmail(email: string) {
  try {
    sessionStorage.setItem(KEY, email)
  } catch {
    // sessionStorage indisponível (modo privado, bloqueado): só não pré-preenche.
  }
}

export function readPendingEmail() {
  try {
    return sessionStorage.getItem(KEY) ?? ''
  } catch {
    return ''
  }
}
