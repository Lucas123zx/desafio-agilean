import { modalActivity } from '../elements/modals';
import { set, click, select, getEl } from '../helpers/actions';

class ModalActivity {

  clickBtnRegisterActivity() {
    click(modalActivity.btnRegisterActivity);
  }

  clickBtnCancelActivity() {
    click(modalActivity.btnCancelActivity);
  }

  clickBtnCloseActivity() {
    click(modalActivity.btnCloseModalActivity);
  }

  registerActivity(data) {
    select(modalActivity.slcStatusActivity, data.status);
    select(modalActivity.slcPriorityActivity, data.priority);
    set(modalActivity.inpNameActivity, data.activity);
    select(modalActivity.slcResponsabilityActivity, data.responsability.id);
    set(modalActivity.inpTermActivity, data.date);
    this.clickBtnRegisterActivity();
  }

  validateShowMensagensError(texts) {
    getEl(modalActivity.pErroNameActivity)
      .should('be.visible')
      .and('contain.text', texts.name);

    getEl(modalActivity.pErroReponsabilityActivity)
      .should('be.visible')
      .and('contain.text', texts.responsability);

    getEl(modalActivity.pErroTermActivity)
      .should('be.visible')
      .and('contain.text', texts.term);
  }

  validateShowCountCaracteres(text) {
    getEl(modalActivity.pCountActivity)
      .should('be.visible')
      .and('contain.text', text);
  }

}

export default new ModalActivity();