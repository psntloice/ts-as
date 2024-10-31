
describe('Land Search', () => {
  before(() => {
    cy.login(); 
  });

  it('should display user information on the dashboard', () => {
    cy.url().should('include', '/user/home');
    cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');
    cy.contains('Services'); 
    cy.contains('Search').should('be.visible');
    cy.wait('@getUserProfile');
    cy.get('[routerLink="/user/MoLPP/registration/search/search-application"]').should('be.visible').click();
    cy.contains('Search Applications');
    cy.contains('button', 'New Application').should('be.visible').click();
cy.contains('Search details').click();
cy.get('input[formcontrolname="parcel_number"]').type('test@example.com');
cy.get('input[formcontrolname="purpose_of_search"]').type('password123');
// cy.get('button[type="submit"]').click();
   });
});