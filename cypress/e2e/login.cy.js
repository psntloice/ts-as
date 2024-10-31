//should have a base url

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/account/login'); // Replace with your login page path
  });

  it('input fields and continue button', () => {
    cy.get('input[id="emailOrPhone"]').should('exist').and('have.attr', 'placeholder', 'Enter Identification number').and('be.visible').and('have.value', '');
    cy.get('input[id="password"]').should('exist').and('be.visible').and('have.attr', 'placeholder', 'Enter password').and('be.visible').and('have.value', '');
    cy.get('button[type="submit"]').should('exist').and('be.visible').and('be.disabled');
  });
  it('displays errors for empty fields when trying to login', () => {
     cy.get('button[type="submit"]').should('be.disabled');
     cy.get('input[id="emailOrPhone"]').type('test@example.com');
     cy.get('button[type="submit"]').should('be.disabled');
     cy.get('input[id="password"]').type('password123');
     cy.get('button[type="submit"]').should('not.be.disabled');
     cy.get('button[type="submit"]').click();
  });
    it('displays errors for empty fields when trying to login', () => {
      cy.get('button[type="submit"]').should('be.disabled');
      cy.get('input[id="emailOrPhone"]').type('test@example.com');
      cy.get('button[type="submit"]').should('be.disabled');
      cy.get('input[id="password"]').type('password123');
      cy.get('button[type="submit"]').should('not.be.disabled');
      cy.get('button[type="submit"]').click();
   });
   it('incorrect credentials', () => {
    cy.get('input[id="emailOrPhone"]').type('test@example.com');
    cy.get('input[id="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid Username or Password').should('be.visible'); 
  });
  it('should log in successfully with valid credentials and OTP', () => {
    cy.intercept('POST', '/acl/api/v1/auth/login').as('loginRequest');
    cy.get('input[id="emailOrPhone"]').type('PB0B17M000');
    cy.get('input[id="password"]').type('Test@123');
    cy.get('button[type="submit"]').click();
    cy.wait('@loginRequest').then((interception) => {
      expect(interception.request.body).to.include({
        username: 'PB0B17M000',
        password: 'Test@123',
        otpcode: '',
        usertype: 'publicuser', 
      });
    });
    cy.contains('OTP Code').should('be.visible');
    cy.get('input[id="otpcode"]', { timeout: 10000 }) .should('exist') .and('be.visible') 
    .then(($input) => {
      cy.wrap($input).should(($input) => {
        const otpValue = $input.val(); 
        expect(otpValue).to.not.be.empty;
        expect(otpValue).to.match(/^\d{1,6}$/); 
      });
    });
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/user/home');
    // cy.contains('Services').should('be.visible');

  });
})
