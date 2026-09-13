import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { env } from '../env.js'
import { errorHandler } from './error-handler.js'
import { authenticate } from './routes/auth/authenticate.js'
import { register } from './routes/auth/register.js'
import { setupSockets } from './sockets/index.js'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)
app.setErrorHandler(errorHandler)

app.register(fastifyCors, {
  origin: env.CORS_ORIGIN,
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(register)
app.register(authenticate)

app.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
  setupSockets(app.server)

  console.log(`HTTP server running on port ${env.PORT}`)
})
