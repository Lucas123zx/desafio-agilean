import { credential } from '../config/credential';
import ModalAuth from '../components/modal-auth';

beforeEach('Access page', () => {
  cy.visit(Cypress.expose('url'));
});

beforeEach('Login', () => {
  ModalAuth.loginUser(credential.email, credential.password);
});