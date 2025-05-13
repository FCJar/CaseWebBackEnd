const {Router} = require ("express");
const UsuarioControler = require("./Controlers/UsuarioControlers");
const SessoesControler = require("./Controlers/SessoesControlers");

const rotas = Router();

rotas.post('/usuarios', UsuarioControler.create)
rotas.get('/usuarios',UsuarioControler.read)
rotas.delete('/usuarios/:id',UsuarioControler.delete)


module.exports = rotas ;