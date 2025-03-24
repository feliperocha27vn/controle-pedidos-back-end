/*
  Warnings:

  - You are about to drop the column `nome` on the `pedidos` table. All the data in the column will be lost.
  - Added the required column `nome_cliente` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Made the column `valor` on table `pedidos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "nome",
ADD COLUMN     "nome_cliente" TEXT NOT NULL,
ALTER COLUMN "valor" SET NOT NULL;
