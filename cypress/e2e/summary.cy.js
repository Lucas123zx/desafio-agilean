import { activitiesTotal, responsability, user } from '../support/hooks/get-responsabilities-acvities';
import '../support/hooks/login-system';
import { generateNameActivity } from '../support/utils/gen-activity';
import { statusActivity, priorityActivity } from '../support/consts/datas';
import { converteDate } from '../support/utils/date';
import { credential } from '../support/config/credential';
import HomePage from '../support/pages/home-page';
import { screenShot } from '../support/helpers/actions';
import ModalActivity from '../support/components/modal-activity';

describe('Summary', () => {
  const date = new Date();
  let datasActivity = {
    status: statusActivity.inProgress,
    priority: priorityActivity.low,
    activity: generateNameActivity(),
    date: converteDate(date.setDate(date.getDate() + 1))
  };

  afterEach('screenshot', () => {
    screenShot();
  });

  describe('Total Activities Registers', () => {

    beforeEach('Modal register activity is open', () => {
      HomePage.clickBtnRegisterActivity();
    });  

    it('CT[22] - Validar incremento de Resumo "Cadastradas" após cadastrado uma atividade', () => {
      let totalActivitiesSummary = activitiesTotal.length + 1;
      let activityValid = {
        ...datasActivity,
        total: totalActivitiesSummary,
        responsability: responsability,
        status: statusActivity.inProgress,
      };

      ModalActivity.registerActivity(activityValid);

      HomePage.validateCountSummaryRegisters(totalActivitiesSummary);
    });

    it('CT[23] - Validar dencremento de Resumo "Cadastradas" após excluir uma atividade', () => {
      let totalActivitiesSummary = activitiesTotal.length - 1;
      let activityValid = {
        ...datasActivity,
        total: totalActivitiesSummary,
        responsability: responsability,
        status: statusActivity.inProgress,
      };

      ModalActivity.registerActivity(activityValid);
      HomePage.deleteActivity();

      HomePage.validateCountSummaryRegisters(totalActivitiesSummary);
    });

  });

  describe('Total Activities Resolved', () => {
    let activityValid = {
      ...datasActivity,
      status: statusActivity.inProgress,
    };

    beforeEach('Modal register activity is open', () => {
      HomePage.clickBtnRegisterActivity();
    });
    
    beforeEach('Create activity', () => {  
      activityValid.responsability = responsability,
      ModalActivity.registerActivity(activityValid);
      activityValid.total = activitiesTotal.length + 1;
    });

    it('CT[24] - Validar incremento de Resumo "Resolvidas" após alterar status de Atividade para "Resolvida" ', () => {
      let totalActivitiesResolvedSummary = activitiesTotal
        .filter((resolved) => resolved.status === statusActivity.resolved).length + 1;

      HomePage.changeStatusActivity({ status: statusActivity.resolved });
      
      HomePage.validateCountSummaryResolved(totalActivitiesResolvedSummary);
    });

    it('CT[34] - Validar decremento de resumo "Resolvidas" após excluir atividade com status "Resolvida" ', () => {
      let totalActivitiesResolvedSummary = activitiesTotal
        .filter((resolved) => resolved.status === statusActivity.resolved).length - 1;

      HomePage.changeStatusActivity({ status: statusActivity.resolved });
      HomePage.deleteActivity();

      HomePage.validateCountSummaryResolved(totalActivitiesResolvedSummary);
    });

  });

  describe('Total Activities Pending', () => {

    beforeEach('Modal register activity is open', () => {
      HomePage.clickBtnRegisterActivity();
    });  

    it('CT[25] - Validar incremento de Resumo "Pendentes" após cadastrar atividade com status "Não Iniciada" ', () => {
      let totalActivitiesPedingSummary = activitiesTotal.filter((activities) =>
        activities.status === statusActivity.notStarted ||
        activities.status === statusActivity.inProgress
      ).length + 1;
      let activityValid = {
        ...datasActivity,
        total: activitiesTotal.length + 1,
        responsability: responsability,
        status: statusActivity.inProgress,
      };

      ModalActivity.registerActivity(
        { 
          ...activityValid, 
          status: statusActivity.notStarted 
        }
      );

      HomePage.validateCountSummaryPeding(totalActivitiesPedingSummary);
    });

    it('CT[26] - Validar incremento de Resumo "Pendentes" após cadastrar atividade com status "Em andamento" ', () => {
      let totalActivitiesPedingSumarry = activitiesTotal.filter((activities) =>
        activities.status === statusActivity.notStarted ||
        activities.status === statusActivity.inProgress
      ).length + 1;
      let activityValid = {
        ...datasActivity,
        total: activitiesTotal.length + 1,
        responsability: responsability,
        status: statusActivity.inProgress,
      };

      ModalActivity.registerActivity(
        { 
          ...activityValid, 
          status: statusActivity.inProgress 
        }
      );

      HomePage.validateCountSummaryPeding(totalActivitiesPedingSumarry);
    });

    it('CT[35] - Validar decremento de resumo "Pendentes" após excluir atividade com status "Não Iniciada" ', () => {
      let totalActivitiesPedingSumarry = activitiesTotal.filter((activities) =>
        activities.status === statusActivity.notStarted ||
        activities.status === statusActivity.inProgress
      ).length - 1;
      let activityValid = {
        ...datasActivity,
        total: activitiesTotal.length + 1,
        responsability: responsability,
        status: statusActivity.inProgress,
      };

      ModalActivity.registerActivity(
        { 
          ...activityValid, 
          status: statusActivity.notStarted 
        }
      );
      HomePage.deleteActivity();

      HomePage.validateCountSummaryPeding(totalActivitiesPedingSumarry);
    });

    it('CT[36] - Validar decremento de resumo "Pendentes" após excluir atividade com status "Em andamento" ', () => {
      let totalActivitiesPedingSumarry = activitiesTotal.filter((activities) =>
        activities.status === statusActivity.notStarted ||
        activities.status === statusActivity.inProgress
      ).length - 1;
      let activityValid = {
        ...datasActivity,
        total: activitiesTotal.length + 1,
        responsability: responsability,
        status: statusActivity.inProgress,
      };
      
      ModalActivity.registerActivity(
        { 
          ...activityValid, 
          status: statusActivity.inProgress 
        }
      );
      HomePage.deleteActivity();

      HomePage.validateCountSummaryPeding(totalActivitiesPedingSumarry);
    });

  });

  describe('Total Activities Late', () => {

    beforeEach('Modal register activity is open', () => {
      HomePage.clickBtnRegisterActivity();
    });  

    it('CT[27] - Validar incremento de Resumo "Atrasada" após prazo de atividade expirado, com o status "Não Iniciada" ', () => {
      let totalActivitiesLateSumarry = activitiesTotal.filter((activities) =>
        activities.prazo < converteDate(date) &&
        (
          activities.status === statusActivity.notStarted ||
          activities.status === statusActivity.inProgress
        )
      ).length + 1;
      let activityLate = {
        ...datasActivity,
        responsability: responsability,
        date: converteDate(date.setDate(date.getDate() - 2))
      };

      ModalActivity.registerActivity(
        { 
          ...activityLate, 
          status: statusActivity.notStarted 
        }
      );

      HomePage.validateCountSummaryLate(totalActivitiesLateSumarry);
    });

    it('CT[28] - Validar incremento de Resumo "Atrasada" após prazo de atividade expirado, com o status "Em Andamento" ', () => {
      let totalActivitiesLateSumarry = activitiesTotal.filter((activities) =>
        activities.prazo < converteDate(date) &&
        (
          activities.status === statusActivity.notStarted ||
          activities.status === statusActivity.inProgress
        )
      ).length + 1;
      let activityLate = {
        ...datasActivity,
        responsability: responsability,
        date: converteDate(date.setDate(date.getDate() - 2))
      };

      ModalActivity.registerActivity(
        { 
          ...activityLate, 
          status: statusActivity.inProgress 
        }
      );

      HomePage.validateCountSummaryLate(totalActivitiesLateSumarry);
    });

    it('CT[37] - Validar decremento de resumo "Atrasada" após excluir atividade expirada ', () => {
      let totalActivitiesLateSumarry = activitiesTotal.filter((activities) =>
        activities.prazo < converteDate(date) &&
        (
          activities.status === statusActivity.notStarted ||
          activities.status === statusActivity.inProgress
        )
      ).length - 1;
      let activityLate = {
        ...datasActivity,
        responsability: responsability,
        date: converteDate(date.setDate(date.getDate() - 2))
      };

      ModalActivity.registerActivity(
        { 
          ...activityLate,  
        }
      );
      HomePage.deleteActivity();

      HomePage.validateCountSummaryLate(totalActivitiesLateSumarry);
    });

  });

  describe('Percentil graph', () => {
    /// indices graphs total: 0, resolved: 1, pending: 2

    it('CT[29] - Validar grafico de barra "cadastradas", contabiliza o total de atividades cadastradas ', () => {
      const totalActivitiesPercentage = 100;

      HomePage.validaPercentilTotal(totalActivitiesPercentage, 0);
    });

    it('CT[30] - Validar grafico de barra "Resolvidas", contabiliza as atividades com status "Resolvidas" ', () => {
      let totalActivitiesResolvedPercentage = Math.round(
        (
          activitiesTotal.filter(
            (activity) =>
              activity.status === statusActivity.resolved
          ).length / activitiesTotal.length
        ) * 100
      );

      HomePage.validaPercentilTotal(totalActivitiesResolvedPercentage, 1);
    });

    it('CT[32] - Validar grafico de barra "Pendentes", contabiliza as atividades com status "Não Iniciada" ', () => {
      let totalActivitiesPendingPercentage = Math.round(
        (
          activitiesTotal.filter(
            (activity) =>
              activity.status === statusActivity.inProgress ||
              activity.status === statusActivity.notStarted
          ).length / activitiesTotal.length
        ) * 100
      );

      HomePage.validaPercentilTotal(totalActivitiesPendingPercentage, 2);
    });

  });

});