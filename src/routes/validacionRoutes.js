const express = require('express');
const router = express.Router();
const validacionController = require('../controllers/validacionController');

router.get('/', validacionController.getAllValidacion);
router.post('/', validacionController.createValidacion);
router.put('/:id', validacionController.updateValidacion);
router.delete('/:id', validacionController.deleteValidacion);

module.exports = router;
