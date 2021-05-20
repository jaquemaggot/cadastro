const router = require('express').Router();
const controller = require('../controller/LoginController')

router.post('/', controller.login);

module.exports = router;