const express = require('express');
const router= express.Router();
const routes = require('./api');

router.use('/api', routes);

module.exports = router;