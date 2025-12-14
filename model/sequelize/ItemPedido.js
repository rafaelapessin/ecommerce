const { DataTypes } = require('sequelize');
const sequelize = require('./conexaoRelacional');

const ItemPedido = sequelize.define('ItemPedido', {
    quantidade: { type: DataTypes.INTEGER, allowNull: false },
    preco_unitario: { type: DataTypes.FLOAT, allowNull: false },
    produto_mongodb_id: { type: DataTypes.STRING, allowNull: false }
}, 
{ freezeTableName: true });

module.exports = ItemPedido;