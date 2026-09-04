import { ApiTemplate } from '../consts/api/api-template';

class ActivityService {

  constructor() {
    this.url = `${Cypress.expose('urlBack')}rest/v1/${ApiTemplate.Recourse.activity}?select=*` ;
  }

  getActivities(datas) {
    return cy.request(
      { 
        method: ApiTemplate.Method.GET,
        url: `${this.url}&user_id=eq.${datas.user.id}&order=criado_em.asc`, 
        headers: {
          Authorization: `Bearer ${datas.access_token}`,
          'apikey': Cypress.expose('supabaseKey'),
        }
      }
    );

  }

  createActivity(body, datas) {
    return cy.request(
      { 
        method: ApiTemplate.Method.POST,
        url: `${this.url}`,
        headers: {
          Authorization: `Bearer ${datas.access_token}`,
          'apikey': Cypress.expose('supabaseKey'),
        },
        body: body
      }
    );
  }

}

export default new ActivityService();