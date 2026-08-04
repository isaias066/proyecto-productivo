const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const bancoRoutes = require('./src/routes/bancoRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const dispositivoRoutes = require('./src/routes/dispositivoRoutes');
const ubicacionRoutes = require('./src/routes/ubicacionRoutes');
const transaccionRoutes = require('./src/routes/transaccionRoutes');
const alertaRoutes = require('./src/routes/alertaRoutes');
const validacionRoutes = require('./src/routes/validacionRoutes');
const reporteRoutes = require('./src/routes/reporteRoutes');
const logRoutes = require('./src/routes/logRoutes');

app.use('/api/bancos', bancoRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/dispositivos', dispositivoRoutes);
app.use('/api/ubicaciones', ubicacionRoutes);
app.use('/api/transacciones', transaccionRoutes);
app.use('/api/alertas', alertaRoutes);
app.use('/api/validaciones', validacionRoutes);
app.use('/api/reportes', reporteRoutes);
app.use('/api/logs', logRoutes);

app.listen(PORT, () => {
    console.log(`Servidor TriDa API ejecutándose en http://localhost:${PORT}`);
});
