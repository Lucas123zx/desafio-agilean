import ModalAuth from '../support/components/modal-auth';
import HomePage from '../support/pages/home-page';
import { generateUser } from '../support/utils/gen-user';
import UserServices from '../support/services/user-services';
import { screenShot } from '../support/helpers/actions';

describe('Register user', () => {

  beforeEach('Access page', () => {
    cy.visit(Cypress.expose('url'));
    ModalAuth.clickBtnAbaRegister();
  });

  afterEach('screenshot', () => {
    screenShot();
  });
  
  describe('Register user with "Success"', () => {

    it('CT[56] - Cadastrar usuário com dados válidos', () => {
      const user = generateUser();

      ModalAuth.registerUser(user.email, user.password);

      HomePage.validateHome(user.email);
    });

  });

  describe('Register user with "Error"', () => {

    it('CT[57] - Cadastrar usuário sem infomar campos obrigatórios', () => {
      const msg = 'Preencha todos os campos';

      ModalAuth.clickBtnRegisterUser();

      ModalAuth.validateShowErrors(msg);
    });

    it('CT[58] - Cadastrar usuário informando email inválido', () => {
      const msg = 'Formato de e-mail inválido';

      ModalAuth.registerUser('teste@.com', 'MonkeyDLuffy');

      ModalAuth.validateShowErrors(msg);
    });

    it('CT[59] - Cadastrar usuário informando "valor" de senha menor quer 6 caracteres', () => {
      const msg = 'A senha deve ter no mínimo 6 caracteres';
      const user = generateUser();

      ModalAuth.registerUser(user.email, 'Luffy');

      ModalAuth.validateShowErrors(msg);
    });

    it('CT[60] - Cadastrar usuário informando "valor" de senha igual a 6 caracteres', () => {
      const user = generateUser();

      ModalAuth.registerUser(user.email, 'Monkey');

      HomePage.validateHome(user.email);
    });

    it('CT[61] - Cadastrar usuário informando "valor" de senha maior a 6 caracteres', () => {
      const user = generateUser();

      ModalAuth.registerUser(user.email, 'Teste12');

      HomePage.validateHome(user.email);
    });

    it('CT[62] - Cadastrar usuário sem informar o campo senha', () => {
      const msg = 'Preencha todos os campos';
      const user = generateUser();

      ModalAuth.registerUserWithoutPassword(user.email,);

      ModalAuth.validateShowErrors(msg);
    });

    it('CT[63] - Cadastrar usuário informando email vinculado a outro.', () => {
      const msg = 'Este e-mail já está em uso';
      const user = generateUser();
      UserServices.createUser({ 
        email: user.email, 
        password: user.password, 
        data: {}, 
        gotrue_meta_security: {}, 
        code_challenge: null, 
        code_challenge_method :null 
      });

      ModalAuth.registerUser(user.email, user.password);

      ModalAuth.validateShowErrors(msg);
    });

  });

});
