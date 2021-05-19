const express = require('express');
//Indentifica as rotas que estão chegando
const router = express.Router();
const userController = require('../controller/userController');

//Rotas que serão usadas no projeto
router.post('/cadastrouser', userController.cadastrouser);
//router.post('/login', LoginController.login);
module.exports = router;