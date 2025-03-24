import { app } from './app'
import { env } from './env'
import fastifyCors from '@fastify/cors'

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
})

app
  .listen({
    host: '0.0.0.0',
    port: env?.PORT,
  })
  .then(() => {
    console.log('HTTP Server is Running 🚀')
  })
