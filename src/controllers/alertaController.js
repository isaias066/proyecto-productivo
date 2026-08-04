let Alertas = [
    {id: 1, id_transaccion: 1, nivel_criticidad: 'MEDIA', factores_sospechosos: 'Cambio de dispositivo y ubicación inusual', estado_alerta: 'ACTIVA', prioridad: 5},
    {id: 2, id_transaccion: 2, nivel_criticidad: 'BAJA', factores_sospechosos: 'Ubicación inusual', estado_alerta: 'ACTIVA', prioridad: 2},
    {id: 3, id_transaccion: 3, nivel_criticidad: 'ALTA', factores_sospechosos: 'Cambio de ubicación extremo y dispositivo diferente', estado_alerta: 'ACTIVA', prioridad: 10},
    {id: 4, id_transaccion: 4, nivel_criticidad: 'MEDIA', factores_sospechosos: 'Cambio de dispositivo', estado_alerta: 'ACTIVA', prioridad: 6},
    {id: 5, id_transaccion: 5, nivel_criticidad: 'BAJA', factores_sospechosos: 'Dispositivo inusual', estado_alerta: 'ACTIVA', prioridad: 3}
];

const getAllAlerta = (req, res) => {
    res.status(200).json({mensaje: "Alertas consultadas", Alertas});
};

const createAlerta = (req, res) => {
    const newAlerta = {
        id: Alertas.length + 1,
        id_transaccion: req.body.id_transaccion,
        nivel_criticidad: req.body.nivel_criticidad,
        factores_sospechosos: req.body.factores_sospechosos,
        estado_alerta: 'ACTIVA',
        prioridad: req.body.prioridad,
    };
    Alertas.push(newAlerta);
    res.status(201).json({mensaje: "Alerta creada", Alerta: newAlerta});
};

const updateAlerta = (req, res) => {
    const id = parseInt(req.params.id);
    const Alerta = Alertas.find(l => l.id === id);
    if (!Alerta) {
        return res.status(404).json({mensaje: "Alerta no encontrada"});
    };
    Alerta.nivel_criticidad = req.body.nivel_criticidad || Alerta.nivel_criticidad;
    Alerta.estado_alerta = req.body.estado_alerta || Alerta.estado_alerta;
    Alerta.prioridad = req.body.prioridad || Alerta.prioridad;

    res.status(200).json({mensaje: "Alerta actualizada", Alerta})
};

const deleteAlerta = (req, res) => {
    const id = parseInt(req.params.id);
    Alertas = Alertas.filter(l => l.id !== id);
    res.status(200).json ({mensaje: "Alerta eliminada" });
};

module.exports = {
    getAllAlerta,
    createAlerta,
    updateAlerta,
    deleteAlerta
};
