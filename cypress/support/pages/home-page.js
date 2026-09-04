import { homeElements } from '../elements/home-elements';
import { click } from '../helpers/actions';

class HomePage { 

  clickBtnRegisterActivity() {
    click(homeElements.btnRegisterActivity);
  }

  listActivites() {
    return cy.get(homeElements.trLinhaActivity);
  }

  validateActivty(datas) {
    this.listActivites().last().within(($tr) => {
      cy.contains(datas.total).should('be.visible');
      cy.contains(datas.activity).should('be.visible');
      cy.contains(datas.responsability.nome).should('be.visible');
      cy.contains(datas.priority).should('be.visible');
      cy.contains(datas.status).should('be.visible');
    });
  }

  validateActivityLate(datas, text) {
    this.validateActivty(datas);
    cy.contains(text).should('be.visible');
  }

}

export default new HomePage();