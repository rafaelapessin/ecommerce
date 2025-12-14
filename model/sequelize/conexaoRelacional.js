const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', 'senha123', {
    host: 'localhost',
    dialect: 'mysql',
    define: 
    {
        timestamps: true,
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    }
});

sequelize.authenticate();
module.exports = sequelize;