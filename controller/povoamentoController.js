const Produto = require('../model/mongoose/Produto');

exports.povoarBanco = async (req, res) => 
{
    await Produto.create({ nome: 'Notebook', preco: 3500, estoque: 5, detalhes: { memoria: '16GB', processador: 'i7' }});
    res.redirect('/');
};