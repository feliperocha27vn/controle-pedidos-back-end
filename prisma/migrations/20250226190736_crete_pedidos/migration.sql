-- CreateTable
CREATE TABLE "pedidos" (
    "id" TEXT NOT NULL,
    "situacaoPagamento" BOOLEAN NOT NULL,
    "descricaoPedido" TEXT NOT NULL,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);
