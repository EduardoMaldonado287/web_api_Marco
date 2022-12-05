const express = require("express");
const app = express();
//para seguridad y poder obtener los datos del form de la página web
const cors = require("cors");
app.use(cors());
//para manejo e intercambio de informaicón en formato json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const upload = require("/.multer")

//para información estática
app.use(express.static("public"));
app.use(express.static("public/uploads"));


//agrega las variables de ambiente
const dotenv = require("dotenv");
dotenv.config();
//obtiene el puerto de la variable de ambiente
const port = process.env.PORT || 3005;

// database
require("./database.js");

app.get("/", (req, res) => {
  res.send("Pagina Principal Api nueva version");
});


app.use("/filtros/", require("./routes/filtros.routes.js"));

app.use("/obrasRA/", require("./routes/obrasRA.routes.js"));

app.use("/obrasGuardadas/", require("./routes/obrasGuardadas.routes.js"));


app.listen(port, () => {
  console.log("Escuchando del puerto " + port);
});
