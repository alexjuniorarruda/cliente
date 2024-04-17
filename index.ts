require("dotenv").config();

import express from "express";
import clienteRouter from "./src/routes/clienteRouter";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/clientes", clienteRouter);

app.listen(3000, () => {
    console.log("O Servidor está rodando!");
});