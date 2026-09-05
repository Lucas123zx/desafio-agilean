import { modalActivityElements } from '../elements/modals';
import { set, click, select, getEl } from '../helpers/actions';

class ModalActivity {

  clickBtnRegisterActivity() {
    click(modalActivityElements.btnRegisterActivity);
  }

  clickBtnCancelActivity() {
    click(modalActivityElements.btnCancelActivity);
  }

  clickBtnCloseActivity() {
    click(modalActivityElements.btnCloseModalActivity);
  }

  clickBtnAddReponsability() {
    click(modalActivityElements.btnAddResponsabilityActivity);
  }

  registerActivity(data) {
    select(modalActivityElements.slcStatusActivity, data.status);
    select(modalActivityElements.slcPriorityActivity, data.priority);
    set(modalActivityElements.inpNameActivity, data.activity);
    select(modalActivityElements.slcResponsabilityActivity, data.responsability.id);
    set(modalActivityElements.inpTermActivity, data.date);
    this.clickBtnRegisterActivity();
  }

  validateShowMensagensError(texts) {
    getEl(modalActivityElements.pErroNameActivity)
      .should('be.visible')
      .and('contain.text', texts.name);

    getEl(modalActivityElements.pErroReponsabilityActivity)
      .should('be.visible')
      .and('contain.text', texts.responsability);

    getEl(modalActivityElements.pErroTermActivity)
      .should('be.visible')
      .and('contain.text', texts.term);
  }

  validateShowCountCaracters(text) {
    getEl(modalActivityElements.pCountActivity)
      .should('be.visible')
      .and('contain.text', text);
  }

  validateShowNameResponsability(datas) {
    getEl(modalActivityElements.slcResponsabilityActivity)
      .find('option:selected')
      .should('have.text', datas.label);
  }
  
  validateShowModalActivity(text) {
    getEl(modalActivityElements.divModalActivity)
      .should('be.visible')
      .and('contain.text', text);
  }

}

export default new ModalActivity();