import { homeElements } from '../elements/home-elements';
import { click, getEl } from '../helpers/actions';

class HomePage { 

  clickBtnRegisterActivity() {
    click(homeElements.btnRegisterActivity);
  }

  listActivites() {
    return cy.get(homeElements.trLinhaActivity);
  }

  validateActivity(datas) {
    this.listActivites().last().within(($tr) => {
      cy.contains(datas.total).should('be.visible');
      cy.contains(datas.activity).should('be.visible');
      cy.contains(datas.responsability.nome).should('be.visible');
      cy.contains(datas.priority).should('be.visible');
      cy.contains(datas.status).should('be.visible');
    });
  }

  validateActivityLate(datas, text) {
    this.validateActivity(datas);
    cy.contains(text).should('be.visible');
  }

  validateHome(email) {
    this.listActivites().should('be.visible');
    getEl(homeElements.h1AppTitle).should('be.visible');
    getEl(homeElements.spnEmailUser).should('be.visible').and('contain.text', email);
    getEl(homeElements.divCardSummaryLate).should('be.visible');
    getEl(homeElements.divCardSummaryPending).should('be.visible');
    getEl(homeElements.divCardSummaryRegister).should('be.visible');
    getEl(homeElements.divCardSummaryResolved).should('be.visible');
  }

}

export default new HomePage();