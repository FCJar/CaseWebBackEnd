const SessoesModel = require("../Models/SessoesModel");

class SessoesControler  {
    async create(req, res){
        const sessoes = await SessoesModel.create(req.body);
        
        return res.status(200).json(sessoes);
    }

    async read(req, res){
        const sessoes = await SessoesModel.find().populate('id_usuario','-senha');
        
        return res.status(200).json(sessoes);

    }

    async update(req, res){
        const { id } = req.params;

        const sessao = await SessoesModel.findByIdAndUpdate(id, req.body)
        
        if(!sessao) {
            return res.status(404).json({"mensagem" : "Sessão não encontrada"});
        }else{
            return res.status(200).json({"mensagem" : "Sessão Atualizada com Sucesso"});
        }
    }   

    async delete(req, res){

        const { id } = req.params
        
        const sessoes = await SessoesModel.findByIdAndDelete(id);

        if(!sessoes){
            return res.status(404).json({"mensagem" : "Sessão não encontrada"});
        }else{
            return res.status(200).json({"mensagem" : "Sessão Deletado com Sucesso"});
        }
        


    }
}

module.exports = new SessoesControler();