import { modalActivity } from '../elements/modals';
import { set, click, select } from '../helpers/actions';

class ModalActivity {

  registerActivity(data) {
    select(modalActivity.slcStatusActivity, data.status);
    select(modalActivity.slcPriorityActivity, data.priority);
    set(modalActivity.inpNameActivity, data.activity);
    select(modalActivity.slcResponsabilityActivity, data.responsability.id);
    set(modalActivity.inpTermActivity, data.date);
    click(modalActivity.btnRegisterActivity);
  }

}

export default new ModalActivity();