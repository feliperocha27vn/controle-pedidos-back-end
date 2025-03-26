import { prisma } from '@/lib/prisma'
import type { Prisma } from '@prisma/client'
import type { PedidosRepository } from '../pedido-repository'

export class PrismaPedidoRepository implements PedidosRepository {
  async create(data: Prisma.PedidosCreateInput) {
    const order = await prisma.pedidos.create({
      data,
    })

    return order
  }

  async update(data: Prisma.PedidosUpdateInput) {
    const orderUpdated = await prisma.pedidos.update({
      where,
      data,
    })
  }
}
