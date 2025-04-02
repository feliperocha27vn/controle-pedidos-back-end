import type { FastifyInstance } from 'fastify'
import { buscaUmPedidoRoute } from './controllers/buscaUmProduto'
import { changeSitutation } from './controllers/change-situation'
import { editarUmPedido } from './controllers/editarUmPedido'
import { excluirPedido } from './controllers/excluirPedido'
import { getTotalOrder } from './controllers/getTotalOrders'
import { listPedidos } from './controllers/listPedidos'
import { register } from './controllers/register'

export async function appRoutes(app: FastifyInstance) {
  app.post('/pedido', register)
  app.get('/pedidos', listPedidos)
  app.get('/soma-pedidos', getTotalOrder)
  app.get('/pedido/:id', buscaUmPedidoRoute)
  app.patch('/pedido/:id', changeSitutation)
  app.delete('/pedido/:id', excluirPedido)
  app.put('/pedido/:id', editarUmPedido)
}
