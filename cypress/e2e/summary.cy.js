import { activitiesTotal, responsability } from '../support/hooks/get-responsabilities-acvities';
import '../support/hooks/login-system';
import ActivityServices from '../support/services/activity-services';
import { generateNameActivity } from '../support/utils/gen-activity';
import { statusActivity, priorityActivity } from '../support/consts/datas';
import { converteDate } from '../support/utils/date';
import TokenServices from '../support/services/token-services';
import { credential } from '../support/config/credential';
import HomePage from '../support/pages/home-page';
import { screenShot } from '../support/helpers/actions';
import { reload } from '../support/helpers/actions';

describe('Summary', () => {
  const date = new Date();
  let user;
  let datasActivity = {
    atividade: generateNameActivity(),
    motivo_rejeicao: null,
    prazo: converteDate(date.setDate(date.getDate() + 1)),
    prioridade: priorityActivity.low,
    status: statusActivity.notStarted,
  };

  beforeEach('Prepare datas for create activity', () => {
    TokenServices.postLogin(credential).then((res) => {
      const datasUser = res.body;
      user = datasUser;
      datasActivity.user_id = datasUser.user.id;
      datasActivity.responsavel_id = responsability.id;
    });
  });

  afterEach('screenshot', () => {
    screenShot();
  });

  describe('Total Activities Registers', () => {

    it('CT[22] - Validar incremento de Resumo "Cadastradas" após cadastrado uma atividade', () => {
      let totalActivitiesSumarry = activitiesTotal.length + 1;

      ActivityServices.createActivity(datasActivity, user);
      reload();

      HomePage.validateCountSummaryRegisters(totalActivitiesSumarry);
    });

    it('CT[23] - Validar dencremento de Resumo "Cadastradas" após excluir uma atividade', () => {
      let totalActivitiesSumarry = activitiesTotal.length;

      ActivityServices.createActivity(datasActivity, user).then((res) => {
        const activityForDelete = res.body[0].id;
        ActivityServices.deleteActivity({ id: activityForDelete }, user);
        reload();
      });

      HomePage.validateCountSummaryRegisters(totalActivitiesSumarry);
    });

  });

  describe('Total Activities Resolved', () => {
    let activityResolved = { status: statusActivity.resolved };

    beforeEach('Create activity', () => {
      ActivityServices.createActivity(datasActivity, user).then((res) => {
        activityResolved.id = res.body[0].id;
      });
    });

    it('CT[24] - Validar incremento de Resumo "Resolvidas" após alterar status de Atividade para "Resolvida" ', () => {
      let totalActivitiesResolvedSumarry = activitiesTotal
        .filter((resolved) => resolved.status === statusActivity.resolved).length + 1;

      ActivityServices.pathActivity(
        { status: activityResolved.status },
        user,
        activityResolved.id
      );
      reload();

      HomePage.validateCountSummaryResolved(totalActivitiesResolvedSumarry);
    });

    it('CT[34] - Validar decremento de resumo "Resolvidas" após excluir atividade com status "Resolvida" ', () => {
      let totalActivitiesResolvedSumarry = activitiesTotal
        .filter((resolved) => resolved.status === statusActivity.resolved).length - 1;
     
      ActivityServices.pathActivity(
        { status: activityResolved.status },
        user,
        activityResolved.id
      );
      ActivityServices.deleteActivity({ id: activityResolved.id }, user);
      reload();

      HomePage.validateCountSummaryResolved(totalActivitiesResolvedSumarry);
    });

  });

  describe.only('Total Activities Pending', () => {

    it('CT[25] - Validar incremento de Resumo "Pendentes" após cadastrar atividade com status "Não Iniciada" ', () => {
      let totalActivitiesPedingSumarry = activitiesTotal.filter((activities) =>
        activities.status === statusActivity.notStarted ||
        activities.status === statusActivity.inProgress
      ).length + 1;

      ActivityServices.createActivity(datasActivity, user);
      reload();

      HomePage.validateCountSummaryPeding(totalActivitiesPedingSumarry);
    });

    it('CT[26] - Validar incremento de Resumo "Pendentes" após cadastrar atividade com status "Em andamento" ', () => {
      let totalActivitiesPedingSumarry = activitiesTotal.filter((activities) =>
        activities.status === statusActivity.notStarted ||
        activities.status === statusActivity.inProgress
      ).length + 1;
      datasActivity.status = statusActivity.inProgress;

      ActivityServices.createActivity(datasActivity, user);
      reload();

      HomePage.validateCountSummaryPeding(totalActivitiesPedingSumarry);
    });

    it('CT[35] - Validar decremento de resumo "Pendentes" após excluir atividade com status "Não Iniciada" ', () => {
      let totalActivitiesPedingSumarry = activitiesTotal.filter((activities) =>
        activities.status === statusActivity.notStarted ||
        activities.status === statusActivity.inProgress
      ).length - 1;
      let activitiesPeding = activitiesTotal.find((activities) =>
        activities.status === statusActivity.notStarted
      );

      ActivityServices.deleteActivity({ id: activitiesPeding.id }, user);
      reload();

      HomePage.validateCountSummaryPeding(totalActivitiesPedingSumarry);
    });

    it('CT[36] - Validar decremento de resumo "Pendentes" após excluir atividade com status "Em andamento" ', () => {
      let totalActivitiesPedingSumarry = activitiesTotal.filter((activities) =>
        activities.status === statusActivity.notStarted ||
        activities.status === statusActivity.inProgress
      ).length - 1;
      let activitiesPeding = activitiesTotal.find((activities) =>
        activities.status === statusActivity.inProgress
      );

      ActivityServices.deleteActivity({ id: activitiesPeding.id }, user);
      reload();

      HomePage.validateCountSummaryPeding(totalActivitiesPedingSumarry);
    });

  });

  describe('Total Activities Late', () => {
    datasActivity.prazo = converteDate(date.setDate(date.getDate() - 1));

    it('CT[27] - Validar incremento de Resumo "Atrasada" após prazo de atividade expirado, com o status "Não Iniciada" ', () => {
      let totalActivitiesLateSumarry = activitiesTotal.filter((activities) =>
        activities.prazo < converteDate(date) &&
        (
          activities.status === statusActivity.notStarted ||
          activities.status === statusActivity.inProgress
        )
      ).length + 1;

      ActivityServices.createActivity(datasActivity, user);
      reload();

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
      datasActivity.status = statusActivity.inProgress;

      ActivityServices.createActivity(datasActivity, user);
      reload();

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
      let activitiesLates = activitiesTotal.find((activities) =>
        activities.prazo < converteDate(date) &&
        (
          activities.status === statusActivity.notStarted ||
          activities.status === statusActivity.inProgress
        )
      );

      ActivityServices.deleteActivity({ id: activitiesLates.id }, user);
      reload();

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