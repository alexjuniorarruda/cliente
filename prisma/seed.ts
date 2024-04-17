import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const fernando = await prisma.cliente.create({
        data: {
            nome_completo: "Fernando Soares da Silva",
            cpf: "00000000000",
            data_nascimento: new Date("2000-01-01"),
            endereco: "Rua A, 123, Centro",
            email: "fernando@email.com.br",
            telefone: "0000000000",
            uf: "SP",
            cidade: "São Paulo",
            cep: "01153000"
        }
    });

    const mikaela = await prisma.cliente.create({
        data: {
            nome_completo: "Mikaela Lima de Souza",
            cpf: "11111111111",
            data_nascimento: new Date("1992-06-01"),
            endereco: "Rua B, 456, Centro",
            email: "mikaela@email.com.br",
            telefone: "0000000000",
            uf: "SP",
            cidade: "São Paulo",
            cep: "01153000"
        }
    });

    const rafael = await prisma.cliente.create({
        data: {
            nome_completo: "Rafael da Silva Oliveira",
            cpf: "22222222222",
            data_nascimento: new Date("1995-02-21"),
            endereco: "Rua C, 789, Centro",
            email: "rafael@email.com.br",
            telefone: "0000000000",
            uf: "SP",
            cidade: "São Paulo",
            cep: "01153000"
        }
    });

    const rafaela = await prisma.cliente.create({
        data: {
            nome_completo: "Rafaela Pereira dos Santos",
            cpf: "33333333333",
            data_nascimento: new Date("1998-09-21"),
            endereco: "Rua D, 000, Centro",
            email: "rafaela@email.com.br",
            telefone: "0000000000",
            uf: "SP",
            cidade: "São Paulo",
            cep: "01153000"
        }
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })