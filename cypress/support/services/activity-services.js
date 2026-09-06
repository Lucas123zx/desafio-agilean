import { ApiTemplate } from '../consts/api/api-template';

class ActivityService {

  constructor() {
    this.url = `${Cypress.expose('urlBack')}rest/v1/${ApiTemplate.Recourse.activity}` ;
  }

  getActivities(datas) {
    return cy.request(
      { 
        method: ApiTemplate.Method.GET,
        url: `${this.url}?select=*&user_id=eq.${datas.user.id}&order=criado_em.asc`, 
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
        url: `${this.url}?select=*`,
        headers: {
          Authorization: `Bearer ${datas.access_token}`,
          Prefer: 'return=representation',
          'apikey': Cypress.expose('supabaseKey'),
        },
        body: body
      }
    );
  }

  pathActivity(body, datas, id) {
    return cy.request(
      { 
        method: ApiTemplate.Method.PATCH,
        url: `${this.url}?id=eq.${id}`,
        headers: {
          Authorization: `Bearer ${datas.access_token}`,
          'apikey': Cypress.expose('supabaseKey'),
        },
        body: body
      }
    );
  }

  deleteActivity(body, datas) {
    return cy.request(
      { 
        method: ApiTemplate.Method.DELETE,
        url: `${this.url}?id=eq.${body.id}`,
        headers: {
          Authorization: `Bearer ${datas.access_token}`,
          'apikey': Cypress.expose('supabaseKey'),
        },
      }
    );
  }

}

export default new ActivityService();