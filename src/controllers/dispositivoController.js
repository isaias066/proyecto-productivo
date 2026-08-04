let Dispositivos = [
    {id: 1, id_cliente: 1, tipo_dispositivo: 'movil', identificador_unico: 'DEV-0001-ABC', sistema_operativo: 'Android 14', navegador: 'Chrome Mobile'},
    {id: 2, id_cliente: 2, tipo_dispositivo: 'escritorio', identificador_unico: 'DEV-0002-XYZ', sistema_operativo: 'Windows 11', navegador: 'Edge'},
    {id: 3, id_cliente: 3, tipo_dispositivo: 'movil', identificador_unico: 'DEV-0003-QWE', sistema_operativo: 'iOS 18', navegador: 'Safari Mobile'},
{id: 4, id_cliente: 4, tipo_dispositivo: 'tablet', identificador_unico: 'DEV-0004-RTY', sistema_operativo: 'iPadOS 18', navegador: 'Safari'},
{id: 5, id_cliente: 5, tipo_dispositivo: 'escritorio', identificador_unico: 'DEV-0005-UIO', sistema_operativo: 'macOS Sonoma', navegador: 'Chrome'}
];

const getAllDispositivo = (req, res) => {
    res.status(200).json({mensaje: "Dispositivos consultados", Dispositivos});
};

const createDispositivo = (req, res) => {
    const newDispositivo = {
        id: Dispositivos.length + 1,
        id_cliente: req.body.id_cliente,
        tipo_dispositivo: req.body.tipo_dispositivo,
        identificador_unico: req.body.identificador_unico,
        sistema_operativo: req.body.sistema_operativo,
        navegador: req.body.navegador,
    };
    Dispositivos.push(newDispositivo);
    res.status(201).json({mensaje: "Dispositivo creado", Dispositivo: newDispositivo});
};

const updateDispositivo = (req, res) => {
    const id = parseInt(req.params.id);
    const Dispositivo = Dispositivos.find(l => l.id === id);
    if (!Dispositivo) {
        return res.status(404).json({mensaje: "Dispositivo no encontrado"});
    };
    Dispositivo.tipo_dispositivo = req.body.tipo_dispositivo || Dispositivo.tipo_dispositivo;
    Dispositivo.sistema_operativo = req.body.sistema_operativo || Dispositivo.sistema_operativo;
    Dispositivo.navegador = req.body.navegador || Dispositivo.navegador;

    res.status(200).json({mensaje: "Dispositivo actualizado", Dispositivo})
};

const deleteDispositivo = (req, res) => {
    const id = parseInt(req.params.id);
    Dispositivos = Dispositivos.filter(l => l.id !== id);
    res.status(200).json ({mensaje: "Dispositivo eliminado" });
};

module.exports = {
    getAllDispositivo,
    createDispositivo,
    updateDispositivo,
    deleteDispositivo
};
