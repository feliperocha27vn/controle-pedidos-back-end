import { prisma } from '@/lib/prisma'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function excluirPedido(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const schemaIdParams = z.object({
    id: z.string().uuid(),
  })

  const { id } = schemaIdParams.parse(request.params)

  await prisma.pedidos.delete({
    where: {
      id,
    },
  })

  reply.status(204).send()
}
