const Servicio = require("../modelos/modeloServicio");

// Controlador para crear un nuevo servicio (POST)
exports.crearServicio = async (req, res) => {
  try {
    const nuevoServicio = new Servicio(req.body);
    await nuevoServicio.save();
    res.status(201).json({ mensaje: "Servicio creado exitosamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obtener un servicio por ID (GET)
exports.obtenerServicio = async (req, res) => {
  try {
    const servicio = await Servicio.findById(req.params.id);
    if (!servicio) {
      return res.status(404).json({ error: "Servicio no encontrado" });
    }
    res.json(servicio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todos los servicios (GET)
exports.obtenerServicios = async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar un servicio por ID (PUT)
exports.actualizarServicio = async (req, res) => {
  try {
    const servicioActualizado = await Servicio.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!servicioActualizado) {
      return res.status(404).json({ error: "Servicio no encontrado" });
    }
    res.status(200).json({
      mensaje: "Servicio actualizado exitosamente",
      servicioActualizado,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para eliminar un servicio por ID (DELETE)
exports.eliminarServicio = async (req, res) => {
  try {
    const servicioEliminado = await Servicio.findByIdAndDelete(req.params.id);
    if (!servicioEliminado) {
      return res.status(404).json({ error: "Servicio no encontrado" });
    }
    res
      .status(200)
      .json({ mensaje: "Servicio eliminado exitosamente", servicioEliminado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
