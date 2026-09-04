function getEl(element) {
  return cy.get(element);
}

function waitElement(el) {
  try {
    getEl(el).should('be.visible');
  } catch (error) {
    cy.log('Exceção capturada: ' + error.message);
  }
}

function waitElementEnable(el) {
  try {
    getEl(el).should('be.enabled');
  } catch (error) {
    cy.log('Exceção capturada: ' + error.message);
  }
}

function waitElementIndex(el, index) {
  try {
    getEl(el).eq(index);
  } catch (error) {
    cy.log('Exceção capturada: ' + error.message);
  }
}

function set(el, text) {
  waitElement(el);
  try {
    getEl(el).type(text, { delay: 100 });
  } catch (error) {
    cy.log('Exceção capturada: ' + error.message);
  }
}

function click(el) {
  waitElement(el);
  try {
    getEl(el).click();
  } catch (error) {
    cy.log('Exceção capturada: ' + error.message);
  }
}

function check(el) {
  waitElement(el);
  try {
    getEl(el).check();
  } catch (error) {
    cy.log('Exceção capturada: ' + error.message);
  }
}

function clickElementEnabled(el) {
  waitElementEnable(el);
  try {
    getEl(el).click();
  } catch (error) {
    cy.log('Exceção capturada: ' + error.message);
  }
}

function clickIndex(el, index) {
  waitElementIndex(el, index);
  try {
    getEl(el).eq(index).click();
  } catch (error) {
    cy.log('Exceção capturada: ' + error.message);
  }
}

function clear(el) {
  waitElement(el);
  try {
    getEl(el).clear();
  } catch (error) {
    cy.log('Exceção capturada: ' + error.message);
  }
}

function getText(el, text) {
  waitElement(el);
  let textResult;
  try {
    textResult = getEl(el).contains(text).invoke('text');
  } catch (error) {
    cy.log('Exceção capturada: ' + error.message);
  }
  return textResult;
}

function scrollTo(el) {
  waitElement(el);
  try {
    getEl(el).scrollIntoView();
  } catch (error) {
    cy.log('Exceção capturada: ' + error.message);
  }
}

function select(el, valeu) {
  waitElement(el);
  try {
    getEl(el).select(valeu);
  } catch (error) {
    cy.log('Exceção capturada: ' + error.message);
  }
}

export {
  set, click, waitElement, waitElementIndex, clickIndex, check,
  clear, getText, scrollTo, select, waitElementEnable, 
  clickElementEnabled
};