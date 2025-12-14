const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Atlas conectado com sucesso');
  })
  .catch((erro) => {
    console.error('Erro ao conectar no MongoDB Atlas:', erro);
  });
