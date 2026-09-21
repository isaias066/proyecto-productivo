const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const verificarToken = require('../middlewares/auth');
const esAdmin = require('../middlewares/esAdmin');

router.get('/', usuarioController.getAllUsuario);
router.post('/', verificarToken, esAdmin, usuarioController.createUsuario);
router.put('/:id', verificarToken, esAdmin, usuarioController.updateUsuario);
router.delete('/:id', verificarToken, esAdmin, usuarioController.deleteUsuario);

module.exports = router;
