const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

require('dotenv').config();
require('./model/sequelize/conexaoRelacional');
require('./model/mongoose/conexaoMongo');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use('/', require('./routes/index'));
app.use('/produtos', require('./routes/produtos'));
app.use('/pedidos', require('./routes/pedidos'));

module.exports = app;