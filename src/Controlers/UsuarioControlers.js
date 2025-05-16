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

    async update(req, res){
        const { id } = req.params;

        const usuario = await UsuarioModel.findByIdAndUpdate(id,req.body)
        
        if(!usuario){
            return res.status(404).json({"mensagem" : "Usuario não encontrado"});
        }else{
            return res.status(200).json({"mensagem" : "Usuario Atualizada com Sucesso"});
        }
    }

    async delete(req, res){

        const { id } = req.params;

        const usuario = await UsuarioModel.findByIdAndDelete(id);
        
        if(!usuario){
            return res.status(404).json({"mensagem" : "Usuario não encontrado"});
        }else{
            return res.status(200).json({"mensagem" : "Dados de Usuario Deletado com Sucesso"});
        }
        

    }
}

module.exports = new UsuarioControler();