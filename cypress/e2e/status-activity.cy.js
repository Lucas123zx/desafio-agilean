import { responsability, activitiesTotal, user } from '../support/hooks/get-responsabilities-acvities';
import '../support/hooks/login-system';
import HomePage from '../support/pages/home-page';
import { generateNameActivity } from '../support/utils/gen-activity';
import { converteDate } from '../support/utils/date';
import { priorityActivity, statusActivity } from '../support/consts/datas';
import { screenShot } from '../support/helpers/actions';
import { credential } from '../support/config/credential';
import modalActivity from '../support/components/modal-activity';
import ModalReject from '../support/components/modal-reject';

describe('Status activity', () => {
  const date = new Date();
  let datasActivity = {
    status: statusActivity.inProgress,
    priority: priorityActivity.low,
    activity: generateNameActivity(),
    date: converteDate(date.setDate(date.getDate() + 1))
  };

  beforeEach('Modal register activity is open', () => {
    HomePage.clickBtnRegisterActivity();
  });

  afterEach('screenshot', () => {
    screenShot();
  });

  describe('Change status activity with "Success"', () => {

    it('CT[38] - Validar alteração de Status de Atividade para "Não Iniciada"', () => {
      const activity = {
        ...datasActivity,
        total: activitiesTotal.length + 1,
        responsability: responsability,
        status: statusActivity.inProgress,
      };
      modalActivity.registerActivity(activity);

      HomePage.changeStatusActivity(
        {
          index: activitiesTotal.length - 1,
          status: statusActivity.notStarted
        }
      );

      HomePage.validateActivity({ ...activity, status: statusActivity.notStarted });
    });

    it('CT[39] - Validar alteração de Status de Atividade para "Em Andamento"', () => {
      const activity = {
        ...datasActivity,
        total: activitiesTotal.length + 1,
        responsability: responsability,
        status: statusActivity.notStarted,
      };
      modalActivity.registerActivity(activity);

      HomePage.changeStatusActivity(
        {
          index: activitiesTotal.length - 1,
          status: statusActivity.inProgress
        }
      );

      HomePage.validateActivity({ ...activity, status: statusActivity.inProgress });
    });

    it('CT[40] - Validar alteração de Status de Atividade para "Resolvida"', () => {
      const activity = {
        ...datasActivity,
        total: activitiesTotal.length + 1,
        responsability: responsability,
        status: statusActivity.inProgress,
      };
      modalActivity.registerActivity(activity);

      HomePage.changeStatusActivity(
        {
          index: activitiesTotal.length - 1,
          status: statusActivity.resolved
        }
      );

      HomePage.validateActivity({ ...activity, status: statusActivity.resolved });
    });

    it('CT[41] - Validar alteração de Status de Atividade para "Rejeitada"', () => {
      const activity = {
        ...datasActivity,
        total: activitiesTotal.length + 1,
        responsability: responsability,
        status: statusActivity.inProgress,
      };
      modalActivity.registerActivity(activity);

      HomePage.changeStatusActivity(
        {
          index: activitiesTotal.length - 1,
          status: statusActivity.rejected
        }
      );
      ModalReject.rejectActivity('Rejeitada com sucesso!');

      HomePage.validateActivity({ ...activity, status: statusActivity.rejected });
    });

    it('CT[43] - Validar mensagem de campo "obrigatório" ao rejeitar atividade sem informar motivo', () => {
      const activity = {
        ...datasActivity,
        total: activitiesTotal.length + 1,
        responsability: responsability,
        status: statusActivity.inProgress,
      };
      modalActivity.registerActivity(activity);

      HomePage.changeStatusActivity(
        {
          index: activitiesTotal.length - 1,
          status: statusActivity.rejected
        }
      );
      ModalReject.clickBtnConfirmReject();
      
      ModalReject.validateShowMensagenError('Informe o motivo da rejeição');
    });

  });

});