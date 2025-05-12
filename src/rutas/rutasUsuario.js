const express = require("express");
const {
  autenticarUsuario,
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  eliminarUsuario,
  actualizarUsuario,
} = require("../controladores/controladorUsuario");
const router = express.Router();

router.post("/usuarios/login", autenticarUsuario);
router.post("/usuarios", crearUsuario);
router.get("/usuarios", obtenerUsuarios);
router.get("/usuarios/:id", obtenerUsuario);
router.delete("/usuarios/:id", eliminarUsuario);
router.put("/usuarios/:id", actualizarUsuario);

module.exports = router;
