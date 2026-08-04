const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');

router.get('/', reporteController.getAllReporte);
router.post('/', reporteController.createReporte);
router.put('/:id', reporteController.updateReporte);
router.delete('/:id', reporteController.deleteReporte);

module.exports = router;
