const { DataTypes } = require('sequelize');
const sequelize = require('./conexaoRelacional');

const Usuario = sequelize.define('Usuario', {
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha: { type: DataTypes.STRING, allowNull: false }
}, 
{ freezeTableName: true });

module.exports = Usuario;