import { body } from "express-validator";

export const clienteValidation = () => {
    return [
        body("nome_completo")
            .isString()
            .withMessage("Não pode ser número.")
            .notEmpty()
            .withMessage("É obrigatório."),
        body("cpf")
            .notEmpty()
            .withMessage("O cpf é obrigatório.")
            .isLength({ min: 11, max: 11 })
            .withMessage("O Cpf deve ter apenas 11 dígitos."),
        body("data_nascimento")
            .notEmpty()
            .withMessage("A Data de Nascimento é obrigatória."),
        body("logradouro")
            .notEmpty()
            .withMessage("O logradoutro é obrigatório."),
        body("numero_logradouro")
            .notEmpty()
            .withMessage("O númeo do logradouro é obrigatório."),
        body("bairro")
            .notEmpty()
            .withMessage("O nome do bairro é obrigatório."),
        body("email")
            .isEmail()
            .withMessage("Insira um endereço de e-mail válido."),
        body("telefone")            
            .isLength({ min: 10, max: 11 })
            .withMessage("O número de telefone deve ter entre 10 e 11 dígitos."),
        body("cep")
            .isLength({ min: 8, max: 8 })            
            .withMessage("O Cep deve ter apenas 8 dígitos.")
    ]
}