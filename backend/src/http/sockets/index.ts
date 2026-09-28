import type { Server as HttpServer } from 'node:http'

import { fromNodeHeaders } from 'better-auth/node'
import { Server } from 'socket.io'

import { env } from '../../env.js'
import { auth } from '../../lib/auth.js'

export function setupSockets(httpServer: HttpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: env.CORS_ORIGIN,
      credentials: true,
    },
  })

  io.use(async (socket, next) => {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(socket.request.headers),
    })

    if (!session) {
      next(new Error('unauthorized'))
      return
    }

    socket.data.userId = session.user.id as string
    next()
  })

  io.on('connection', (socket) => {
    socket.on('join-pauta', (pautaId: string) => {
      socket.join(pautaId)
    })

    socket.on('leave-pauta', (pautaId: string) => {
      socket.leave(pautaId)
    })
  })

  // Quando as rotas de pauta/comentário/voto existirem, emitir aqui via
  // io.to(pautaId).emit("novo-comentario", ...) / "voto-atualizado" / etc.

  return io
}
