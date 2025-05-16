const {Router} = require ("express");
const UsuarioControler = require("./Controlers/UsuarioControlers");
const SessoesControler = require("./Controlers/SessoesControlers");

const rotas = Router();

//usuario
rotas.post('/usuarios', UsuarioControler.create)
rotas.get('/usuarios',UsuarioControler.read)
rotas.delete('/usuarios/:id',UsuarioControler.delete)
rotas.put('/usuarios/:id', UsuarioControler.update)

//sessoes
rotas.post('/sessoes',SessoesControler.create);
rotas.get('/sessoes',SessoesControler.read);
rotas.delete('/sessoes/:id',SessoesControler.delete)
rotas.put('/sessoes/:id',SessoesControler.update)

module.exports = rotas ;