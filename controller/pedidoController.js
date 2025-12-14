const Pedido = require('../model/sequelize/Pedido');

exports.listarPedidos = async (req, res) => 
{
    const pedidos = await Pedido.findAll();
    res.render('pedidos', { pedidos });
};