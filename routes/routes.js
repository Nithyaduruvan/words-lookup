const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/sample-cont', controllers.sampleCont);

module.exports = router;