import { prisma } from '@/lib/prisma'
import type { Prisma } from '@prisma/client'
import type { PedidosRepository } from '../pedido-repository'

export class PrismaPedidoRepository implements PedidosRepository {
  async create(data: Prisma.PedidosCreateInput) {
    const user = await prisma.pedidos.create({
      data,
    })

    return user
  }
}
