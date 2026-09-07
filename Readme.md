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
5. [faker-js](https://fakerjs.dev/)
   
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

Cadastro de atividade (register-activity.cy.js)

- CT[01] - Cadastro com dados válidos
- CT[02] - Prazo menor que a data atual (atividade atrasada)
- CT[03] - Prazo igual à data atual
- CT[04] - Campo Atividade com 51 caracteres (limite 50 no front)
- CT[05] - Campo Atividade com 50 caracteres
- CT[06] - Campo Atividade com 49 caracteres
- CT[07] - Mensagens de obrigatoriedade sem preencher campos
- CT[08] - Contador de caracteres 0/50
- CT[09] - Cancelar cadastro e voltar à home
- CT[10] - Fechar modal de cadastro

Cadastro de responsável (register-responsability.cy.js)

- CT[11] - Cadastro com dados válidos
- CT[12] - Nome com mais de 51 caracteres
- CT[13] - Nome com 50 caracteres
- CT[14] - Nome com 49 caracteres
- CT[15] - E-mail inválido
- CT[16] - E-mail com espaço
- CT[17] - Obrigatoriedade dos campos
- CT[19] - Cancelar e voltar ao modal de atividade
- CT[20] - Fechar modal de responsável
- CT[21] - Telefone inválido (85)


Resumo e gráfico (summary.cy.js)

- CT[22] - Incremento de Cadastradas após criar atividade
- CT[23] - Decremento de Cadastradas após excluir
- CT[24] - Incremento de Resolvidas ao mudar status
- CT[25] - Incremento de Pendentes (Não Iniciada)
- CT[26] - Incremento de Pendentes (Em Andamento)
- CT[27] - Incremento de Atrasadas (Não Iniciada + prazo expirado)
- CT[28] - Incremento de Atrasadas (Em Andamento + prazo expirado)
- CT[29] - Gráfico: percentual de cadastradas
- CT[30] - Gráfico: percentual de resolvidas
- CT[32] - Gráfico: percentual de pendentes
- CT[34] - Decremento de Resolvidas após excluir resolvida
- CT[35] - Decremento de Pendentes (Não Iniciada)
- CT[36] - Decremento de Pendentes (Em Andamento)
- CT[37] - Decremento de Atrasadas após excluir expirada


Alteração de status em atividade (status-activity.cy.js)

- CT[38] - Validar alteração de Status de Atividade para "Não Iniciada"
- CT[39] - Validar alteração de Status de Atividade para "Em Andamento"
- CT[40] - Validar alteração de Status de Atividade para "Resolvida"
- CT[41] - Validar alteração de Status de Atividade para "Rejeitada"
- CT[43] - Validar mensagem de campo "obrigatório" ao rejeitar atividade sem informar motivo

Cadastro de usuário (register-user.cy.js)

- CT[56] - Cadastrar usuário com dados válidos
- CT[57] - Cadastrar usuário sem infomar campos obrigatórios
- CT[58] - Cadastrar usuário informando email inválido
- CT[59] - Cadastrar usuário informando "valor" de senha menor quer 6 caracteres
- CT[60] - Cadastrar usuário informando "valor" de senha igual a 6 caracteres
- CT[61] - Cadastrar usuário informando "valor" de senha maior a 6 caracteres
- CT[62] - Cadastrar usuário sem informar o campo senha
- CT[63] - Cadastrar usuário informando email vinculado a outro.



---
## Decisões técnicas

### POM — Page Object Model

Decisão: Organizar a automação em páginas, componentes de modal e mapeamento de elementos.

Motivo: Separar interação com a UI dos cenários, reduzindo duplicação e facilitando manutenção.

Onde: cypress/support/pages/, cypress/support/components/, cypress/support/elements/.

### Camada de elementos (data-cy)

Decisão: Centralizar seletores em arquivos de elements, priorizando atributos data-cy.

Motivo: Isolar o contrato com o front. Se um seletor mudar, o ajuste fica em um único lugar.

### Componentes reutilizáveis

Decisão: Classes específicas para ModalActivity, ModalResponsability e ModalAuth.

Motivo: Reutilizar fluxos de login, cadastro de atividade e cadastro de responsável em vários specs.

### Padrão AAA

Decisão: Estruturar cada teste em preparação (Arrange), ação (Act) e validação (Assert).

Motivo: Deixar explícito o que o cenário precisa, o que executa e o que comprova.

### Geração de dados

Decisão: Gerar nomes, e-mails e telefones dinamicamente (@faker-js/faker). Limites de caracteres usam valores controlados (repeat).

Motivo: Reduzir conflito entre execuções e reutilizar massa sem hardcode nos specs de caminho feliz.

### Criação de métodos reutilizáveis

Decisão: Criar métodos reutilizáveis para as validações realizadas com frequência.

Motivo: Evitar a repetição de comandos Cypress nos cenários e facilitar a manutenção das validações.

### Helpers

Decisão: Centralizar ações de UI (click, set, select, reload, screenShot) em helpers/actions.js.

Motivo: Padronizar waits e interações básicas.

### Constantes

Decisão: Centralizar valores fixos e informações utilizadas em diferentes cenários de teste.

Motivo: Evitar valores duplicados no código e facilitar a manutenção e alteração dessas informações.

### Services

Decisão: Encapsular chamadas ao backend (Supabase) em services: token, atividades, responsáveis e usuários.

Motivo: Separar a API dos testes de UI. Permite obter/criar dados sem depender de outro cenário de interface.

### Hooks de pré-condição

Decisão: Login, visita à URL e carga de responsável/atividades em hooks reutilizáveis.

Motivo: Evitar repetir autenticação e setup em cada spec. O login na UI espera as APIs de atividades e responsáveis (cy.intercept + cy.wait).

### Variáveis de ambiente

Decisão: Credenciais e URLs por ambiente em cypress.env.json, carregadas pela chave version (dev) e expostas em Cypress.expose().

Motivo: Não versionar dados de ambiente no código e permitir trocar URL/credenciais sem alterar specs.

### ESLint

Decisão: Utilizar o ESLint para padronizar e analisar estaticamente o código antes da execução dos testes.

Motivo: Identificar possíveis problemas de código, más práticas e inconsistências de padronização, mantendo o projeto mais organizado e consistente.

### Mochawesome

Decisão: Relatório HTML com screenshots embutidos após o run headless.

Motivo: Evidência da execução para análise dos resultados.

---
#### Relatórios

1. No modo headless após a execução deverá ser gerado o relatório:

        ├── cypress/
        │   ├── reports/
        │   │   ├── html/ 
        │   │   │   ├── index.html/ [Relatório de Testes]
