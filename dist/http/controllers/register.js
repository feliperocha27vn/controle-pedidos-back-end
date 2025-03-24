"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/http/controllers/register.ts
var register_exports = {};
__export(register_exports, {
  register: () => register
});
module.exports = __toCommonJS(register_exports);

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/http/controllers/register.ts
var import_zod = require("zod");
async function register(request, reply) {
  const registerBodySchema = import_zod.z.object({
    situacaoPagamento: import_zod.z.enum(["pago", "aberto"]),
    descricaoPedido: import_zod.z.string(),
    nomeCliente: import_zod.z.string(),
    valor: import_zod.z.number()
  });
  const { situacaoPagamento, descricaoPedido, nomeCliente, valor } = registerBodySchema.parse(request.body);
  await prisma.pedidos.create({
    data: {
      situacao_pagamento: situacaoPagamento,
      descricao_pedido: descricaoPedido,
      nome_cliente: nomeCliente,
      valor
    }
  });
  reply.status(201).send();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  register
});
