export class RegisterUseCase {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  constructor(private pedidoRepository: any) {}

  async execute({
    nomeCliente,
    situacaoPagamento,
    descricaoPedido,
    valor,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  }: any) {
    await this.pedidoRepository.create({
      situacao_pagamento: situacaoPagamento,
      descricao_pedido: descricaoPedido,
      nome_cliente: nomeCliente,
      valor,
    })
  }
}
