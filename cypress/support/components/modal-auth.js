import { modalLogin, modalRegister } from '../elements/modals';
import { set, click } from '../helpers/actions';

class ModalAuth { 

  registerUser(email, password) {
    set(modalRegister.inpEmail, email);
    cy.get(modalRegister.inpPassword).type(password, {log: false});
    click(modalRegister.bntRegister);
  }

  loginUser(email, password) {
    set(modalLogin.inpEmail, email);
    cy.get(modalLogin.inpPassword).type(password, {log: false});
    click(modalLogin.btnEnter);
  }

}

export default new ModalAuth();
