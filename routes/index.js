const router = require('express').Router();

const notes = require('./apiRoutes');


router.use(apiRoutes);

module.exports = router