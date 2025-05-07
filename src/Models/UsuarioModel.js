const moongose = require("mongoose");

const Schema = Mongoose.Schema;

const UsuarioSchema = new Schema({
    email : String,
    senha : String,
    nome : String,
    cargo : String,
    status : String
}) 

const UsuarioModel = Mongoose.model('usuarios', UsuarioSchema);

module.exports = UsuarioModel