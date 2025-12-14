const router = require('express').Router();
const produtoController = require('../controller/produtoController');
const povoamentoController = require('../controller/povoamentoController');

router.get('/', produtoController.listarProdutos);
router.get('/povoar', povoamentoController.povoarBanco);

module.exports = router;