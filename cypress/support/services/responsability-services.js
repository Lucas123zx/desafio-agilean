import { ApiTemplate } from '../consts/api/api-template';

class ResponsabilityService {

  constructor() {
    this.url = `${Cypress.expose('urlBack')}rest/v1/${ApiTemplate.Recourse.reponsability}?select=*` ;
  }

  getResponsabilities(datas) {
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

  createResposanbility(body, datas) {
    return cy.request(
      { 
        method: ApiTemplate.Method.POST,
        url: this.url,
        headers: {
          Authorization: `Bearer ${datas.access_token}`,
          'apikey': Cypress.expose('supabaseKey'),
        },
        body: body
      }
    );
  }

  verifyHasResposanbility(datas, body) {
    return this.getResponsabilities(datas).then((response) => {      
      const total = response.body.length;

      if(total === 0) {
        return this.createResposanbility(body, datas)
        .then((newResponse) => { newResponse.body; });
      }

      return response.body[0];
    });
  }

}

export default new ResponsabilityService();