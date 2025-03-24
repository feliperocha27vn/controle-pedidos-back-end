import { prisma } from '@/lib/prisma'
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function listPedidos(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const data = await prisma.pedidos.findMany()

  reply.send(data)
}
