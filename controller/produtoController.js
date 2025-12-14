const Produto = require('../model/mongoose/Produto');

exports.listarProdutos = async (req, res) => 
{
    const produtos = await Produto.find({}, 'nome preco estoque').limit(8);
    res.render('home', { produtos });
};

exports.detalhesProduto = async (req, res) => 
{
    const produto = await Produto.findById(req.params.id);
    res.render('detalhesProduto', { produto });
};