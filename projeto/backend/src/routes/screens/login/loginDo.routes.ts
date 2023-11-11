import fastify, { FastifyInstance } from 'fastify';
import { PrismaClient } from "@prisma/client";
import {z} from 'zod'



export default (app: FastifyInstance, prisma: PrismaClient) => {

    // para usar o get faça a seguinte requisição
    // /login?cpf=111.111.111-11&password=123
    
    app.get('/login', async (request,reply) => {

        const getUserSchema = z.object({
            cpf: z.string(),
            password: z.string()
        })

        const {cpf,password} = getUserSchema.parse(request.query)

        try {
            const user = await prisma.seller.findFirst({
                where: {
                  cpfSeller: cpf,
                  user:{
                    password:password
                  }
                },
                select: {
                    user:{
                        select:{
                            cuid:true,
                            isNewUser:true
                        }
                    }
                }
            });

            if (user) {
                // Usuário encontrado, você pode realizar ações relacionadas ao login aqui
                return reply.status(200).send({
                    cuid: user.user.cuid,
                    isNewUser: user.user.isNewUser
                });
            } else {
                // Usuário não encontrado
                return reply.status(500).send('Credenciais inválidas');
            }
        } catch (error) {
            // Lidar com erros de consulta do Prisma
            console.error(error);
            return reply.status(500).send('Erro interno do servidor');
        }
    })

}