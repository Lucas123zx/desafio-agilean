import TokenServices from '../services/token-services';
import ResponsabilityService from '../services/responsability-services';
import ActivityServices from '../services/activity-services';

export let responsability;
export let activitiesTotal;

let token = {
  email: Cypress.expose('email'),
  password: Cypress.expose('password')
};

beforeEach('Get responsabilities and get total activities', () => {
  TokenServices.postLogin(token).then((response) => {
    const user = response.body;

    ResponsabilityService.getResponsabilities(user).then((res) => {
      responsability = res.body[0];
    });

    ActivityServices.getActivities(user).then((res) => {
      activitiesTotal = res.body.length;
    });
  });
});