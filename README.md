# Cliente

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/alexjuniorarruda/Accounts/blob/main/LICENSE)

 Nessa aplicação é possivel fazer o cadastro de clientes, nela eu faço a validação dos dados com express-validator, e para cadastrar as informações de **Estado** e **Cidade** eu uso a 
 API [ViaCEP](https://viacep.com.br/) fazendo as requisições via [axios](https://axios-http.com/ptbr/).

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

- Renomear o arquivo .env.example para .env e colocar as sequintes informações (DB_USER, DB_PASSWORD e DB_HOST fica a critério)
  
```
DB_NAME=livrariadb
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
```

- Criar o banco de dados com o comando
  
```
npx sequelize-cli db:create
```

- Executar o projeto
  
```
npm start
```

# Autor

Alex Junior Arruda

https://www.linkedin.com/in/alex-jr-arruda/
