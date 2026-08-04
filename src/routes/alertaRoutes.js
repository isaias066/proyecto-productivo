const express = require('express');
const router = express.Router();
const alertaController = require('../controllers/alertaController');

router.get('/', alertaController.getAllAlerta);
router.post('/', alertaController.createAlerta);
router.put('/:id', alertaController.updateAlerta);
router.delete('/:id', alertaController.deleteAlerta);

module.exports = router;
