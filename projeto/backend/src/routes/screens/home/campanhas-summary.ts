import fastify, { FastifyInstance } from 'fastify';
import { PrismaClient } from "@prisma/client";
import { z } from 'zod'

export default (app: FastifyInstance, prisma: PrismaClient) => {

    app.get('/home/campanhas-summary', async (request, reply) => {
        try {

            const Campaign = await prisma.selesCampaigns.findMany({
                select:{
                    idSelesCampaigns:true,
                    qtdPointsProduct:true,
                    tittle:true,
                    info:true,
                    product:{
                        select:{
                            nameProduct:true
                        }
                    }
                }
            })
            if (!Campaign) {
                return reply.status(404).send('Não existem campanhas ou ocorreu um erro no servidor')
            }

            return reply.status(200).send(Campaign);

        } catch (error) {
            console.log(error)
            return reply.status(500).send('Erro interno do servidor')
        }
    })
}
