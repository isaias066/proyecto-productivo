let Validaciones = [
    {id: 1, id_alerta: 1, id_usuario: 2, clasificacion: 'PENDIENTE_INVESTIGACION', comentarios: 'Se solicitó verificación adicional al cliente', accion_tomada: 'Contacto telefónico'},
    {id: 2, id_alerta: 2, id_usuario: 1, clasificacion: 'FALSO_POSITIVO', comentarios: 'El cliente confirmó que la transacción fue realizada por él', accion_tomada: 'Cierre de caso'},
    {id: 3, id_alerta: 3, id_usuario: 3, clasificacion: 'FRAUDE_CONFIRMADO', comentarios: 'Se identificó uso no autorizado de la cuenta', accion_tomada: 'Bloqueo de cuenta'},
    {id: 4, id_alerta: 4, id_usuario: 2, clasificacion: 'REQUIERE_CONTACTO_CLIENTE', comentarios: 'Se requiere validación adicional por parte del titular', accion_tomada: 'Envío de correo de verificación'},
    {id: 5, id_alerta: 5, id_usuario: 1, clasificacion: 'PENDIENTE_INVESTIGACION', comentarios: 'Caso en análisis por el equipo de fraude', accion_tomada: 'Escalado a supervisor'}
];

const getAllValidacion = (req, res) => {
    res.status(200).json({mensaje: "Validaciones consultadas", Validaciones});
};

const createValidacion = (req, res) => {
    const newValidacion = {
        id: Validaciones.length + 1,
        id_alerta: req.body.id_alerta,
        id_usuario: req.body.id_usuario,
        clasificacion: req.body.clasificacion,
        comentarios: req.body.comentarios,
        accion_tomada: req.body.accion_tomada,
    };
    Validaciones.push(newValidacion);
    res.status(201).json({mensaje: "Validación creada", Validacion: newValidacion});
};

const updateValidacion = (req, res) => {
    const id = parseInt(req.params.id);
    const Validacion = Validaciones.find(l => l.id === id);
    if (!Validacion) {
        return res.status(404).json({mensaje: "Validación no encontrada"});
    };
    Validacion.clasificacion = req.body.clasificacion || Validacion.clasificacion;
    Validacion.comentarios = req.body.comentarios || Validacion.comentarios;
    Validacion.accion_tomada = req.body.accion_tomada || Validacion.accion_tomada;

    res.status(200).json({mensaje: "Validación actualizada", Validacion})
};

const deleteValidacion = (req, res) => {
    const id = parseInt(req.params.id);
    Validaciones = Validaciones.filter(l => l.id !== id);
    res.status(200).json ({mensaje: "Validación eliminada" });
};

module.exports = {
    getAllValidacion,
    createValidacion,
    updateValidacion,
    deleteValidacion
};
