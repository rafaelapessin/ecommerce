const Produto = require('../model/mongoose/Produto');

exports.dashboard = async (req, res) => 
{
    const produtos = await Produto.find();
    const dados = 
    {
        total: produtos.length,
        baixoEstoque: produtos.filter(p => p.estoque < 10).length,
        computadores: produtos.filter(p => /pc|computador|notebook/i.test(p.nome)).length,
        moveis: produtos.filter(p => /celular|iphone|tablet|smartphone/i.test(p.nome)).length,
        faixa1: produtos.filter(p => p.preco <= 100).length,
        faixa2: produtos.filter(p => p.preco >= 101 && p.preco <= 1000).length,
        faixa3: produtos.filter(p => p.preco >= 1001 && p.preco <= 5000).length,
        faixa4: produtos.filter(p => p.preco > 5000).length
    };

    res.render('dashboard', dados);
};