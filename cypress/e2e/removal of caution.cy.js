
import 'cypress-file-upload';

describe('Make Application to object Caution Removal', () => {
  beforeEach(() => {
    cy.login();
    cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');

  });
  it('login and dashboard display ', () => {
    cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');    //after login you can view dashboard
  });

  //different ways of getting to caution and diff ways of getting to  caution in the dash page either throur search of view more
  // it('navigation to object Caution Removal new application page', () => {
  //   cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');    //after login you can view dashboard and get use details for the profile setup
  //   cy.contains('Services');

  //   //must be advocate
  //   cy.wait('@getUserProfile', { timeout: 10000 }).then((interception) => {
  //     expect(interception.response.statusCode).to.equal(200);
  //   });
  //   cy.get('div[fxflex="20"]')
  //     .find('img.personal_acc_icon') 
  //     .click();
  //   cy.contains('span', 'Advocate Account')  
  //     .click();   
  //   cy.contains('View More').click(); ///to checked

  //   //navigate to caution application page
  //   cy.contains('Caution').should('be.visible').click();
  //   cy.get('table').contains('td', 'Caution').should('be.visible').click();
  //   cy.contains('button', 'New Application').should('be.visible').click();
  //   cy.contains('FAQs') ;
  // });

  it('successfull flow of application of a new caution application', () => {
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
    // cy.get('div.acc_menu_item')
    // .should('be.visible') // Verify the div is visible
    // .and('contain.text', 'Advocate Account').click({ multiple: true });
    // cy.contains('Caution').should('be.visible').click();
    cy.contains('View More').click(); ///to checked

    //navigate to caution application page
    // cy.get('input[formcontrolname="stateGroup"]').type('caution');
    cy.contains('Caution').should('be.visible').click();
    cy.get('table').contains('td', 'Objection to Removal of Caution').should('be.visible').click();
    cy.contains('button', 'New Application').should('be.visible').click();
    cy.contains('FAQs') ;

    cy.contains('button', 'Next').click({ force: true });
    // cy.contains('mat-step-header', 'Proprietorship details').click();
});
});