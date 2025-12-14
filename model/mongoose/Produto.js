const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema
({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    estoque: { type: Number, min: 0 },
    detalhes: { type: mongoose.Schema.Types.Mixed }
}, 
{ timestamps: { createdAt: 'criado_em', updatedAt: 'atualizado_em' } });

module.exports = mongoose.model('Produto', ProdutoSchema);