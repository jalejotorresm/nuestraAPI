const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const esquemaUsuario = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
});

// Encriptamiento de contraseña antes de guardar
esquemaUsuario.pre("save", async function (next) {
  if (!this.isModified("contraseña")) return next();
  const salt = await bcrypt.genSalt(10);
  this.contrasena = await bcrypt.hash(this.contrasena, salt);
  next();
});

module.exports = mongoose.model("Usuario", esquemaUsuario);
