const app = require('../app');

const porta = 3000;

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});

// captura qualquer erro fatal
process.on('uncaughtException', err => {
  console.error('ERRO NÃO TRATADO:', err);
});

process.on('unhandledRejection', err => {
  console.error('PROMISE NÃO TRATADA:', err);
});
