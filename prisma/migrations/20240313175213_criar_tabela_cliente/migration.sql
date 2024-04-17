-- CreateTable
CREATE TABLE `clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_completo` VARCHAR(255) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `data_nascimento` DATETIME(3) NOT NULL,
    `endereco` VARCHAR(255) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `telefone` VARCHAR(11) NOT NULL,
    `uf` VARCHAR(2) NOT NULL,
    `cidade` VARCHAR(150) NOT NULL,
    `cep` VARCHAR(8) NOT NULL,

    UNIQUE INDEX `clientes_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
