let Ubicaciones = [
    {id: 1, id_dispositivo: 1, direccion_ip: '190.85.10.22', pais: 'Colombia', ciudad: 'Medellín', latitud: 6.244203, longitud: -75.581212},
    {id: 2, id_dispositivo: 2, direccion_ip: '190.60.44.11', pais: 'Colombia', ciudad: 'Bogotá', latitud: 4.710989, longitud: -74.072092},
    {id: 3, id_dispositivo: 3, direccion_ip: '200.10.5.3', pais: 'Colombia', ciudad: 'Cali', latitud: 3.451647, longitud: -76.531985},
    {id: 4, id_dispositivo: 4, direccion_ip: '181.51.20.8', pais: 'Colombia', ciudad: 'Barranquilla', latitud: 10.968233, longitud: -74.781320},
    {id: 5, id_dispositivo: 5, direccion_ip: '186.30.15.44', pais: 'Colombia', ciudad: 'Bucaramanga', latitud: 7.119349, longitud: -73.122742}
];

const getAllUbicacion = (req, res) => {
    res.status(200).json({mensaje: "Ubicaciones consultadas", Ubicaciones});
};

const createUbicacion = (req, res) => {
    const newUbicacion = {
        id: Ubicaciones.length + 1,
        id_dispositivo: req.body.id_dispositivo,
        direccion_ip: req.body.direccion_ip,
        pais: req.body.pais,
        ciudad: req.body.ciudad,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
    };
    Ubicaciones.push(newUbicacion);
    res.status(201).json({mensaje: "Ubicación creada", Ubicacion: newUbicacion});
};

const updateUbicacion = (req, res) => {
    const id = parseInt(req.params.id);
    const Ubicacion = Ubicaciones.find(l => l.id === id);
    if (!Ubicacion) {
        return res.status(404).json({mensaje: "Ubicación no encontrada"});
    };
    Ubicacion.pais = req.body.pais || Ubicacion.pais;
    Ubicacion.ciudad = req.body.ciudad || Ubicacion.ciudad;
    Ubicacion.latitud = req.body.latitud || Ubicacion.latitud;
    Ubicacion.longitud = req.body.longitud || Ubicacion.longitud;

    res.status(200).json({mensaje: "Ubicación actualizada", Ubicacion})
};

const deleteUbicacion = (req, res) => {
    const id = parseInt(req.params.id);
    Ubicaciones = Ubicaciones.filter(l => l.id !== id);
    res.status(200).json ({mensaje: "Ubicación eliminada" });
};

module.exports = {
    getAllUbicacion,
    createUbicacion,
    updateUbicacion,
    deleteUbicacion
};
