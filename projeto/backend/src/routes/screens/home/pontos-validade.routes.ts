import fastify, { FastifyInstance } from 'fastify';
import { Prisma, PrismaClient } from "@prisma/client";
import { z } from 'zod'

export default (app: FastifyInstance, prisma: PrismaClient) => {

    app.get('/home/pontos-validade', async (request, reply) => {
        try {
            const getSchema = z.object({ cuid: z.string() })
            const { cuid } = getSchema.parse(request.query)

            const existingUser = await prisma.user.findUnique({
                where: {
                    cuid: cuid
                }
            })
            if (!existingUser) {
                return reply.status(404).send('Erro interno, usuário não encontrado')
            }

            const idUser = existingUser.idUser

            const currentDateTime = new Date()

            const pointsHistory = await prisma.sellerHistory.findMany({
                where: {
                    seller: {
                        idUser: idUser
                    },
                    pointsExpirationDate: {
                        gt: currentDateTime
                    }
                },
                select: {
                    idSellerHistory: true,
                    pointsExpirationDate:true,
                    product: {
                        select: {
                            qtdPontos: true
                        }
                    }
                }
            });

            const totalPoints = pointsHistory.reduce((sum, history) => {
                return sum + history.product.qtdPontos;
            }, 0);


            return reply.status(200).send({ totalPoints });

        } catch (error) {
            console.log(error)
            return reply.status(500).send('Erro interno do servidor')
        }
    })
}
