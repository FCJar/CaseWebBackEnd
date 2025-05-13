const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SessoesSchema = new Schema({
    id_usuario : {
        type : Schema.Type.ObjectId,
        ref : 'usuarios'
    }
    },{
    Timestamp : true
})

const SessoesModel = mongoose.model('sessoes',SessoesSchema);

module.exports = SessoesModel;