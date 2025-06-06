const { z } = require ("zod");
const { validateRequest } = require("zod-express-middleware");
const mongoose = require("mongoose");

const create = validateRequest({
    body: z.object({
        nome: z.string({required_error: "O nome é obrigatorio"}),
        email: z.string({required_error: "O email é obrigatorio"}).email("email invalido"),
        senha: z.string({required_error: "A senha é obrigatorio"}),
        cargo: z.string({required_error: "O cargo é obrigatorio"}),
        status: z.string({required_error: "O status é obrigatorio"}),
    }),
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "A id não é valida"),

    }),

});

const update = validateRequest({
    body: z.object({
        nome: z.string().optional(),
        email: z.string().email().optional(),
        senha: z.string().optional(),
        cargo: z.string().optional(),
        status: z.string().optional(),
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "A id não é valida"),
    }),
})

module.exports = {
    create,
    destroy,
    update
};