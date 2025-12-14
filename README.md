# RAFAELA AMORIM PESSIN
# Projeto E-commerce Fullstack

Aplicação Web Fullstack desenvolvida como atividade avaliativa da disciplina **Desenvolvimento Backend I**.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript no servidor
- **Express**: Framework web para Node.js
- **Handlebars**: Template engine para renderizar as views
- **Bootstrap**: Framework CSS para estilização e layout (offline)
- **Sequelize**: ORM para interação com banco de dados MySQL
- **Mongoose**: ODM para interação com banco de dados MongoDB

## Estrutura do Projeto
A aplicação segue o padrão de **arquitetura MVC** (Model, View, Controller) e utiliza dois bancos de dados distintos:

- **MySQL** (relacional) para gerenciamento de usuários e pedidos.
- **MongoDB** (não-relacional) para gerenciamento de produtos, com detalhamento dinâmico de informações.

### Estrutura de Pastas:
├── bin/
│ └── www.js
├── controller/
│ ├── produtoController.js
│ ├── pedidoController.js
│ └── povoamentoController.js
├── model/
│ ├── sequelize/
│ │ ├── conexaoRelacional.js
│ │ ├── Usuario.js
│ │ ├── Pedido.js
│ │ └── ItemPedido.js
│ └── mongoose/
│ ├── conexaoMongo.js
│ └── Produto.js
├── public/
│ └── bootstrap/
│ └── (arquivos Bootstrap offline)
├── routes/
│ ├── index.js
│ ├── produtos.js
│ └── pedidos.js
├── views/
│ ├── layouts/
│ │ └── main.handlebars
│ ├── home.handlebars
│ ├── detalhesProduto.handlebars
│ ├── compra.handlebars
│ ├── confirmacao.handlebars
│ ├── dashboard.handlebars
│ └── pedidos.handlebars
├── app.js
├── package.json

## Funcionalidades
A aplicação de e-Commerce oferece as seguintes funcionalidades:

- **Povoamento de Banco de Dados**:
  - Criação de 3 usuários e 10 produtos com detalhes específicos.

- **Tela Principal**:
  - Exibição de cards de produtos, com nome, preço e estoque.
  - Exibição de botão para visualizar detalhes do produto ou realizar compra.

- **Detalhes do Produto**:
  - Exibição de informações completas sobre um produto, incluindo detalhes dinâmicos (processador, memória, etc).
  - Botões para realizar a compra e voltar à tela principal.

- **Comprar Produto**:
  - Finalização da compra com especificação de quantidade.
  - Criação de pedido e item de pedido no banco de dados, com atualização do estoque.

- **Dashboard de Produtos**:
  - Exibição de métricas sobre os produtos cadastrados, como quantidade total, produtos com baixo estoque, e faixas de preços.

- **Gerenciamento de Pedidos**:
  - Exibição de pedidos realizados, com informações sobre status (CONCLUIDO, CANCELADO, SUSPENSO) e a possibilidade de alteração do status de cada pedido.

## Como Executar
Siga os passos abaixo para rodar a aplicação localmente:

1. **Instalar as dependências**:
No terminal, na pasta do projeto, execute: 
npm install

2. **Iniciar o servidor**:
Para iniciar o servidor da aplicação, execute: 
npm start

3. **Acessar a aplicação:**:
Abra seu navegador e acesse o seguinte endereço: 
http://localhost:3000

4. **Povoar o banco de dados**: 
Para popular o banco com usuários e produtos iniciais, acesse:
http://localhost:3000/povoar