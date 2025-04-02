import { prisma } from '@/lib/prisma'
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function getTotalOrder(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const totalSales = await prisma.pedidos.aggregate({
    _sum: {
      valor: true,
    },
  })

  return reply.status(200).send({ valorVendido: totalSales })
}
