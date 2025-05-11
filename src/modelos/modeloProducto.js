const mongoose = require("mongoose");

const esquemaProducto = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: String, required: true },
});

module.exṕorts = mongoose.model("Producto", esquemaProducto);
