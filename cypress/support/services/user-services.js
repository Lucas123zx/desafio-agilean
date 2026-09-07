import { ApiTemplate } from '../consts/api/api-template';

class UserService {

  constructor() {
    this.url = `${Cypress.expose('urlBack')}auth/v1/${ApiTemplate.Recourse.signup}` ;
  }

  createUser(body) {
    return cy.request(
      { 
        method: ApiTemplate.Method.POST,
        url: this.url, 
        headers: {
          'apikey': Cypress.expose('supabaseKey'),
        },
        body: body
      }
    );
  }

}

export default new UserService();