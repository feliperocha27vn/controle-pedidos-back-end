import type { FastifyInstance } from 'fastify'
import { buscaUmPedidoRoute } from './controllers/buscaUmProduto'
import { editarUmPedido } from './controllers/editarUmPedido'
import { excluirPedido } from './controllers/excluirPedido'
import { listPedidos } from './controllers/listPedidos'
import { mudaSituacao } from './controllers/mudaSituacao'
import { register } from './controllers/register'

export async function appRoutes(app: FastifyInstance) {
  // rotas para os pedidos
  app.post('/pedido', register)
  app.get('/pedidos', listPedidos)
  app.get('/pedido/:id', buscaUmPedidoRoute)
  app.patch('/pedido/:id', mudaSituacao)
  app.delete('/pedido/:id', excluirPedido)
  app.put('/pedido/:id', editarUmPedido)
}
