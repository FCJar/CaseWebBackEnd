const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioControler  {
    async create(req, res){
        const usuario = await UsuarioModel.create(req.body);
        
        return res.status(200).json(usuario);
    }

    async read(req, res){
        const usuarios = await UsuarioModel.find();
        
        return res.status(200).json(usuarios);

    }

    update(req, res){
        
    }

    async delete(req, res){

        const { id } = req.params;

        const usuarios = await UsuarioModel.findByIdAndDelete(id);
        
        if(!usuarios){
            return res.status(404).json({"mensagem" : "Usuario não encontrado"});
        }else{
            return res.status(200).json({"mensagem" : "Usuario Deletado com Sucesso"});
        }


    }
}

module.exports = new UsuarioControler();