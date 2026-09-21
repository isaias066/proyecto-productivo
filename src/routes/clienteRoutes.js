const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const verificarToken = require('../middlewares/auth');

router.get('/', clienteController.getAllCliente);
router.post('/', verificarToken, clienteController.createCliente);
router.put('/:id', verificarToken, clienteController.updateCliente);
router.delete('/:id', verificarToken, clienteController.deleteCliente);

module.exports = router;
