import type { Server as HttpServer } from 'node:http'

import { Server } from 'socket.io'

import { env } from '../../env.js'

export function setupSockets(httpServer: HttpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: env.CORS_ORIGIN,
    },
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
