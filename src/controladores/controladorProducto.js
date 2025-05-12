const Producto = require("../modelos/modeloProducto");

// Controlador para crear un nuevo producto (POST)
exports.crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json({ mensaje: "Producto creado exitosamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obtener un producto por ID (GET)
exports.obtenerProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todos los productos (GET)
exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar un producto por ID (PUT)
exports.actualizarProducto = async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!productoActualizado) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res
      .status(200)
      .json({
        mensaje: "Producto actualizado exitosamente",
        productoActualizado,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para eliminar un producto por ID (DELETE)
exports.eliminarProducto = async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoEliminado) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res
      .status(200)
      .json({ mensaje: "Producto eliminado exitosamente", productoEliminado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
