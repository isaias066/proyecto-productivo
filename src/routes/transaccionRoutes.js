const express = require('express');
const router = express.Router();
const transaccionController = require('../controllers/transaccionController');
const verificarToken = require('../middlewares/auth');

router.get('/', transaccionController.getAllTransaccion);
router.post('/', verificarToken, transaccionController.createTransaccion);
router.put('/:id', verificarToken, transaccionController.updateTransaccion);
router.delete('/:id', verificarToken, transaccionController.deleteTransaccion);

module.exports = router;
