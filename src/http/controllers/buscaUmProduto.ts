import { prisma } from '@/lib/prisma'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function buscaUmPedidoRoute(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const idPedidoSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = idPedidoSchema.parse(request.params)

  const pedidoEncontrado = await prisma.pedidos.findUnique({
    where: {
      id,
    },
  })

  reply.status(200).send(pedidoEncontrado)
}
