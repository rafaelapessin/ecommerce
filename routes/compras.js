const router = require('express').Router();
const compraController = require('../controller/compraController');

router.get('/:id', compraController.telaCompra);
router.post('/:id', compraController.finalizarCompra);

module.exports = router;