const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contacts');

router.get('/all', contactController.getAll);

router.get('/:id', contactController.getSingle);

router.post('/create', contactController.createContact)

router.put('/:id', contactController.updateContact)

router.delete('/:id', contactController.deleteContact)

module.exports = router;