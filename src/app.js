const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const rutasUsuario = require("./rutas/rutasUsuario");
const rutasProducto = require("./rutas/rutasProducto");

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexion exitosa a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB: ", err));

app.use("/api", rutasUsuario);
app.use("/api", rutasProducto);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
