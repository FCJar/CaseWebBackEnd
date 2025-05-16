const express = require("express");
const rotas = require("./routes");
const cors = require("cors")

const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors())
app.use(rotas);
app.use("x", (req, re) =>{
    res.status(404).json({ message : `Rota '${req.baseUrl}' não encontrada`})
})


module.exports = app;



