let Clientes = [
    {id: 1, id_banco: 2, nombre_completo: 'Laura Gómez Restrepo', email: 'laura.gomez@correo.com', telefono: '3001234567', pais: 'Colombia', ciudad: 'Medellín'},
    {id: 2, id_banco: 3, nombre_completo: 'Carlos Andrés Pérez', email: 'carlos.perez@correo.com', telefono: '3109876543', pais: 'Colombia', ciudad: 'Bogotá'},
    {id: 3, id_banco: 4, nombre_completo: 'María Fernanda Castro', email: 'maria.castro@correo.com', telefono: '3157894561', pais: 'Colombia', ciudad: 'Cali'},
    {id: 4, id_banco: 5, nombre_completo: 'Andrés Felipe Rojas', email: 'andres.rojas@correo.com', telefono: '3012345678', pais: 'Colombia', ciudad: 'Barranquilla'},
    {id: 5, id_banco: 2, nombre_completo: 'Valentina Ospina', email: 'valentina.ospina@correo.com', telefono: '3189876543', pais: 'Colombia', ciudad: 'Bucaramanga'}
];

const getAllCliente = (req, res) => {
    res.status(200).json({mensaje: "Clientes consultados", Clientes});
};

const createCliente = (req, res) => {
    const newCliente = {
        id: Clientes.length + 1,
        id_banco: req.body.id_banco,
        nombre_completo: req.body.nombre_completo,
        email: req.body.email,
        telefono: req.body.telefono,
        pais: req.body.pais,
        ciudad: req.body.ciudad,
    };
    Clientes.push(newCliente);
    res.status(201).json({mensaje: "Cliente creado", Cliente: newCliente});
};

const updateCliente = (req, res) => {
    const id = parseInt(req.params.id);
    const Cliente = Clientes.find(l => l.id === id);
    if (!Cliente) {
        return res.status(404).json({mensaje: "Cliente no encontrado"});
    };
    Cliente.id_banco = req.body.id_banco || Cliente.id_banco;
    Cliente.nombre_completo = req.body.nombre_completo || Cliente.nombre_completo;
    Cliente.email = req.body.email || Cliente.email;
    Cliente.telefono = req.body.telefono || Cliente.telefono;
    Cliente.pais = req.body.pais || Cliente.pais;
    Cliente.ciudad = req.body.ciudad || Cliente.ciudad;

    res.status(200).json({mensaje: "Cliente actualizado", Cliente})
};

const deleteCliente = (req, res) => {
    const id = parseInt(req.params.id);
    Clientes = Clientes.filter(l => l.id !== id);
    res.status(200).json ({mensaje: "Cliente eliminado" });
};

module.exports = {
    getAllCliente,
    createCliente,
    updateCliente,
    deleteCliente
};
