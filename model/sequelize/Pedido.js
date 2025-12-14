const { DataTypes } = require('sequelize');
const sequelize = require('./conexaoRelacional');

const Pedido = sequelize.define('Pedido', {
    status: { type: DataTypes.STRING, defaultValue: 'PENDENTE' },
    valor_total: { type: DataTypes.FLOAT, defaultValue: 0 }
}, 
{ freezeTableName: true });


module.exports = Pedido;