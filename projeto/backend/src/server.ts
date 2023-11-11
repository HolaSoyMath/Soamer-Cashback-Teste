import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { request } from "http";
import {z} from 'zod'
import loginDoRoutes from "./routes/screens/login/loginDo.routes";
import LoginChangePasswordRoutes from "./routes/screens/login/loginChangePassword.routes";
import campanha from "./routes/screens/home/campanha";
import campanhasSummary from "./routes/screens/home/campanhas-summary";
import historicoVendasRoutes from "./routes/screens/home/historico-vendas.routes";
import pontosValidadeRoutes from "./routes/screens/home/pontos-validade.routes";
import personalInfoRoutes from "./routes/screens/personal-info/personalInfo.routes";


const app = fastify()

const prisma = new PrismaClient()



app.get('/', async (request,reply) => {
    reply.status(200).send()
})

//home
campanha(app,prisma)
campanhasSummary(app,prisma)
historicoVendasRoutes(app,prisma)
pontosValidadeRoutes(app,prisma)

//login
loginDoRoutes(app,prisma)
LoginChangePasswordRoutes(app,prisma)

//mudar informacoes pessoais
personalInfoRoutes(app,prisma)








app.listen({
    host:'0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(()=>{
    console.log('HTTP Server running')
})