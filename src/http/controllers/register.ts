import { prisma } from '@/lib/prisma'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    situacaoPagamento: z.enum(['pago', 'aberto']),
    descricaoPedido: z.string(),
    nomeCliente: z.string(),
    valor: z.number(),
  })

  const { situacaoPagamento, descricaoPedido, nomeCliente, valor } =
    registerBodySchema.parse(request.body)

  await prisma.pedidos.create({
    data: {
      situacao_pagamento: situacaoPagamento,
      descricao_pedido: descricaoPedido,
      nome_cliente: nomeCliente,
      valor,
    },
  })

  reply.status(201).send()
}
