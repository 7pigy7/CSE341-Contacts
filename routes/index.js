const express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
   //#swagger.tags=['Hello World']
    res.send('Hello World');
});

router.use('/contacts', require('./contacts'));

module.exports = router;