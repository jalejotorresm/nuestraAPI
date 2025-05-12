const express = require("express");
const {
  crearServicio,
  obtenerServicios,
  obtenerServicio,
  actualizarServicio,
  eliminarServicio,
} = require("../controladores/controladorServicio");
const router = express.Router();

router.post("/servicios", crearServicio);
router.get("/servicios", obtenerServicios);
router.get("/servicios/:id", obtenerServicio);
router.put("/servicios/:id", actualizarServicio);
router.delete("/servicios/:id", eliminarServicio);

module.exports = router;
