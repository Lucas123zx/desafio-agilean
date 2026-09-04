import { activitiesTotal, responsability } from '../support/hooks/get-responsabilities-acvities.js';
import ModalAuth from '../support/components/modal-auth';
import ModalActivity from '../support/components/modal-activity';
import { statusActivity, priorityActivity } from '../support/consts/datas';
import { generateNameActivity } from '../support/utils/gen-activity';
import { converteDate } from '../support/utils/date';
import HomePage from '../support/pages/home-page';

describe('Register Activity', () => {
  let token = {
    email: Cypress.expose('email'),
    password: Cypress.expose('password')
  };
  const date = new Date();

  beforeEach('Access page', () => {
    cy.visit(Cypress.expose('url'));
  });

  beforeEach('Login', () => {
    ModalAuth.loginUser(token.email, token.password);
    HomePage.clickBtnRegisterActivity();
  });

  describe('Register Activities with "Success"', () => {

    it('CT[01] - Validar cadastro de atividade com dados válidos', () => {
      const datasActivity = {
        total: activitiesTotal + 1,
        status: statusActivity.inProgress,
        priority: priorityActivity.low,
        activity: generateNameActivity(),
        responsability: responsability,
        date: converteDate(date.setDate(date.getDate() + 1))
      };

      ModalActivity.registerActivity(datasActivity);

      HomePage.validateActivty(datasActivity);
    });

    it('CT[02] - Validar cadastro de atividade informando prazo menor que data atual.', () => {
      const txtAtrasada = 'Atrasada';
      const datasActivity = {
        total: activitiesTotal + 1,
        status: statusActivity.inProgress,
        priority: priorityActivity.low,
        activity: generateNameActivity(),
        responsability: responsability,
        date: converteDate(date.setDate(date.getDate() - 1))
      };

      ModalActivity.registerActivity(datasActivity);

      HomePage.validateActivityLate(datasActivity, txtAtrasada);
    });

    it('CT[03] - Validar cadastro de atividade informando prazo igual a data atual.', () => {
      const datasActivity = {
        total: activitiesTotal + 1,
        status: statusActivity.inProgress,
        priority: priorityActivity.low,
        activity: generateNameActivity(),
        responsability: responsability,
        date: converteDate(date)
      };

      ModalActivity.registerActivity(datasActivity);

      HomePage.validateActivty(datasActivity);
    });

    it('CT[04] - Validar cadastro de atividade informando no campo "Atividade" valor com 51 caracteres', () => {
      const datasActivity = {
        total: activitiesTotal + 1,
        status: statusActivity.inProgress,
        priority: priorityActivity.low,
        activity: 'A'.repeat(51),
        responsability: responsability,
        date: converteDate(date.setDate(date.getDate() + 1))
      };

      ModalActivity.registerActivity(datasActivity);
      //front-end maxLength 50, input "Atividade"
      datasActivity.activity = datasActivity.activity.substring(0, 50);
      
      HomePage.validateActivty(datasActivity);
    });

    it('CT[05] - Validar cadastro de atividade informando no campo "Atividade" valor com 50 caracteres', () => {
      const datasActivity = {
        total: activitiesTotal + 1,
        status: statusActivity.inProgress,
        priority: priorityActivity.low,
        activity: 'B'.repeat(50),
        responsability: responsability,
        date: converteDate(date.setDate(date.getDate() + 1))
      };

      ModalActivity.registerActivity(datasActivity);
      
      HomePage.validateActivty(datasActivity);
    });

    it('CT[06] - Validar cadastro de atividade informando no campo "Atividade" valor com 49 caracteres', () => {
      const datasActivity = {
        total: activitiesTotal + 1,
        status: statusActivity.inProgress,
        priority: priorityActivity.low,
        activity: 'D'.repeat(49),
        responsability: responsability,
        date: converteDate(date.setDate(date.getDate() + 1))
      };

      ModalActivity.registerActivity(datasActivity);
      
      HomePage.validateActivty(datasActivity);
    });

  });

});
