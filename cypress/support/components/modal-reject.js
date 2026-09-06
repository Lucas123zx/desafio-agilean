import { modalRejectElements } from '../elements/modals';
import { click, getEl, set } from '../helpers/actions';

class ModalReject {

  clickBtnConfirmReject() {
    click(modalRejectElements.btnConfirmReject);
  }

  rejectActivity(motion) {
    set(modalRejectElements.txtMotionReject, motion);
    click(modalRejectElements.btnConfirmReject);
  }

  validateShowMensagenError(msg) {
    getEl(modalRejectElements.pErrorMotionReject)
      .should('be.visible')
      .and('have.text', msg);
  }

}

export default new ModalReject();