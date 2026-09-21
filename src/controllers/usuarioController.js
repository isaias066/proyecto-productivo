// NOTA DE SEGURIDAD: todos los usuarios de ejemplo comparten la misma
// contraseña de prueba "TriDa2026" (ya hasheada con bcrypt, 10 salt rounds)
// solo para poder iniciar sesión durante el desarrollo. En un entorno real
// cada usuario tendría su propio hash generado al registrarse.
const PASSWORD_DEMO_HASH = '$2b$10$.VH1PKAeB/MxBXkNKol0AeGwxWRmLGGQxz3XPR/QkIEM9Ure.kpba';

let Usuarios = [
    {id: 1, nombre_completo: 'Andrea Torres', email: 'andrea.torres@trida.com', password: PASSWORD_DEMO_HASH, rol: 'ADMINISTRADOR'},
    {id: 2, nombre_completo: 'Julián Ramírez', email: 'julian.ramirez@trida.com', password: PASSWORD_DEMO_HASH, rol: 'ANALISTA'},
    {id: 3, nombre_completo: 'Camila Herrera', email: 'camila.herrera@trida.com', password: PASSWORD_DEMO_HASH, rol: 'OPERADOR'},
    {id: 4, nombre_completo: 'Felipe Castaño', email: 'felipe.castano@trida.com', password: PASSWORD_DEMO_HASH, rol: 'AUDITOR'},
    {id: 5, nombre_completo: 'Natalia Vargas', email: 'natalia.vargas@trida.com', password: PASSWORD_DEMO_HASH, rol: 'ADMINISTRADOR'}
];

const getAllUsuario = (req, res) => {
    // Nunca se devuelve el hash de la contraseña en las respuestas
    const usuariosSinPassword = Usuarios.map(({ password, ...resto }) => resto);
    res.status(200).json({mensaje: "Usuarios consultados", Usuarios: usuariosSinPassword});
};

const createUsuario = (req, res) => {
    const newUsuario = {
        id: Usuarios.length + 1,
        nombre_completo: req.body.nombre_completo,
        email: req.body.email,
        rol: req.body.rol,
    };
    Usuarios.push(newUsuario);
    res.status(201).json({mensaje: "Usuario creado", Usuario: newUsuario});
};

const updateUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const Usuario = Usuarios.find(l => l.id === id);
    if (!Usuario) {
        return res.status(404).json({mensaje: "Usuario no encontrado"});
    };
    Usuario.nombre_completo = req.body.nombre_completo || Usuario.nombre_completo;
    Usuario.email = req.body.email || Usuario.email;
    Usuario.rol = req.body.rol || Usuario.rol;

    res.status(200).json({mensaje: "Usuario actualizado", Usuario})
};

const deleteUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    Usuarios = Usuarios.filter(l => l.id !== id);
    res.status(200).json ({mensaje: "Usuario eliminado" });
};

module.exports = {
    getAllUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    Usuarios // se exporta para que authController pueda buscar/crear usuarios
};

