import { prisma } from '@/lib/prisma'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function editarUmPedido(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const schemaIdProduto = z.object({
    id: z.string().uuid(),
  })

  const { id } = schemaIdProduto.parse(request.params)

  const schemaRequestBody = z.object({
    descricaoPedido: z.string(),
    nomeCliente: z.string(),
    valor: z.number(),
  })

  const { descricaoPedido, nomeCliente, valor } = schemaRequestBody.parse(
    request.body
  )

  await prisma.pedidos.update({
    where: {
      id,
    },
    data: {
      descricao_pedido: descricaoPedido,
      nome_cliente: nomeCliente,
      valor,
    },
  })
}
