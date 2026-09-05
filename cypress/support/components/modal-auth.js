import { modalLoginElements, modalRegisterElements } from '../elements/modals';
import { set, click } from '../helpers/actions';

class ModalAuth { 

  registerUser(email, password) {
    set(modalRegisterElements.inpEmail, email);
    cy.get(modalRegisterElements.inpPassword).type(password, { log: false });
    click(modalRegisterElements.bntRegister);
  }

  loginUser(email, password) {
    set(modalLoginElements.inpEmail, email);
    cy.get(modalLoginElements.inpPassword).type(password, { log: false });
    click(modalLoginElements.btnEnter);
  }

}

export default new ModalAuth();
