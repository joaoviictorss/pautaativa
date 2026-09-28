import { fromNodeHeaders } from 'better-auth/node'
import type { FastifyInstance } from 'fastify'
import fastifyPlugin from 'fastify-plugin'

import { auth } from '../../lib/auth.js'

export const authRoutes = fastifyPlugin(async (app: FastifyInstance) => {
  app.route({
    method: ['GET', 'POST'],
    url: '/api/auth/*',
    async handler(request, reply) {
      const url = new URL(request.url, `http://${request.headers.host}`)
      const headers = fromNodeHeaders(request.headers)
      // O rate limit do Better Auth identifica o cliente por esse header.
      headers.set('x-forwarded-for', request.ip)

      const authRequest = new Request(url, {
        method: request.method,
        headers,
        ...(request.body ? { body: JSON.stringify(request.body) } : {}),
      })

      const response = await auth.handler(authRequest)

      reply.status(response.status)
      response.headers.forEach((value, key) => reply.header(key, value))

      return reply.send(response.body ? await response.text() : null)
    },
  })
})
