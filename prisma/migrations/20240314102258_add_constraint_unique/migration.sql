/*
  Warnings:

  - A unique constraint covering the columns `[cpf,email]` on the table `clientes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `clientes_cpf_key` ON `clientes`;

-- CreateIndex
CREATE UNIQUE INDEX `clientes_cpf_email_key` ON `clientes`(`cpf`, `email`);
