### Desafio Agilean


#### Padrão de projeto POM:

1. POM (Page Object Model Patterns)
  1. https://www.browserstack.com/guide/cypress-page-object-model
2. Padrão AAA: Arrange, Act, Assert 

#### Ferramentas:
1. [nodeJs](https://nodejs.org/pt/download) 
2. [cypress](https://www.cypress.io/)
3. [mochawesome](https://www.npmjs.com/package/cypress-mochawesome-reporter)
4. [eslint](https://www.npmjs.com/package/eslint-plugin-cypress)
   
#### Observação:
> [!Note]
  > O Cypress 16 requer o [Node.js](https://nodejs.org/en) 22.x , 24.x ou 26.x ou superior para instalar o binário do Cypress. O Node.js 20 e o Node.js 25 não são mais suportados. Consulte [os requisitos do sistema](https://docs.cypress.io/app/get-started/install-cypress#Nodejs). 
  >
  > No modo headless pode ocorrer erro ao executar no Electron (Depreciado). 

#### Pré-requsiitos: 
1. Possua browser instalado na máquina Mozila Firefox ou Google Chrome.

2. Clonar projeto. 
        
    $ git clone https://github.com/Lucas123zx/desafio-agilean.git

Ou caso possua chave SSH

    $ git clone git@github.com:Lucas123zx/desafio-agilean.git


3. Criar arquivo `cypress.env.json` na raiz do projeto.
   - deixarei um exemplo em `cypress.env.example.json`
   - irá precisar copiar chaves e valores do  `cypress.env.example.json` para o arquivo `cypress.env.json`

4. Após inserir valores em `cypress.env.json`
   
5. Na pasta raiz do projeto abra o terminal e execute o comando. 
      
    $ npm install
---

#### Execução

  > [!Note]
  > Lint, configurado para alertar de más práticas no codigo.

    $ npm run code:verify


  > [!Warning]
  > Será necessário ter a "env" configurado no arquivo cypress.env.json.  

  Modo interativo:

      $ npm run cy:open-dev   

      output:
      > desafio-agilean@1.0.0 cy:open-dev
      > npm run code:verify && npx cypress open --env version=dev

      > desafio-agilean@1.0.0 code:verify
      > npx eslint .


    
  Modo headless (Chrome/Firefox): 
  
    $ npm run cy:run-dev-chrome 

    output:
      > desafio-agilean@1.0.0 cy:run-dev
      > npm run code:verify && npx cypress run --browser chrome --env version=dev

      > desafio-agilean@1.0.0 code:verify
      > npx eslint .
    
    ou   

    $ npm run cy:run-dev-firefox 

    output:
      > desafio-agilean@1.0.0 cy:run-dev
      > npm run code:verify && npx cypress run --browser firefox --env version=dev

      > desafio-agilean@1.0.0 code:verify
      > npx eslint .

---
#### Reports

1. No modo headless após a execução deverá ser gerado reports:

        ├── cypress/
        │   ├── reports/
        │   │   ├── html/ 
        │   │   │   ├── index.html/ [Relatório de Testes]
