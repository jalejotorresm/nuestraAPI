const mongoose = require("mongoose");

const esquemaServicio = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: String, required: true },
});

module.exṕorts = mongoose.model("Servicio", esquemaServicio);
