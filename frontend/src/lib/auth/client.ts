import { inferAdditionalFields } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/react'

import { env } from '@/env'

import { savePendingEmail } from './pending-email'

export const authClient = createAuthClient({
  baseURL: env.VITE_API_URL,
  fetchOptions: {
    credentials: 'include',
  },
  // Espelha os additionalFields do backend (backend/src/lib/auth.ts).
  plugins: [
    inferAdditionalFields({
      user: {
        cpf: { type: 'string', required: true },
        role: { type: 'string', required: false, input: false },
      },
    }),
  ],
})

export const { signIn, signUp, signOut, useSession, sendVerificationEmail, requestPasswordReset, resetPassword } =
  authClient

/** Páginas do front para onde o backend redireciona quem clica nos links de e-mail. */
export const verifyEmailCallbackUrl = () => `${window.location.origin}/verificar-email`
export const resetPasswordCallbackUrl = () => `${window.location.origin}/redefinir-senha`

export async function sendVerificationLink(email: string) {
  const result = await sendVerificationEmail({ email, callbackURL: verifyEmailCallbackUrl() })
  if (!result.error) savePendingEmail(email)
  return result
}

export function sendPasswordResetLink(email: string) {
  return requestPasswordReset({ email, redirectTo: resetPasswordCallbackUrl() })
}
