"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/app.ts
var import_fastify = __toESM(require("fastify"));

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

// src/http/controllers/editarUmPedido.ts
var import_zod2 = require("zod");
async function editarUmPedido(request, reply) {
  const schemaIdProduto = import_zod2.z.object({
    id: import_zod2.z.string().uuid()
  });
  const { id } = schemaIdProduto.parse(request.params);
  const schemaRequestBody = import_zod2.z.object({
    situacaoPagamento: import_zod2.z.enum(["pago", "aberto"]),
    descricaoPedido: import_zod2.z.string(),
    nomeCliente: import_zod2.z.string(),
    valor: import_zod2.z.number()
  });
  const { situacaoPagamento, descricaoPedido, nomeCliente, valor } = schemaRequestBody.parse(request.body);
  await prisma.pedidos.update({
    where: {
      id
    },
    data: {
      situacao_pagamento: situacaoPagamento,
      descricao_pedido: descricaoPedido,
      nome_cliente: nomeCliente,
      valor
    }
  });
}

// src/http/controllers/excluirPedido.ts
var import_zod3 = require("zod");
async function excluirPedido(request, reply) {
  const schemaIdParams = import_zod3.z.object({
    id: import_zod3.z.string().uuid()
  });
  const { id } = schemaIdParams.parse(request.params);
  await prisma.pedidos.delete({
    where: {
      id
    }
  });
  reply.status(204).send();
}

// src/http/controllers/listPedidos.ts
async function listPedidos(request, reply) {
  const data = await prisma.pedidos.findMany();
  reply.send(data);
}

// src/http/controllers/mudaSituacao.ts
var import_zod4 = require("zod");
async function mudaSituacao(request, reply) {
  const situacaoPedidBodySchema = import_zod4.z.object({
    id: import_zod4.z.string().uuid(),
    situacaoPagamento: import_zod4.z.enum(["pago", "aberto"])
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

// src/http/controllers/register.ts
var import_zod5 = require("zod");
async function register(request, reply) {
  const registerBodySchema = import_zod5.z.object({
    situacaoPagamento: import_zod5.z.enum(["pago", "aberto"]),
    descricaoPedido: import_zod5.z.string(),
    nomeCliente: import_zod5.z.string(),
    valor: import_zod5.z.number()
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

// src/http/routes.ts
async function appRoutes(app2) {
  app2.post("/pedido", register);
  app2.get("/pedidos", listPedidos);
  app2.get("/pedido/:id", buscaUmPedidoRoute);
  app2.patch("/pedido/:id", mudaSituacao);
  app2.delete("/pedido/:id", excluirPedido);
  app2.put("/pedido/:id", editarUmPedido);
}

// src/app.ts
var app = (0, import_fastify.default)();
app.register(appRoutes);

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod6 = require("zod");
var envSchema = import_zod6.z.object({
  NODE_ENV: import_zod6.z.enum(["dev", "test", "production"]).default("dev"),
  PORT: import_zod6.z.coerce.number().default(3333)
});
var _env = envSchema.safeParse(process.env);
var env = _env.data;

// src/server.ts
var import_cors = __toESM(require("@fastify/cors"));
app.register(import_cors.default, {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
});
app.listen({
  host: "0.0.0.0",
  port: env?.PORT
}).then(() => {
  console.log("HTTP Server is Running \u{1F680}");
});
