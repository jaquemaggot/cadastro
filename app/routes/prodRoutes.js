const express = require('express');
//Indentifica as rotas que estão chegando
const router = express.Router();
const prodController = require('../controller/prodController');

router.post('/cadastroprod', prodController.cadastroprod);
router.get('/listarprod',prodController.listarprod);
module.exports = router;