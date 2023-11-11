import fastify, { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";
import {z} from 'zod'
import { request } from "http";
import { sensitiveHeaders } from "http2";

export default (app: FastifyInstance, prisma: PrismaClient) => {


    // para usar o get faça a seguinte requisição
    // /seller-info?cuid=dsfhdsafsadjkfhads

    app.get('/seller-info', async (request, reply) => {
        try {
            const getSellerSchema = z.object({
                cuid: z.string()
            });
    
            const { cuid } = getSellerSchema.parse(request.query);
    
            const sellerInfo = await prisma.seller.findFirst({
                where: {
                    user: {
                        cuid: cuid
                    }
                }, 
                select: {
                    sellerName: true,
                    cpfSeller: true,
                    user: {
                        select: {
                            email:true,
                            cellphone: true,
                            password:true
                        }
                    },
                    carDealerShip:{
                        select:{
                            cnpj: true
                        }
                    }

                }
            });
    
            if (sellerInfo) {
                return reply.status(200).send(sellerInfo);
            } else {
                return reply.status(404).send('Vendedor não encontrado');
            }
        } catch (error) {
            console.error(error);
            return reply.status(500).send('Erro interno no servidor');
        }
    });



    //url = https://soamer-api.onrender.com/seller-info?cuid=5e596f1f-a836-4319-ae75-30eda55f3e4&name=Davi&email=davi@novoemail.com&cellphone=(41)66666-6666&password=123456789&street=rua%20da%20paz&number=123

    app.put('/seller-info', async (request, reply) => {
        try {
            const getSellerSchema = z.object({
                cuid: z.string(),
                name: z.string(),
                email: z.string().email(),
                cellphone: z.string(),
                password: z.string(),
                street: z.string(),
                number: z.string()

            });
    
            const { cuid, name, email, cellphone, password, street, number} = getSellerSchema.parse(request.body);

            const user = await prisma.user.findUnique({
                where:{
                    cuid:cuid
                },
                select:{
                    idUser:true
                }
            })
            
            if(!user){
                return reply.status(404).send('Usuário não encontrado')
            }

            const idUser = user.idUser

            const updateUser = await prisma.user.update({
                where:{
                    idUser:idUser
                },
                data:{
                    email:email,
                    password:password,
                    cellphone:cellphone
                }
            })

            const updateSeller = await prisma.seller.update({
                where:{
                    idUser:idUser
                },
                data:{
                    sellerName:name
                }
            })

            const updateAddress = await prisma.address.update({
                where:{
                    idUser:idUser
                },
                data:{
                    logradouro:street,
                    numero:number
                }
            })

            return reply.status(200).send('Informações atualizadas com sucesso!')

        } catch (error) {
            console.error(error);
            return reply.status(500).send('Erro interno no servidor');
        }
    })
}