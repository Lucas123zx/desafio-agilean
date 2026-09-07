import { modalLoginElements, modalRegisterElements } from '../elements/modals';
import { set, click, getEl } from '../helpers/actions';

class ModalAuth { 

  clickBtnRegisterUser() {
    click(modalRegisterElements.bntRegister);
  }

  clickBtnAbaRegister() {
    click(modalLoginElements.btnAbaRegister);
  }

  registerUserWithoutPassword(email) {
    set(modalRegisterElements.inpEmail, email);
    this.clickBtnRegisterUser();
  }
  registerUser(email, password) {
    set(modalRegisterElements.inpEmail, email);
    cy.get(modalRegisterElements.inpPassword).type(password, { log: false });
    this.clickBtnRegisterUser();
  }

  loginUser(email, password) {
    set(modalLoginElements.inpEmail, email);
    cy.get(modalLoginElements.inpPassword).type(password, { log: false });
    click(modalLoginElements.btnEnter);
  }

  validateShowErrors(msg) {
    getEl(modalRegisterElements.pErrorRegister)
    .should('be.visible')
    .and('have.text', msg);
  }

}

export default new ModalAuth();
