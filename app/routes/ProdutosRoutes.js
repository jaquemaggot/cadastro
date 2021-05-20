const router = require('express').Router();
const controller = require('../controller/ProdutoController')

router.get('/', controller.listar);
router.post('/', controller.inserir);
router.delete('/:id', controller.deletar);

module.exports = router;