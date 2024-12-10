
import 'cypress-file-upload';

describe('Make Application to object Caution Removal', () => {
  beforeEach(() => {
    cy.login();
    cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');

  });


  it('login and dashboard display ', () => {
    cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');
  });
  //different ways of getting to caution in the dash page either throur search of view more
  it('navigation to Removal of Caution new application page', () => {
    cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');    //after login you can view dashboard and get use details for the profile setup
    cy.contains('Services');

    //must be advocate
    cy.wait('@getUserProfile', { timeout: 10000 }).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.get('div[fxflex="20"]')
      .find('img.personal_acc_icon')
      .click();
    cy.contains('span', 'Advocate Account')
      .click();
    cy.contains('View More').click(); ///to be checked

    //navigate to Removal of Caution
    cy.contains('Caution').should('be.visible').click();
    // cy.get('table').contains('td', 'Removal of Caution').should('be.visible').click();
    cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
    cy.contains('button', 'New Application').should('be.visible').click();
    cy.contains('Removal of Caution: New Application');
  });
  it('execute search through ardhisasaID to successfully add applicant detail', () => {
    cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');
    cy.contains('Services');

    //must be advocate
    cy.wait('@getUserProfile', { timeout: 10000 }).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.get('div[fxflex="20"]')
      .find('img.personal_acc_icon')
      .click();
    cy.contains('span', 'Advocate Account')
      .click();
    cy.contains('View More').click(); ///to checked

    //navigate to Caution Removal page
    cy.contains('Caution').should('be.visible').click();
    cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
    cy.contains('button', 'New Application').should('be.visible').click();
    cy.contains('Removal of Caution: New Application');
    cy.contains('FAQs');
    cy.contains('button', 'Next').click({ force: true });
    // cy.contains('mat-step-header', 'Proprietorship details').click();

    //enter Proprietor  details
    cy.contains('Proprietor details');
    cy.get('input[formcontrolname="user_name"]').type('P000001');
    cy.contains('button.search_btn', 'Search')
      .click({ force: true });
    cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
      .should('be.visible')
      .contains('Person To Execute');
    cy.get('mat-radio-button[value="SELF"]')
      .should('be.visible')
      .click();
    cy.contains('button.add_advocate_btn', 'Save')
      .click({ force: true });
    cy.get('table').contains('td', 'Dennis Waweru').should('be.visible');
  });
  it('successfully remove added cautioner detail', () => {
    cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');    //after login you can view dashboard and get use details for the profile setup
    cy.contains('Services');

    //must be advocate
    cy.wait('@getUserProfile', { timeout: 10000 }).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.get('div[fxflex="20"]')
      .find('img.personal_acc_icon')
      .click();
    cy.contains('span', 'Advocate Account')
      .click();
    cy.contains('View More').click();

    //navigate to object Caution Removal page
    cy.contains('Caution').should('be.visible').click();
    cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
    cy.contains('button', 'New Application').should('be.visible').click();
    cy.contains('Removal of Caution: New Application');
    cy.contains('FAQs');
    cy.contains('button', 'Next').click({ force: true });
    // cy.contains('mat-step-header', 'Proprietorship details').click();

    //enter Cautioner details
    cy.contains('Proprietor details');
    cy.get('input[formcontrolname="user_name"]').type('P000001');
    cy.contains('button.search_btn', 'Search')
      .click({ force: true });
    cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
      .should('be.visible')
      .contains('Person To Execute');
    cy.get('mat-radio-button[value="SELF"]')
      .should('be.visible')
      .click();
    cy.contains('button.add_advocate_btn', 'Save')
      .click({ force: true });
    cy.get('table').contains('button', 'Remove').should('be.visible')
      .click();
  });
  it('successfull addition of proprietor details', () => {
    // cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');    //after login you can view dashboard and get use details for the profile setup
    // cy.contains('Services');

    // //must be advocate
    // cy.wait('@getUserProfile', { timeout: 10000 }).then((interception) => {
    //   expect(interception.response.statusCode).to.equal(200);
    // });
    // cy.get('div[fxflex="20"]')
    //   .find('img.personal_acc_icon')
    //   .click();
    // cy.contains('span', 'Advocate Account')
    //   .click();
    // cy.contains('View More').click();

    // //navigate to object Caution Removal page
    // cy.contains('Caution').should('be.visible').click();
    // cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
    // cy.contains('button', 'New Application').should('be.visible').click();
    // cy.contains('Removal of Caution: New Application');
    // cy.contains('FAQs');
    // cy.contains('button', 'Next').click({ force: true });
    // // cy.contains('mat-step-header', 'Proprietorship details').click();

    // //enter Proprietor details
    // cy.contains('Proprietor details');
    // //  cy.get('radio_btn[value="INDIVIDUAL"]').click();
    // cy.contains('div', 'Select category of proprietor')
    //   .within(() => {
    //     cy.get('input[formcontrolname="names"]').type('P000001');
    //     cy.get('input[formcontrolname="identification_number"]').type('P000001');
    //     cy.get('input[formcontrolname="phone_number"]').type('0720232125');
    //     cy.get('button.mat-raised-button').click();
    //     // .should('be.visible')  
    //   });
    // cy.get('table').contains('td', 'P000001').should('be.visible');
  });
});