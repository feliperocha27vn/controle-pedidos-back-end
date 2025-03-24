/*
  Warnings:

  - You are about to drop the column `descricaoPedido` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `situacaoPagamento` on the `pedidos` table. All the data in the column will be lost.
  - Added the required column `descricao_pedido` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `situacao_pagamento` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "descricaoPedido",
DROP COLUMN "situacaoPagamento",
ADD COLUMN     "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "descricao_pedido" TEXT NOT NULL,
ADD COLUMN     "situacao_pagamento" BOOLEAN NOT NULL;
