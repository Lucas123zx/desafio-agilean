import { ApiTemplate } from '../consts/api/api-template';

class TokenService {

  constructor() {
    this.url = `${Cypress.expose('urlBack')}auth/v1/${ApiTemplate.Recourse.token}` ;
  }

  postLogin(body) {
    return cy.request(
      { 
        method: ApiTemplate.Method.POST,
        url: `${this.url}?grant_type=password`, 
        headers: {
          'apikey': Cypress.expose('supabaseKey'),
        },
        body: {
          gotrue_meta_security:{},
          ...body
        }
      }
    );

  }

}

export default new TokenService();