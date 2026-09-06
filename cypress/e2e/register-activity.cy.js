import { activitiesTotal, responsability } from '../support/hooks/get-responsabilities-acvities';
import '../support/hooks/login-system';
import ModalAuth from '../support/components/modal-auth';
import ModalActivity from '../support/components/modal-activity';
import { statusActivity, priorityActivity } from '../support/consts/datas';
import { generateNameActivity } from '../support/utils/gen-activity';
import { converteDate } from '../support/utils/date';
import HomePage from '../support/pages/home-page';
import { screenShot } from '../support/helpers/actions';
import { credential } from '../support/config/credential';

describe('Register activity', () => {
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

  describe('Register activities with "Success"', () => {

    it('CT[01] - Validar cadastro de atividade com dados válidos', () => {
      let activityValid = {
        ...datasActivity,
        total: activitiesTotal.length + 1,
        responsability: responsability
      };

      ModalActivity.registerActivity(activityValid);

      HomePage.validateActivity(activityValid);
    });

    it('CT[02] - Validar cadastro de atividade informando prazo menor que data atual.', () => {
      const txtAtrasada = 'Atrasada';
      let activityLate = {
        total: activitiesTotal.length + 1,
        ...datasActivity,
        responsability: responsability,
        date: converteDate(date.setDate(date.getDate() - 1))
      };

      ModalActivity.registerActivity(activityLate);

      HomePage.validateActivityLate(activityLate, txtAtrasada);
    });

    it('CT[03] - Validar cadastro de atividade informando prazo igual a data atual.', () => {
      let activityToday = {
        total: activitiesTotal.length + 1,
        responsability: responsability,
        ...datasActivity,
        date: converteDate(date)
      };

      ModalActivity.registerActivity(activityToday);

      HomePage.validateActivity(activityToday);
    });

    it('CT[04] - Validar cadastro de atividade informando no campo "Atividade" valor com 51 caracteres', () => {
      let activityNameExtension = {
        total: activitiesTotal.length + 1,
        ...datasActivity,
        responsability: responsability,
        activity: 'A'.repeat(51),
      };

      ModalActivity.registerActivity(activityNameExtension);
      //front-end maxLength 50, input "Atividade"
      activityNameExtension.activity = activityNameExtension.activity.substring(0, 50);

      HomePage.validateActivity(activityNameExtension);
    });

    it('CT[05] - Validar cadastro de atividade informando no campo "Atividade" valor com 50 caracteres', () => {
      let activityNameMax = {
        total: activitiesTotal.length + 1,
        ...datasActivity,
        responsability: responsability,
        activity: 'B'.repeat(50),
      };

      ModalActivity.registerActivity(activityNameMax);

      HomePage.validateActivity(activityNameMax);
    });

    it('CT[06] - Validar cadastro de atividade informando no campo "Atividade" valor com 49 caracteres', () => {
      let activityNameRegular = {
        total: activitiesTotal.length + 1,
        ...datasActivity,
        responsability: responsability,
        activity: 'D'.repeat(49),
      };

      ModalActivity.registerActivity(activityNameRegular);

      HomePage.validateActivity(activityNameRegular);
    });

  });

  describe('Register activities with "Error"', () => {

    it('CT[07] - Validar mensagem de "obrigatoriedade" ao cadastrar atividade sem informar campos obrigatórios', () => {
      const mensagens = {
        name: 'Atividade é obrigatória',
        responsability: 'Responsável é obrigatório',
        term: 'Prazo é obrigatório'
      };

      ModalActivity.clickBtnRegisterActivity();

      ModalActivity.validateShowMensagensError(mensagens);
    });

  });

  describe('Modal activity interface', () => {

    it('CT[08] - Validar exibição de contador de caracteres em campo "atividade"', () => {
      const textCount = '0/50';

      ModalActivity.validateShowCountCaracters(textCount);
    });

    it('CT[09] - Validar o cancelamento ao cadastrar Atividade', () => {
      const email = credential.email;

      ModalActivity.clickBtnCancelActivity();

      HomePage.validateHome(email);
    });

    it('CT[10] - Validar o fechamento da modal de cadastro de Atividade', () => {
      const email = credential.email;

      ModalActivity.clickBtnCloseActivity();

      HomePage.validateHome(email);
    });

  });

});
