import fastify, { FastifyInstance } from 'fastify';
import { Prisma, PrismaClient } from "@prisma/client";
import { z } from 'zod'

export default (app: FastifyInstance, prisma: PrismaClient) => {

    app.get('/home/campanha/:id', async (request, reply) => {
        try {
            const getSchema = z.object({ id: z.number() })
            const { id } = getSchema.parse(request.query)

            const Campaign = await prisma.selesCampaigns.findUnique({
                where: {
                    idSelesCampaigns:id
                },
                select:{
                    idSelesCampaigns:true,
                    product:{
                        select:{
                            nameProduct:true
                        }
                    },
                    qtdPointsProduct:true,
                    dateEnd:true,
                    tittle:true,
                    info:true
                }
            })
            if (!Campaign) {
                return reply.status(404).send('Campanha não encontrada')
            }

            return reply.status(200).send(Campaign);

        } catch (error) {
            console.log(error)
            return reply.status(500).send('Erro interno do servidor')
        }
    })
}
