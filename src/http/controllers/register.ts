import { PrismaPedidoRepository } from '@/repositories/prisma/prisma-pedido-repository'
import { RegisterUseCase } from '@/use-cases/register'
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

  const prismaPedidoRepository = new PrismaPedidoRepository()

  const registerUseCase = new RegisterUseCase(prismaPedidoRepository)

  try {
    await registerUseCase.execute({
      situacaoPagamento,
      descricaoPedido,
      nomeCliente,
      valor,
    })

    return reply.status(201).send()
  } catch (err) {
    return reply.status(500).send()
  }
}
