import { prisma } from '@/lib/prisma'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function mudaSituacao(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const situacaoPedidBodySchema = z.object({
    id: z.string().uuid(),
    situacaoPagamento: z.enum(['pago', 'aberto']),
  })

  const { id } = situacaoPedidBodySchema.parse(request.params)
  const { situacaoPagamento } = situacaoPedidBodySchema.parse(request.body)

  await prisma.pedidos.update({
    where: {
      id,
    },
    data: {
      situacao_pagamento: situacaoPagamento,
    },
  })
}
