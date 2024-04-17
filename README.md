# Cliente

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/alexjuniorarruda/Accounts/blob/main/LICENSE)

 Nessa aplicação é possivel fazer o cadastro de clientes, o objetivo dessa aplicação foi praticar o [Typescript](https://www.typescriptlang.org/), e aprender um novo ORM que foi o 
 [Prisma](https://www.prisma.io/), consumir alguma API, no caso fiz uso da [ViaCEP](https://viacep.com.br/) junto com [Axios](https://axios-http.com/ptbr/) para puxar as informções de 
 Estado e Cidade.
 Abaixo na parte de rotas detalho um pouco mais do que foi feito.

 ### Tecnologias Utilizadas
 
 * [Nodejs](https://nodejs.org/en)
 * [MySQL](https://www.mysql.com/)
 * [Insomnia](https://insomnia.rest/)

## Dependências e Versões Necessárias

* @prisma/client: ^5.11.0
* axios: ^1.6.7
* dotenv: ^16.4.5
* express: ^4.18.3
* express-validator: ^7.0.1
* swagger-ui-express: ^5.0.0*

## Como rodar o projeto ✅

- Fazer download do repositório
- Abrir o projeto no terminal
- Instalar as dependencias com o comando
  
```
npm install
```

- Renomear o arquivo .env.example para .env e colocar as sequintes informações
  
```
DATABASE_URL="mysql://seu_usuario:seu_password@endereco_banco/clientedb"
```

- Criar o banco de dados com o comando, esse mesmo comando também roda o seed da aplicação e popula o banco com alguns dados
  
```
npx prisma migrate dev
```

- Executar o projeto
  
```
npm run dev
```

## 📌 Rotas

- Visão geral de toda a [documentação](http://localhost:3000/api-docs/), para gerar essa documentação eu usei o [Swagger UI](https://swagger.io/).

![Geral documentação](https://github.com/alexjuniorarruda/cliente/assets/112874423/11153965-45ac-4f7c-a933-076720a7c4ea)

A aplicação possui apenas uma rota, nela é possivel fazer o cadastro do cliente, como alterar, consultar e deletar o mesmo após cadastrado. No cadastro e na alteração é feita uma validação dos dados passados pelo usuário usando o express-validator, na busca pelo **Estado** e **Cidade** eu uso a API [ViaCEP](https://viacep.com.br/) fazendo as requisições via [axios](https://axios-http.com/ptbr/) aonde eu passo apenas o CEP.

### Schema

![Schema](https://github.com/alexjuniorarruda/cliente/assets/112874423/48de022e-ada4-4fe3-b06b-ef207bc7de6f)

### Rota Cliente

![Rota Cliente](https://github.com/alexjuniorarruda/cliente/assets/112874423/b1973bf6-ddec-4cf3-8277-ea9e4f609bb1)

# Autor

Alex Junior Arruda

https://www.linkedin.com/in/alex-jr-arruda/
