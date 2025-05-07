const { Timestamp } = require("mongodb");
const moongose = require("mongoose");

const Schema = Mongoose.Schema;

const SessoesSchema =new Schema({
    id_usuario : {
        type : Schema.Type.ObjectId,
        ref : 'usuarios'
    }
    },{
    Timestamp : true
})

const SessoesModel = moongoose.model('sessoes',SessoesSchema);

module.exports = SessoesModel