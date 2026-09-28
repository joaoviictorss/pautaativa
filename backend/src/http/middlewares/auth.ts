import { fromNodeHeaders } from 'better-auth/node'
import type { FastifyInstance } from 'fastify'
import fastifyPlugin from 'fastify-plugin'

import { auth } from '../../lib/auth.js'
import { UnauthorizedError } from '../routes/_errors/unauthorized-error.js'

export const authPlugin = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook('preHandler', async (request) => {
    request.getCurrentUser = async () => {
      const result = await auth.api.getSession({
        headers: fromNodeHeaders(request.headers),
      })

      if (!result) {
        throw new UnauthorizedError('Sessão inválida ou expirada.')
      }

      return result.user
    }

    request.getCurrentUserId = async () => {
      const user = await request.getCurrentUser()

      return user.id
    }
  })
})
