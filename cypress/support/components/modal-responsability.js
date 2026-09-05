import { modalResponsabilityElements } from '../elements/modals';
import { set, click, getEl } from '../helpers/actions';

class ModalResponsability {

  clickBtnCancelResponsability() {
    click(modalResponsabilityElements.btnCancelResponsability);
  }

  clickCloseResponsability() {
    click(modalResponsabilityElements.btnCloseModalResponsability);
  }

  clickBtnSalve() {
    click(modalResponsabilityElements.btnSaveResponsability);
  }

  registerResponsability(datas) {
    set(modalResponsabilityElements.inpNameResponsability, datas.name);
    set(modalResponsabilityElements.inpEmailResponsability, datas.email);
    set(modalResponsabilityElements.inpPhoneResponsability, datas.phone);
    click(modalResponsabilityElements.btnSaveResponsability);
  }

  validateShowMensagenErrorEmail(msg) {
    getEl(modalResponsabilityElements.pErrorEmailResponsability)
      .should('be.visible')
      .and('have.text', msg);
  } 

  validateShowMensagenErrorPhone(msg) { 
    getEl(modalResponsabilityElements.pErrorPhoneResponsability)
      .should('be.visible')
      .and('have.text', msg);
  }

  validateShowMensagenErrorName(msg) { 
    getEl(modalResponsabilityElements.pErrorNameResponsability)
      .should('be.visible')
      .and('have.text', msg);
  }

  validateShowMensagensError(msgs) {
    this.validateShowMensagenErrorEmail(msgs.email);
    this.validateShowMensagenErrorName(msgs.phone);
    this.validateShowMensagenErrorPhone(msgs.phone);
  };

}

export default new ModalResponsability();