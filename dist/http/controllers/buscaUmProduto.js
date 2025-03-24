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

// src/http/controllers/buscaUmProduto.ts
var buscaUmProduto_exports = {};
__export(buscaUmProduto_exports, {
  buscaUmPedidoRoute: () => buscaUmPedidoRoute
});
module.exports = __toCommonJS(buscaUmProduto_exports);

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/http/controllers/buscaUmProduto.ts
var import_zod = require("zod");
async function buscaUmPedidoRoute(request, reply) {
  const idPedidoSchema = import_zod.z.object({
    id: import_zod.z.string().uuid()
  });
  const { id } = idPedidoSchema.parse(request.params);
  const pedidoEncontrado = await prisma.pedidos.findUnique({
    where: {
      id
    }
  });
  reply.status(200).send(pedidoEncontrado);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  buscaUmPedidoRoute
});
