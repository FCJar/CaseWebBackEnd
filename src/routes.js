const {Router} = require ("express");
const UsuarioController = require("./Controlers/UsuarioController");
const SessoesController = require("./Controlers/SessoesController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const SessoesValidator = require("./Validators/SessoesValidator");
const AuthController = require("./Controlers/AuthController");
const AuthValidator = require("./Validators/AuthValidator");
const verificarJwt = require("./Middlewares/verificarJwt");
const verificarUsuario = require("./Middlewares/verificarUsuario");

const rotas = Router();

//usuario
rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create)
rotas.get('/usuarios', verificarJwt, UsuarioController.read)
rotas.delete('/usuarios/:id', verificarJwt, verificarUsuario, UsuarioValidator.destroy, UsuarioController.delete)
rotas.put('/usuarios/:id', verificarJwt, verificarUsuario, UsuarioValidator.update, UsuarioController.update)

//sessoes
rotas.post('/sessoes', verificarJwt, verificarUsuario, SessoesValidator.create, SessoesController.create);
rotas.get('/sessoes', verificarJwt, SessoesController.read);
rotas.delete('/sessoes/:id_usuario', verificarJwt, verificarUsuario, SessoesValidator.destroy, SessoesController.delete)
//rotas.put('/sessoes/:id', verificaJwt, SessoesValidator.update,SessoesController.update)

//AUTH
rotas.post("/login", AuthValidator.login, AuthController.login)

module.exports = rotas ;