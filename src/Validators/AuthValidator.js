const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const login = validateRequest({
    body: z.object({
        email: z.string({required_error: "O email é obrigatorio"}).email("email invalido"),
        senha: z.string({required_error: "A senha é obrigatorio"}),
    }),
});

module.exports = {
    login,
};