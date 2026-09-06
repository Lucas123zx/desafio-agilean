import { credential } from '../config/credential';
import ModalAuth from '../components/modal-auth';

beforeEach('Access page', () => {
  cy.visit(Cypress.expose('url'));
});

beforeEach('Login', () => {
  cy.intercept('GET', '**/rest/v1/atividades*').as('getActivities');
  cy.intercept('GET', '**/rest/v1/responsaveis*').as('getResponsabilities');

  ModalAuth.loginUser(credential.email, credential.password);

  cy.wait('@getActivities');
  cy.wait('@getResponsabilities');
});