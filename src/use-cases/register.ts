import type { PedidosRepository } from '@/repositories/pedido-repository'

interface RegisterUseCaseRequest {
  nomeCliente: string
  situacaoPagamento: string
  descricaoPedido: string
  valor: number
}

export class RegisterUseCase {
  constructor(private pedidoRepository: PedidosRepository) {}

  async execute({
    nomeCliente,
    situacaoPagamento,
    descricaoPedido,
    valor,
  }: RegisterUseCaseRequest) {
    await this.pedidoRepository.create({
      situacao_pagamento: situacaoPagamento,
      descricao_pedido: descricaoPedido,
      nome_cliente: nomeCliente,
      valor,
    })
  }
}
