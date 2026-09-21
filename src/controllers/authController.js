const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuarios } = require('./usuarioController');

const registro = async (req, res) => {
    try {
        const { nombre_completo, email, password, rol = 'OPERADOR' } = req.body;

        if (!email || !password) {
            return res.status(400).json({ mensaje: 'Los campos "email" y "password" son obligatorios' });
        }

        const usuarioExiste = Usuarios.find(u => u.email === email);
        if (usuarioExiste) {
            return res.status(400).json({ mensaje: 'Ya existe un usuario registrado con ese email' });
        }

        // Hash de la contraseña (10 salt rounds)
        const passwordHash = await bcrypt.hash(password, 10);

        const nuevoUsuario = {
            id: Usuarios.length + 1,
            nombre_completo,
            email,
            password: passwordHash,
            rol // "ADMINISTRADOR", "ANALISTA", "OPERADOR" o "AUDITOR"
        };

        Usuarios.push(nuevoUsuario);

        // Nunca se devuelve el hash en la respuesta
        const { password: _omit, ...usuarioSinPassword } = nuevoUsuario;
        res.status(201).json({ mensaje: 'Usuario registrado con éxito', Usuario: usuarioSinPassword });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar usuario' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const usuario = Usuarios.find(u => u.email === email);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        const esCorrecta = await bcrypt.compare(password, usuario.password);
        if (!esCorrecta) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email, rol: usuario.rol },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ mensaje: 'Inicio de sesión exitoso', token });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

module.exports = { registro, login };

