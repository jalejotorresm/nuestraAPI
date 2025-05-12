const express = require("express");
const {
  crearProducto,
  obtenerProductos,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controladores/controladorProducto");
const router = express.Router();

router.post("/productos", crearProducto);
router.get("/productos", obtenerProductos);
router.get("/productos/:id", obtenerProducto);
router.put("/productos/:id", actualizarProducto);
router.delete("/productos/:id", eliminarProducto);

module.exports = router;
