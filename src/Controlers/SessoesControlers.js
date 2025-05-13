const SessoesModel = require("../Models/SessoesModel");

class SessoesControler  {
    async create(req, res){
        const sessoes = await SessoesModel.create(req.body);
        
        return res.status(200).json(sessoes);
    }

    async read(req, res){
        const sessoes = await SessoesModel.find();
        
        return res.status(200).json(usuarios);

    }

    update(req, res){
        
    }

    async delete(req, res){

        const { id } = req.params
        
        await SessoesModel.findByIdAndDelete(id);
        
        return res.status(200).json({"mensagem" : "Sessão Deletado com Sucesso"});

    }
}

module.exports = new SessoesControler();