import fastify, { FastifyInstance } from 'fastify';
import { Prisma, PrismaClient } from "@prisma/client";
import { z } from 'zod'

export default (app: FastifyInstance, prisma: PrismaClient) => {

    app.get('/home/historico-vendas', async (request, reply) => {
        try {
            const getSchema = z.object({ cuid: z.string() })
            const { cuid } = getSchema.parse(request.query)

            const existingUser = await prisma.user.findUnique({
                where: {
                    cuid: cuid
                }
            })
            if (!existingUser) {
                return reply.status(200).send('Não existe registro de histórico para esse usuário')
            }

            const idUser = existingUser.idUser

            const sellerHistory = await prisma.sellerHistory.findMany({
                where: {
                    seller: {
                        idUser: idUser
                    }
                },
                select: {
                    idSellerHistory: true,
                    product: {
                        select: {
                            qtdPontos: true
                        }
                    }
                }
            });

            return reply.status(200).send(sellerHistory);

        } catch (error) {
            console.log(error)
            return reply.status(500).send('Erro interno do servidor')
        }
    })
}
