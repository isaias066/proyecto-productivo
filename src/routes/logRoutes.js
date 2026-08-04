const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');

router.get('/', logController.getAllLog);
router.post('/', logController.createLog);
router.put('/:id', logController.updateLog);
router.delete('/:id', logController.deleteLog);

module.exports = router;
