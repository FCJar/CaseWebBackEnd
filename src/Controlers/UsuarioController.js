const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioControler  {
    async create(req, res){
        try {
            const usuario = await UsuarioModel.create(req.body);
            const { senha, ...novoUsuario } = usuario.toObject();
            res.status(200).json(novoUsuario);
        } catch(error) {
            res.status(500).json({message: "Controler Error", error: error.message});
        }
        return res;
    }

    async read(req, res){
        try {
            const usuarios = await UsuarioModel.find();
            res.status(200).json(usuarios);
        } catch(error) {
            res.status(500).json({message: "Controler Error", error: error.message});
        }
        return res;

    }

    async update(req, res){
        try {
            const { id } = req.params;
            const usuario = await UsuarioModel.findByIdAndUpdate(id,req.body)
            if(!usuario){
                res.status(404).json({"mensagem" : "Usuario não encontrado"});
            }else{
                res.status(200).json({"mensagem" : "Usuario Atualizada com Sucesso"});
            }
        } catch(error) {
            res.status(500).json({message: "Controler Error", error: error.message});
        }
        return res;
    }

    async delete(req, res){
        try {
            const { id } = req.params;
            const usuario = await UsuarioModel.findByIdAndDelete(id);
            if(!usuario){
                res.status(404).json({"mensagem" : "Usuario não encontrado"});
            }else{
                res.status(200).json({"mensagem" : "Usuario Deletado com Sucesso"});
            }
        } catch(error) {
            res.status(500).json({message: "Controler Error", error: error.message});
        } 
        return res;
    }
}

module.exports = new UsuarioControler();