const express = require('express');
const router = express.Router();
const bancoController = require('../controllers/bancoController');

router.get('/', bancoController.getAllBanco);
router.post('/', bancoController.createBanco);
router.put('/:id', bancoController.updateBanco);
router.delete('/:id', bancoController.deleteBanco);

module.exports = router;
