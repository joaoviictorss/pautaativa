import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.url().default('http://localhost:3333'),
})

const parsed = envSchema.safeParse(import.meta.env)

if (!parsed.success) {
  console.error('❌ Invalid environment variables:', z.treeifyError(parsed.error))
  throw new Error('Invalid environment variables.')
}

export const env = parsed.data
