import { prisma } from '@/lib/prisma'
import type { Prisma } from '@prisma/client'

export class PrismaPedidoRepository {
  async create(data: Prisma.PedidosCreateInput) {
    const user = await prisma.pedidos.create({
      data,
    })

    return user
  }
}
