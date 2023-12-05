# Cypress Test Suite for Simple Books API 📚

Este projeto contém testes de API Cypress para a Simple Books API. Os testes são projetados para verificar a funcionalidade dos diferentes endpoints da API.

## Pré-requisitos

Para executar este projeto, é necessário ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados. Utilizei as versões `v18.15.0` e `9.5.0` do Node.js e npm, respectivamente. Recomendo que você use as mesmas versões ou versões mais recentes.

## Configuração do Projeto

Certifique-se de ter o Node.js e o npm instalados antes de prosseguir.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/jonasvictor/simple-books-api.git
   ```
2. **Instale as dependências:**
   ```bash
   cd simple-books-api
   npm install
   ```

## Configuração do Cypress

O Cypress é usado para executar os testes. Certifique-se de ter o Cypress instalado globalmente:

```bash
npm install -g cypress
```

## Executando os Testes

Para executar os testes, use o seguinte comando:

```bash
npm test
```

## Variáveis de Ambiente

Certifique-se de configurar as variáveis de ambiente necessárias no arquivo `cypress.env.json`. Veja um exemplo:

```json
{
  "clientName": "seu-client-name",
  "clientEmail": "seu-client-email",
  "accessToken": "seu-token-de-acesso"
}
```

## Estrutura do Projeto

- **`cypress/e2e/`:** Contém os testes de API Cypress.
- **`cypress/support/api_commands.js`:** Contém comandos Cypress personalizados para interagir com a API.
- **`cypress/support/e2e.js`:** Importa os comandos personalizados.

## Comandos Úteis

- **`npm test:`** Executa todos os testes.
- **`npx cypress open`** Abre a interface do Cypress para executar testes interativamente.

## Referência da API

A API Simple Books está disponível em [simple-books-api.glitch.me](https://simple-books-api.glitch.me).
