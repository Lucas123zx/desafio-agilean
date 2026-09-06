import TokenServices from '../services/token-services';
import ResponsabilityService from '../services/responsability-services';
import ActivityServices from '../services/activity-services';
import { credential } from '../config/credential';
import { generateReponsability } from '../utils/gen-responsability';

export let responsability;
export let activitiesTotal;

beforeEach('Get responsabilities and get total activities', () => {
  TokenServices.postLogin(credential).then((response) => {
    const datasUser = response.body;
    const datasNewResponsability = generateReponsability();
    const newResponsability = {
      email: datasNewResponsability.email,
      nome: datasNewResponsability.name,
      telefone: datasNewResponsability.phone,
      user_id: datasUser.user.id
    }; 

    ResponsabilityService.verifyHasResposanbility(datasUser, newResponsability)
    .then((datasResponsability) => {
      responsability = datasResponsability;
    });

    ActivityServices.getActivities(datasUser).then((res) => {
      activitiesTotal = res.body;
    });
  });
});