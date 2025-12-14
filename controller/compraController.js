const Produto = require('../model/mongoose/Produto');
const { Pedido, ItemPedido, Usuario } = require('../model/sequelize/relacionamentos');

exports.telaCompra = async (req, res) => 
{
    const produto = await Produto.findById(req.params.id, 'nome preco estoque');
    res.render('compra', { produto });
};

exports.finalizarCompra = async (req, res) => 
{
    const { quantidade } = req.body;
    const produto = await Produto.findById(req.params.id);
    const usuario = await Usuario.findOne();
    const pedido = await Pedido.create
    ({
        usuario_id: usuario.id,
        status: 'CONCLUIDO',
        valor_total: produto.preco * quantidade
    });

    await ItemPedido.create
    ({
        pedido_id: pedido.id,
        quantidade,
        preco_unitario: produto.preco,
        produto_mongodb_id: produto._id.toString()
    });

    produto.estoque -= quantidade;
    await produto.save();

    res.render('confirmacao', { usuario, pedido });
};