import { homeElements } from '../elements/home-elements';
import { modalActions } from '../elements/modals';
import { click, getEl } from '../helpers/actions';

class HomePage { 

  clickBtnRegisterActivity() {
    click(homeElements.btnRegisterActivity);
  }

  listActivites() {
    return cy.get(homeElements.trListActivities);
  }

  changeStatusActivity(datas) {
    getEl(homeElements.slcStatusActivity)
      .last()
      .select(datas.status);
  }

  deleteActivity() {
    getEl(homeElements.btnActionActivity)
      .last()
      .should('be.visible')
      .click();
    
    getEl(modalActions.btnDeleteActivity)
      .should('be.visible')
      .click();
  }

  validateActivity(datas) {
    this.listActivites().last().within(($tr) => {
      cy.contains(datas.total).should('be.visible').and('have.text', datas.total);
      cy.contains(datas.activity).should('be.visible').and('have.text', datas.activity);
      cy.contains(datas.responsability.nome).should('be.visible').and('have.text', datas.responsability.nome);
      cy.contains(datas.priority).should('be.visible').and('have.text', datas.priority);
      cy.contains(datas.status).should('be.visible').and('have.text', datas.status);
    });
  }

  validateActivityLate(datas, text) {
    this.validateActivity(datas);
    cy.contains(text).should('be.visible');
  }

  validateCountSummaryRegisters(total) {
    getEl(homeElements.divCardSummaryRegister)
    .should('be.visible')
    .find('p')
    .eq(1)
    .and('have.text', total);
  }

  validateCountSummaryResolved(total) {
    getEl(homeElements.divCardSummaryResolved)
    .should('be.visible')
    .find('p')
    .eq(1)
    .and('have.text', total);
  }

  validateCountSummaryPeding(total){
    getEl(homeElements.divCardSummaryPending)
    .should('be.visible')
    .find('p')
    .eq(1)
    .and('have.text', total);
  }

  validateCountSummaryLate(total){
    getEl(homeElements.divCardSummaryLate)
    .should('be.visible')
    .find('p')
    .eq(1)
    .and('have.text', total);
  }

  validaPercentilTotal(total, indice) {
    getEl('[data-cy="grafico-atividades"]')
      .should('be.visible')
      .find('.recharts-bar-rectangle')
      .eq(indice)
      .trigger('mouseover');

    getEl('.recharts-tooltip-item') 
      .should('be.visible')
      .and('contain.text', `${total}%`);
  }

  validateHome(email) {
    getEl(homeElements.h1AppTitle).should('be.visible');
    getEl(homeElements.spnEmailUser).should('be.visible').and('have.text', email);
    getEl(homeElements.divCardSummaryLate).should('be.visible');
    getEl(homeElements.divCardSummaryPending).should('be.visible');
    getEl(homeElements.divCardSummaryRegister).should('be.visible');
    getEl(homeElements.divCardSummaryResolved).should('be.visible');
  }

}

export default new HomePage();