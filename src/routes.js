const {Router} = require ("express");
const UsuarioControler = require("./Controlers/UsuarioControlers");
const SessoesControler = require("./Controlers/SessoesControlers");
const UsuarioValidator = require("./Validators/UsuarioValidators");
const SessoesValidator = require("./Validators/SessoesValidators");

const rotas = Router();

//usuario
rotas.post('/usuarios', UsuarioValidator.create, UsuarioControler.create)
rotas.get('/usuarios', UsuarioControler.read)
rotas.delete('/usuarios/:id', UsuarioValidator.destroy, UsuarioControler.delete)
rotas.put('/usuarios/:id', UsuarioValidator.update, UsuarioControler.update)

//sessoes
rotas.post('/sessoes', SessoesValidator.create, SessoesControler.create);
rotas.get('/sessoes', SessoesControler.read);
rotas.delete('/sessoes/:id', SessoesValidator.destroy, SessoesControler.delete)
rotas.put('/sessoes/:id', SessoesValidator.update,SessoesControler.update)

module.exports = rotas ;