let Logs = [
    {id: 1, id_usuario: 1, tipo_accion: 'LOGIN', entidad_afectada: 'usuarios_sistemas', descripcion: 'Inicio de sesión exitoso', direccion_ip: '190.85.10.22'},
    {id: 2, id_usuario: 2, tipo_accion: 'CONSULTA', entidad_afectada: 'transacciones', descripcion: 'Consulta de historial de transacciones', direccion_ip: '190.60.44.11'},
    {id: 3, id_usuario: 1, tipo_accion: 'ACTUALIZACION', entidad_afectada: 'clientes', descripcion: 'Actualización de datos de contacto del cliente', direccion_ip: '200.10.5.3'},
    {id: 4, id_usuario: 3, tipo_accion: 'LOGOUT', entidad_afectada: 'usuarios_sistemas', descripcion: 'Cierre de sesión del usuario', direccion_ip: '190.85.10.22'},
    {id: 5, id_usuario: 2, tipo_accion: 'ELIMINACION', entidad_afectada: 'alertas', descripcion: 'Eliminación de alerta descartada', direccion_ip: '190.60.44.11'}
];

const getAllLog = (req, res) => {
    res.status(200).json({mensaje: "Logs consultados", Logs});
};

const createLog = (req, res) => {
    const newLog = {
        id: Logs.length + 1,
        id_usuario: req.body.id_usuario,
        tipo_accion: req.body.tipo_accion,
        entidad_afectada: req.body.entidad_afectada,
        descripcion: req.body.descripcion,
        direccion_ip: req.body.direccion_ip,
    };
    Logs.push(newLog);
    res.status(201).json({mensaje: "Log creado", Log: newLog});
};

const updateLog = (req, res) => {
    res.status(403).json({mensaje: "Los logs de auditoría no se pueden modificar"});
};

const deleteLog = (req, res) => {
    res.status(403).json({mensaje: "Los logs de auditoría no se pueden eliminar"});
};

module.exports = {
    getAllLog,
    createLog,
    updateLog,
    deleteLog
};
