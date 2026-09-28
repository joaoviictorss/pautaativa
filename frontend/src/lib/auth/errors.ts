/** Formato do `error` devolvido pelo authClient do Better Auth. */
export interface AuthError {
  status: number
  code?: string
  message?: string
  attemptsLeft?: number
  lockedUntil?: string
}

export function minutesUntil(iso: string | undefined) {
  if (!iso) return 15
  return Math.max(1, Math.ceil((new Date(iso).getTime() - Date.now()) / 60000))
}
