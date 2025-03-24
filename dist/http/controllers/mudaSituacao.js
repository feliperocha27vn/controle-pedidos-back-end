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

// src/http/controllers/mudaSituacao.ts
var mudaSituacao_exports = {};
__export(mudaSituacao_exports, {
  mudaSituacao: () => mudaSituacao
});
module.exports = __toCommonJS(mudaSituacao_exports);

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/http/controllers/mudaSituacao.ts
var import_zod = require("zod");
async function mudaSituacao(request, reply) {
  const situacaoPedidBodySchema = import_zod.z.object({
    id: import_zod.z.string().uuid(),
    situacaoPagamento: import_zod.z.enum(["pago", "aberto"])
  });
  const { id } = situacaoPedidBodySchema.parse(request.params);
  const { situacaoPagamento } = situacaoPedidBodySchema.parse(request.body);
  await prisma.pedidos.update({
    where: {
      id
    },
    data: {
      situacao_pagamento: situacaoPagamento
    }
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mudaSituacao
});
