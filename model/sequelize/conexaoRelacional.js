const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'fullstack', 'senha_fullstack', {
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