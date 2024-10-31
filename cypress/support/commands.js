Cypress.Commands.add('login', 
    (username = 'PB0B17M000', password = 'Test@123') => {
    cy.visit('/account/login'); // Visit the login page
  
    cy.get('input[id="emailOrPhone"]').type(username); // Type in the username
    cy.get('input[id="password"]').type(password); // Type in the password
  
    cy.intercept('POST', '/acl/api/v1/auth/login').as('loginRequest'); // Intercept the login request
    cy.get('button[type="submit"]').click(); // Click the login button
    cy.wait('@loginRequest'); // Wait for the login request to complete
    cy.get('button[type="submit"]').click();

  });
