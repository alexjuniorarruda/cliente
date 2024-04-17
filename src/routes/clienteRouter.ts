import { Router } from "express";
import ClienteController from "../controllers/ClienteController";
import { validate } from "../middleware/handleValidations";
import { clienteValidation } from "../middleware/clienteValidations";

const router = Router();

router.post("/", clienteValidation(), validate, ClienteController.criarCliente);
router.put("/:id", clienteValidation(), validate, ClienteController.atualizarCliente);
router.get("/:id", ClienteController.clientePorId);
router.get("/", ClienteController.todosOsClientes);
router.delete("/:id", ClienteController.excluirCliente);

export default router;