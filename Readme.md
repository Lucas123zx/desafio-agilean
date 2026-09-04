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
  > Garanta que o node que está na sua máquina não é 20 ou 25, o Cypress_16 não é suportado nessas versões do node.

#### Pré-requsiitos: 
1. clonar projeto. 
     
        
        $ git clone 

2. criar arquivo `cypress.env.json`
   - deixarei um exemplo em `cypress.env.example.json`
   - irá precisar copiar chaves e valores do  `cypress.env.example.json` para o arquivo `cypress.env.json`

3. após inserir valores em `cypress.env.json`
   
4. no terminal execute o comando 
      
        $ npm install
---

#### Execução

  > [!Note]
  > Lint, configurado para alertar de más práticas no codigo.

    $ npm run code:verification


  > [!Warning]
  > Será necessário ter a "env" configurado no arquivo cypress.env.json.  

  Modo interativo:

      $ npm run cy:open   

      output:
      $ npm run code:verification && npx cypress open --env version=local
      $ npx eslint .


    
  Modo headless:
  
    $ npm run cy:run    

    output:
      $ npm run code:verification && npx cypress run --env version=local
      $ npx eslint .

---
#### Reports

1. No modo headless após a execução deverá ser gerado reports:

        ├── cypress/
        │   ├── reports/
        │   ├── index.html [Relatório de Testes]

