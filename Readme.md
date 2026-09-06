### Desafio Agilean


#### Padrão de projeto POM:

1. POM (Page Object Model)
  - Foi utilizado o padrão Page Object Model (POM) para organizar e separar as responsabilidades da automação
  Referência: https://www.browserstack.com/guide/cypress-page-object-model
  
1. Padrão AAA: Arrange, Act, Assert 
  - Os testes foram estruturados seguindo o padrão AAA (Arrange, Act, Assert):
    - Arrange: preparação do cenário e dos dados necessários para o teste; 
    - Act: execução das ações que serão testada;
    - Assert: validação do resultado esperado.

  - Cada cenário possui uma finalidade específica e segue, sempre que possível, a estrutura padrão AAA.

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

#### Pré-requisitos: 
1. Browser instalado Mozilla Firefox ou Google Chrome.
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
  > Será necessário configurar as chaves e os valores necessários no arquivo `cypress.env.json`. 
   
6. Instalar dependenias. 
  Na pasta raiz do projeto abra o terminal e execute o comando:
  
    $ npm install
---

#### Execução:

  > [!Note]
  > O projeto possui ESLint configurado para identificar possíveis más práticas e problemas de padronização no código.

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
## Cenários automatizados

- CT[01] - Nome do cenário
  - Descrição do que o cenário valida.

- CT[02] - Nome do cenário
  - Descrição do que o cenário valida.

- CT[03] - Nome do cenário
  - Descrição do que o cenário valida.
 
  
---
## Decisões técnicas

### POM — Page Object Model

Decisão: Utilizar o padrão Page Object Model para organizar os testes.

Motivo: Separar a lógica de interação com a aplicação dos cenários de teste, facilitando a manutenção e evitando duplicação de código.

### Componentes reutilizáveis

Decisão: Criar classes/componentes específicos para os modais da aplicação, como ModalActivity, ModalResponsability e ModalAuth..

Motivo: Centralizar as interações e validações relacionadas a cada modal, permitindo que os métodos sejam reutilizados por diferentes cenários.

### Padrão AAA

Decisão: Utilizar o padrão AAA para estruturar os testes, mantendo uma separação clara entre preparação, execução e validação.

Motivo: Organiza os teste de forma clara e estruturada, facilitando a compreesã do que o teste precisa para ser executado, quais ações serão realizadas e quais resultados serão validados

### Geração de dados

Decisão: Utilizar funções para geração dinâmica dos dados de teste.

Motivo: Evitar valores fixos nos cenários e reduzir a possibilidade de conflitos entre execuções, além de facilitar a reutilização dos dados.

### Criação de métodos reutilizáveis

Decisão: Criar métodos reutilizáveis para as validações realizadas com frequência.

Motivo: Evitar a repetição de comandos Cypress nos cenários e facilitar a manutenção das validações.

### Helpers

Decisão: Criar funções auxiliares para centralizar ações básicas e recorrentes realizadas nos elementos da aplicação

Motivo: Evitar a repetição de código e facilitar a reutilização e manutenção dos scripts de teste.

### Variáveis de ambiente

Decisão: Gerenciar dados específicos do ambiente.

Motivo: Gerenciar massas de dados referente ao ambiente utilizado.

### ESLint

Decisão: Utilizar o ESLint para padronizar e analisar estaticamente o código antes da execução dos testes.

Motivo: Identificar possíveis problemas de código, más práticas e inconsistências de padronização, mantendo o projeto mais organizado e consistente.

### Mochawesome

Decisão: Utilizar o Mochawesome para gerar relatórios das execuções dos testes automatizados.

Motivo: Disponibilizar uma evidência dos testes realizados e facilitar a análise dos resultados na etapa final do processo de testes de software.

---
#### Relatórios

1. No modo headless após a execução deverá ser gerado o relatório:

        ├── cypress/
        │   ├── reports/
        │   │   ├── html/ 
        │   │   │   ├── index.html/ [Relatório de Testes]
