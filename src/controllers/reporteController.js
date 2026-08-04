let Reportes = [
    {id: 1, id_usuario_generador: 1, tipo_reporte: 'MENSUAL', fecha_inicio: '2026-07-01', fecha_fin: '2026-07-31', fraudes_detectados: 12, ruta_archivo: '/reportes/2026-07/reporte_mensual.pdf'},
    {id: 2, id_usuario_generador: 2, tipo_reporte: 'SEMANAL', fecha_inicio: '2026-07-27', fecha_fin: '2026-08-02', fraudes_detectados: 4, ruta_archivo: '/reportes/2026-07-27/reporte_semanal.pdf'},
    {id: 3, id_usuario_generador: 1, tipo_reporte: 'DIARIO', fecha_inicio: '2026-08-01', fecha_fin: '2026-08-01', fraudes_detectados: 1, ruta_archivo: '/reportes/2026-08-01/reporte_diario.pdf'},
    {id: 4, id_usuario_generador: 3, tipo_reporte: 'PERSONALIZADO', fecha_inicio: '2026-06-01', fecha_fin: '2026-06-30', fraudes_detectados: 9, ruta_archivo: '/reportes/personalizado/reporte_junio.pdf'},
    {id: 5, id_usuario_generador: 2, tipo_reporte: 'MENSUAL', fecha_inicio: '2026-06-01', fecha_fin: '2026-06-30', fraudes_detectados: 7, ruta_archivo: '/reportes/2026-06/reporte_mensual.pdf'}
];

const getAllReporte = (req, res) => {
    res.status(200).json({mensaje: "Reportes consultados", Reportes});
};

const createReporte = (req, res) => {
    const newReporte = {
        id: Reportes.length + 1,
        id_usuario_generador: req.body.id_usuario_generador,
        tipo_reporte: req.body.tipo_reporte,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
        fraudes_detectados: req.body.fraudes_detectados,
        ruta_archivo: req.body.ruta_archivo,
    };
    Reportes.push(newReporte);
    res.status(201).json({mensaje: "Reporte creado", Reporte: newReporte});
};

const updateReporte = (req, res) => {
    const id = parseInt(req.params.id);
    const Reporte = Reportes.find(l => l.id === id);
    if (!Reporte) {
        return res.status(404).json({mensaje: "Reporte no encontrado"});
    };
    Reporte.tipo_reporte = req.body.tipo_reporte || Reporte.tipo_reporte;
    Reporte.fraudes_detectados = req.body.fraudes_detectados || Reporte.fraudes_detectados;
    Reporte.ruta_archivo = req.body.ruta_archivo || Reporte.ruta_archivo;

    res.status(200).json({mensaje: "Reporte actualizado", Reporte})
};

const deleteReporte = (req, res) => {
    const id = parseInt(req.params.id);
    Reportes = Reportes.filter(l => l.id !== id);
    res.status(200).json ({mensaje: "Reporte eliminado" });
};

module.exports = {
    getAllReporte,
    createReporte,
    updateReporte,
    deleteReporte
};
