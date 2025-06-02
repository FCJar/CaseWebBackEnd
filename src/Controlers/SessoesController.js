const SessoesModel = require("../Models/SessoesModel");
const UsuarioModel = require("../Models/UsuarioModel")

class SessoesControler  {
    async create(req, res){
        try {
            const usuarioEncontrado = await UsuarioModel.findById(
                req.body.id_usuario
            );
            if(!usuarioEncontrado){
                res.status(404).json({ message : "Usuario não encontrado" });
            }
            const sessoes = await SessoesModel.create(req.body);
            res.status(200).json(sessoes);
        } catch(error) {
            res.status(500).json({message: "Controler Error", error: error.message});
        }       
        return res;
    }

    async read(req, res){
        try {
            const sessoes = await SessoesModel.find().populate('id_usuario','-senha');
            res.status(200).json(sessoes)
        } catch(error) { 
            res.status(500).json({message: "Controler Error", error: error.message});
        }
        return res;
    }

    async update(req, res){
        try {
            const { id } = req.params;
            const sessao = await SessoesModel.findByIdAndUpdate(id, req.body)
            if(!sessao) {
                res.status(404).json({"mensagem" : "Sessão não encontrada"});
            }else{
                res.status(200).json({"mensagem" : "Sessão Atualizada com Sucesso"});
            }
        } catch(error) {
            res.status(500).json({message: "Controler Error", error: error.message});
        }
        return res;
    }   

    async delete(req, res){
        try {
            const { id_usuario } = req.params
            const sessoes = await SessoesModel.findOne({
                id_usuario,
            });
            await sessoes.deleteOne();
            if(!sessoes){
                res.status(404).json({"mensagem" : "Sessão não encontrada"});
            }else{
                res.status(200).json({"mensagem" : "Sessão Deletado com Sucesso"});
            }
            
        } catch(error) {
            res.status(500).json({message: "Controler Error", error: error.message});
        }
        return res;
    }
}

module.exports = new SessoesControler();