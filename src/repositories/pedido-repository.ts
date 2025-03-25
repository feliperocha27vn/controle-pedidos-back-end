import type { Pedidos, Prisma } from '@prisma/client'

export interface PedidosRepository {
  create(data: Prisma.PedidosCreateInput): Promise<Pedidos>
}
