const router = require('express').Router();
const controller = require('../controller/UsuarioController')

router.get('/', controller.listar);
router.post('/', controller.inserir);

module.exports = router;