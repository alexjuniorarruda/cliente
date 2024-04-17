import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { Prisma } from "@prisma/client";
import { buscarPorCep } from "../helpers/buscaPorCep";


export = class ClienteController {
    static async criarCliente(req: Request, res: Response) {

        const {
            nome_completo,
            cpf,
            data_nascimento,
            logradouro,
            numero_logradouro,
            bairro,
            email,
            telefone,
            cep
        } = req.body;

        const endereco = `${logradouro}, ${numero_logradouro}, ${bairro}`;

        const ufECidade: any = await buscarPorCep(cep);

        const uf = ufECidade.uf;
        const cidade = ufECidade.cidade;

        try {

            const cliente = await prismaClient.cliente.create({
                data: {
                    nome_completo,
                    cpf,
                    data_nascimento: new Date(data_nascimento),
                    endereco,
                    email,
                    telefone,
                    uf,
                    cidade,
                    cep
                }
            });

            return res.status(201).json(cliente);

        } catch (e) {

            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    return res.status(400).json('Valor únco violado');
                }
            }

        }

    }

    static async atualizarCliente(req: Request, res: Response) {

        const id: number = parseInt(req.params.id);

        const {
            nome_completo,
            cpf,
            data_nascimento,
            logradouro,
            numero_logradouro,
            bairro,
            email,
            telefone,
            cep
        } = req.body;

        const endereco = `${logradouro}, ${numero_logradouro}, ${bairro}`;

        const ufECidade: any = await buscarPorCep(cep);

        const uf = ufECidade.uf;
        const cidade = ufECidade.cidade;

        try {

            const cliente = await prismaClient.cliente.update({
                where: {
                    id: id
                },
                data: {
                    nome_completo,
                    cpf,
                    data_nascimento: new Date(data_nascimento),
                    endereco,
                    email,
                    telefone,
                    uf,
                    cidade,
                    cep
                }
            });

            return res.status(200).json(cliente);

        } catch (e) {

            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    return res.status(400).json('Valor únco violado');
                }

                if (e.code === 'P2025') {
                    return res.status(404).json('Não foi possível atualizar o cliente.');
                }                
            }

        }

    }

    static async clientePorId(req: Request, res: Response) {

        const id: number = parseInt(req.params.id);  

        const cliente = await prismaClient.cliente.findUnique({
            where: {
                id: id
            }
        });

        if (cliente === null) {
            return res.status(404).json("Cliente não encontrado.");
        }

        return res.status(200).json(cliente);

    }

    static async todosOsClientes(req: Request, res: Response) {

        const clientes = await prismaClient.cliente.findMany();

        return res.status(200).json(clientes);
    }

    static async excluirCliente(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        try {

            await prismaClient.cliente.delete({
                where: {
                    id: id
                }
            });

            return res.status(200).json("Cliente excluído com sucesso.");

        } catch (e) {

            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2025') {
                    return res.status(404).json('Não foi possível excluir o cliente.');
                }                
            }

        }

    }
}
