import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { env } from '../env.js'
import { errorHandler } from './error-handler.js'
import { authPlugin } from './middlewares/auth.js'
import { authRoutes } from './routes/auth.js'
import { setupSockets } from './sockets/index.js'

const app = fastify({ trustProxy: env.TRUST_PROXY }).withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)
app.setErrorHandler(errorHandler)

app.register(fastifyCors, {
  origin: env.CORS_ORIGIN,
  credentials: true,
})

app.register(authPlugin)
app.register(authRoutes)

app.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
  setupSockets(app.server)

  console.log(`HTTP server running on port ${env.PORT}`)
})
