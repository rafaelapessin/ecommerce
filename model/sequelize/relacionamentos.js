const Usuario = require('./Usuario');
const Pedido = require('./Pedido');
const ItemPedido = require('./ItemPedido');

Usuario.hasMany(Pedido, { foreignKey: { name: 'usuario_id', allowNull: false } });
Pedido.belongsTo(Usuario, { foreignKey: { name: 'usuario_id', allowNull: false } });

Pedido.hasMany(ItemPedido, { foreignKey: { name: 'pedido_id', allowNull: false } });
ItemPedido.belongsTo(Pedido, { foreignKey: { name: 'pedido_id', allowNull: false } });

module.exports = { Usuario, Pedido, ItemPedido };