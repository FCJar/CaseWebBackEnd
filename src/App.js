const express = require("express");
const rotas = require("./routes");
const startDB = require("./Loaders/mongodb");

startDB();

const app = express();

app.use(express.json());

app.use(rotas);

app.listen(8000, () => console.log("Servidor Rodando!"));

//app.use(express.urlencoded({exten: true}));
//app.use(express.json());
//app.use(cors());



/*
app.use("*",(req, res) => {
  res.status(404).json({message: `Rota'${req.baseUrl}' não encontrada `})
});


module.exports = app;


/*

/*
app.use(rotas);




app.get("", (req, res) => {
   return res.json({
    message : "Hello World!"
   })
})

app.get("/cadastro", (req, res) => {
  return res.json({
    message: "Função de cadastro"
  })
})

app.get("/login", (req, res) => {
  return res.json({
    message: "Função de login"
  })
})

app.get("/home", (req, res) => {
  return res.json({
    message: "Função de home"
  })
})
*/


