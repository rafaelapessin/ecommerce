const { Pedido, Usuario, ItemPedido } = require('../model/sequelize/relacionamentos');

exports.listar = async (req, res) => 
{
    const pedidos = await Pedido.findAll({ include: [Usuario, ItemPedido] });
    res.render('pedidos', { pedidos });
};

    exports.alterarStatus = async (req, res) => 
{
    await Pedido.update({ status: req.params.status }, { where: { id: req.params.id } });
    res.redirect('/pedidos');
};