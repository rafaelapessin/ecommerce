const router = require('express').Router();
const pedidoController = require('../controller/pedidoController');

router.get('/', pedidoController.listarPedidos);

module.exports = router;