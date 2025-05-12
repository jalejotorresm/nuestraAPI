const Usuario = require("../modelos/modeloUsuario");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// Controlador para crear un nuevo usuario (POST)
exports.crearUsuario = async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body;

    if (!nombre || !correo || !contraseña) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }

    const nuevoUsuario = new Usuario({
      nombre,
      correo,
      contraseña,
    });

    await nuevoUsuario.save();
    res
      .status(201)
      .json({ mensaje: "Usuario creado correctamente", usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para autenticar un usuario (POST)
exports.autenticarUsuario = async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    if (!correo || !contraseña) {
      return res
        .status(400)
        .json({ error: "Correo y contraseña son obligatorios" });
    }

    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    if (usuario.contraseña !== contraseña) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ mensaje: "Autenticación exitosa", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todos los usuarios (GET)
exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener un usuario por ID (GET)
exports.obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar un usuario por ID (PUT)
exports.actualizarUsuario = async (req, res) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!usuarioActualizado) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json({
      mensaje: "Usuario actualizado exitosamente",
      usuario: usuarioActualizado,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para eliminar un usuario por ID (DELETE)
exports.eliminarUsuario = async (req, res) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioEliminado) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json({
      mensaje: "Usuario eliminado exitosamente",
      usuario: usuarioEliminado,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
