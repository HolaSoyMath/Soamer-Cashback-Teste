import fastify, { FastifyInstance } from 'fastify';
import { PrismaClient } from "@prisma/client";
import {z} from 'zod'



export default (app: FastifyInstance, prisma: PrismaClient) => {

    // para atualizar a senha do User utilize o padrao:
    // url = http://localhost:3333/change-password
    // json =
    //  {
    //  	"cuid": "clohqw9cp0000tzyoq3gk73si",
    //  	"newPassword": "123"
    //  }

    
    app.put('/change-password', async(request,reply)=>{
        try{
            const getSchema = z.object({
                cuid: z.string(),
                newPassword: z.string()
            })
            const {cuid,newPassword} = getSchema.parse(request.body)

            const existingUser = await prisma.user.findUnique({
                where:{
                    cuid: cuid,
                    isNewUser: true
                }})

            if(!existingUser){
                return reply.status(404).send('Erro interno, usuário não encontrado')
            }

            const updateUser = await prisma.user.update({
                where:{
                    cuid:cuid
                },
                data:{
                    password:newPassword
                }
            })

            reply.status(200).send('Senha alterada com sucesso!')

        } catch (error) {
            console.log(error)
            return reply.status(500).send('Erro interno do servidor')
        }

    })
}