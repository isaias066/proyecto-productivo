let Bancos = [
    {id: 1, codigo: 'sin_asignar', nombre: 'Sin banco asignado'},
    {id: 2, codigo: 'bancolombia', nombre: 'Bancolombia'},
    {id: 3, codigo: 'davivienda', nombre: 'Davivienda'},
    {id: 4, codigo: 'bogota', nombre: 'Banco de Bogotá'},
    {id: 5, codigo: 'nequi', nombre: 'Nequi'}
];

const getAllBanco = (req, res) => {
    res.status(200).json({mensaje: "Bancos consultados", Bancos});
};

const createBanco = (req, res) => {
    const newBanco = {
        id: Bancos.length + 1,
        codigo: req.body.codigo,
        nombre: req.body.nombre,
    };
    Bancos.push(newBanco);
    res.status(201).json({mensaje: "Banco creado", Banco: newBanco});
};

const updateBanco = (req, res) => {
    const id = parseInt(req.params.id);
    const Banco = Bancos.find(l => l.id === id);
    if (!Banco) {
        return res.status(404).json({mensaje: "Banco no encontrado"});
    };
    Banco.codigo = req.body.codigo || Banco.codigo;
    Banco.nombre = req.body.nombre || Banco.nombre;

    res.status(200).json({mensaje: "Banco actualizado", Banco})
};

const deleteBanco = (req, res) => {
    const id = parseInt(req.params.id);
    Bancos = Bancos.filter(l => l.id !== id);
    res.status(200).json ({mensaje: "Banco eliminado" });
};

module.exports = {
    getAllBanco,
    createBanco,
    updateBanco,
    deleteBanco
};
