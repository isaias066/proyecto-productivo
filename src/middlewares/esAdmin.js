function esAdmin(req, res, next) {
    // req.usuario ya viene inyectado por verificarToken
    if (req.usuario && req.usuario.rol === 'ADMINISTRADOR') {
        return next();
    }
    return res.status(403).json({ mensaje: 'Acceso denegado: se requiere rol ADMINISTRADOR' });
}

module.exports = esAdmin;

