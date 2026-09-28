import { z } from 'zod'

import { isValidCpf, unmaskCpf } from '@/lib/utils/cpf'

const email = z.string().trim().pipe(z.email('Informe um e-mail válido.'))
const newPassword = z.string().min(8, 'A senha precisa ter pelo menos 8 caracteres.').max(128, 'Use no máximo 128 caracteres.')

export const signInSchema = z.object({
  email,
  password: z.string().min(1, 'Informe sua senha.'),
})

export const signUpSchema = z.object({
  nome: z
    .string()
    .trim()
    .refine((v) => v.split(/\s+/).length >= 2, 'Informe nome e sobrenome.'),
  cpf: z
    .string()
    .refine((v) => unmaskCpf(v).length === 11, { message: 'O CPF tem 11 dígitos.', abort: true })
    .refine(isValidCpf, 'CPF inválido. Confira os números.'),
  email,
  password: newPassword,
})

export const emailSchema = z.object({ email })

export const resetPasswordSchema = z
  .object({
    password: newPassword,
    confirmPassword: z.string(),
  })
  .refine((v) => v.password === v.confirmPassword, {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword'],
  })

export type SignInValues = z.infer<typeof signInSchema>
export type SignUpValues = z.infer<typeof signUpSchema>
export type EmailValues = z.infer<typeof emailSchema>
export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>
