### Desafio Agilean


#### Padrão de projeto POM:

1. POM (Page Object Model Patterns)
  - Foi utilizado o padrão Page Object Model (POM) para organizar e separar as responsabilidades da automação
  Referencia: https://www.browserstack.com/guide/cypress-page-object-model
  
2. Padrão AAA: Arrange, Act, Assert 
  - Os testes foram estruturados seguindo o padrão AAA (Arrange, Act, Assert):
    - Arrange: preparação do cenário e dos dados necessários para o teste; 
    - Act: execução da ação que será testada;
    - Assert: validação do resultado esperado.

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
1. Browser instalado Mozila Firefox ou Google Chrome.
2. Node.js instalado
3. Git instalado

4. Clonar o projeto. 
        
    $ git clone https://github.com/Lucas123zx/desafio-agilean.git

Ou caso possua chave SSH configurada:

    $ git clone git@github.com:Lucas123zx/desafio-agilean.git


5. Configurar variáveis de ambiente
   - Criar arquivo `cypress.env.json` na raiz do projeto.
   - Disponibilizado modelo de exemplo em `cypress.env.example.json`
   - Copiar chaves e valores do `cypress.env.example.json` para o arquivo `cypress.env.json`
  
  > [!Warning]
  > Será necessário ter a "chaves" e "valores" no arquivo cypress.env.json. 
   
6. Instalar dependenias. 
  Na pasta raiz do projeto abra o terminal e execute o comando:
  
    $ npm install
---

#### Execução:

  > [!Note]
  > O projeto possui ESLint configurado para identificar possíveis más práticas e problemas de padronização no código..

    $ npm run code:verify
     
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
#### Estrutura dos cenários 
  - Cada cenário possui uma finalidade específica e segue, sempre que possível, a estrutura:
  - Preparação → Ação → Validação
    - quais condições são necessárias para iniciar o teste;
    - qual ação está sendo executada;
    - qual comportamento é esperado;
    - qual resultado deve ser validado.


---
#### Cenários automatizados



---
#### Reports

1. No modo headless após a execução deverá ser gerado reports:

        ├── cypress/
        │   ├── reports/
        │   │   ├── html/ 
        │   │   │   ├── index.html/ [Relatório de Testes]
