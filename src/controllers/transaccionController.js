let Transacciones = [
    {id: 1, id_cliente: 1, id_dispositivo: 1, id_ubicacion: 1, id_banco: 2, tipo_transaccion: 'TRANSFERENCIA', monto: 450000, cuenta_origen: '00112233445', cuenta_destino: '00998877665', estado_transaccion: 'APROBADA', canal: 'mobile'},
    {id: 2, id_cliente: 2, id_dispositivo: 2, id_ubicacion: 2, id_banco: 3, tipo_transaccion: 'PAGO', monto: 150000, cuenta_origen: '00223344556', cuenta_destino: '00887766554', estado_transaccion: 'PENDIENTE', canal: 'web'},
    {id: 3, id_clinte: 3, id_dispositivo: 3, id_ubicacion: 3, id_banco: 4, tipo_transaccion: 'RETIRO', monto: 300000, cuenta_origen: '00334455667', cuenta_destino: '00776655443', estado_transaccion: 'ALERTADA', canal: 'atm'},
    {id: 4, id_cliente: 4, id_dispositivo: 4, id_ubicacion: 4, id_banco: 5, tipo_transaccion: 'TRANSFERENCIA', monto: 980000, cuenta_origen: '00445566778', cuenta_destino: '00665544332', estado_transaccion: 'BLOQUEADA', canal: 'pos'},
    {id: 5, id_cliente: 5, id_dispositivo: 5, id_ubicacion: 5, id_banco: 2, tipo_transaccion: 'PAGO', monto: 220000, cuenta_origen: '00556677889', cuenta_destino: '00554433221', estado_transaccion: 'APROBADA', canal: 'branch'}
];

const getAllTransaccion = (req, res) => {
    res.status(200).json({mensaje: "Transacciones consultadas", Transacciones});
};

const createTransaccion = (req, res) => {
    const newTransaccion = {
        id: Transacciones.length + 1,
        id_cliente: req.body.id_cliente,
        id_dispositivo: req.body.id_dispositivo,
        id_ubicacion: req.body.id_ubicacion,
        id_banco: req.body.id_banco,
        tipo_transaccion: req.body.tipo_transaccion,
        monto: req.body.monto,
        cuenta_origen: req.body.cuenta_origen,
        cuenta_destino: req.body.cuenta_destino,
        estado_transaccion: 'PENDIENTE',
        canal: req.body.canal,
    };
    Transacciones.push(newTransaccion);
    res.status(201).json({mensaje: "Transacción creada", Transaccion: newTransaccion});
};

const updateTransaccion = (req, res) => {
    const id = parseInt(req.params.id);
    const Transaccion = Transacciones.find(l => l.id === id);
    if (!Transaccion) {
        return res.status(404).json({mensaje: "Transacción no encontrada"});
    };
    Transaccion.estado_transaccion = req.body.estado_transaccion || Transaccion.estado_transaccion;
    Transaccion.monto = req.body.monto || Transaccion.monto;

    res.status(200).json({mensaje: "Transacción actualizada", Transaccion})
};

const deleteTransaccion = (req, res) => {
    const id = parseInt(req.params.id);
    Transacciones = Transacciones.filter(l => l.id !== id);
    res.status(200).json ({mensaje: "Transacción eliminada" });
};

module.exports = {
    getAllTransaccion,
    createTransaccion,
    updateTransaccion,
    deleteTransaccion
};
