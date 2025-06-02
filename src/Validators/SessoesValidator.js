const {default: mongoose} = require("mongoose");
const { z } = require ("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        id_usuario: z.custom(mongoose.isValidObjectId, "A id do usuario não é valida"),
    }),
});

const destroy = validateRequest({
    params: z.object({
        id_usuario: z.custom(mongoose.isValidObjectId, "A id do ussuario não é valido"),
    }),
})
/*
const update = validateRequest({
        body: z.object({
             id_usuario: z.custom(mongoose.isValidObjectId, "A id do usuario não é valida"),
        }),
        params: z.object({
            id: z.custom(mongoose.isValidObjectId, "A id não é valida"),
        }),
})
*/

module.exports = {
    create,
    destroy,
    //update,
}