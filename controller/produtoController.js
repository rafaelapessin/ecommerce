const Produto = require('../model/mongoose/Produto');

exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto
      .find({}, 'nome preco estoque')
      .limit(8)
      .lean(); // 👈 transforma em objeto JS puro

    res.render('dashboard', { produtos });
  } catch (erro) {
    console.error('Erro ao listar produtos:', erro);
    res.status(500).send('Erro ao carregar produtos');
  }
};

exports.detalhesProduto = async (req, res) => {
  try {
    const produto = await Produto
      .findById(req.params.id)
      .lean(); // 👈 MUITO IMPORTANTE

    res.render('detalhesProduto', { produto });
  } catch (erro) {
    console.error('Erro ao buscar produto:', erro);
    res.status(500).send('Erro ao carregar detalhes do produto');
  }
};
