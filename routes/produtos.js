const router = require('express').Router();
const produtoController = require('../controller/produtoController');

router.get('/:id', produtoController.detalhesProduto);

module.exports = router;