
import 'cypress-file-upload';

describe('Land Search', () => {
  before(() => {
    cy.login();
  });

  it('should display user information on the dashboard', () => {
    cy.url().should('include', '/user/home');
    cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');
    cy.contains('Services');
    cy.contains('Search').should('be.visible');
    cy.wait('@getUserProfile', { timeout: 10000 });
    cy.get('[routerLink="/user/MoLPP/registration/search/search-application"]').should('be.visible').click();
    cy.contains('Search Applications');
    cy.contains('button', 'New Application').should('be.visible').click();
    cy.contains('button', 'Next').click({ force: true });
    cy.contains('Search details').click();
 cy.get('button').contains('Add Parcel').should('be.visible').and('be.disabled');
    cy.get('input[formcontrolname="parcel_number"]').type('NAIROBI/BLOCK48/56');
    cy.contains('button', 'Add Parcel').should('be.visible').click();
    // a case where you add pn multiplle times
   
    cy.get('table').contains('td', 'NAIROBI/BLOCK48/56').should('be.visible');
//add action button
    cy.contains('Enter the purpose of search');
    cy.get('textarea[formcontrolname="purpose_of_search"]').type('personal');
    // cy.contains('radiobutton');

    cy.contains('Particulars of the subsisting entries in the register of the above-mentioned parcel');
    cy.contains('Particulars noted on the Property section / Proprietorship section');
    cy.contains('button', 'Next').click({ force: true });
        // cy.contains('button', 'Back').should('be.visible').click();
    cy.contains('Attach Documents');

    cy.contains('Upload: Certificate of title/Lease for: NAIROBI/BLOCK48/56');
    cy.contains('button', 'Choose file').should('be.visible').click();
    cy.get('input[type="file"]').attachFile('edit actor.png');
        // cy.contains('Title for NAIROBI/BLOCK48/56', { timeout: 10000 });

    cy.contains('Enter additional document name and upload (if any)');
    cy.get('input[id="file_input"]').type('password123');
    cy.get('button[id="upload_other_doc"]').click();
    cy.get('input[id="otherFiles"]').attachFile('edit actor.png');
    cy.get('table').contains('td', 'password123').should('be.visible');
//add remnove button

    cy.contains('button', 'Next').click({ force: true });
            // cy.contains('button', 'Back').should('be.visible').click();

    cy.contains('Confirmation');
    cy.get('table').contains('td', 'Maureen Njoki , ID NO. 31255929').should('be.visible');
    //add parcel details
    cy.contains('Attached Documents');
    cy.get('table').contains('td', 'Certificate of title/Lease : NAIROBI/BLOCK48/56').should('be.visible');
//then see the attached
    cy.get('button[id="submit_request"]').click();
    // cy.get('confirmation-dialog', { timeout: 10000 }).should('be.visible').contains('button[id="no"]');
    cy.get('confirmation-dialog', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.get('button[id="no"]').should('be.visible'); // Target the "no" button specifically
        cy.get('button[type="button"]').should('be.visible')
          .within(() => {
            cy.contains('Yes'); // Target the "no" button specifically
          }).click(); // Target the "no" button specifically

      });
    cy.get('div[role="dialog"]')
      .should('be.visible')
      .within(() => {
        cy.get('div.swal2-content')
        .should('exist')
        .within(() => {
          cy.contains('Application successfully submitted!'); // Check that it contains nested div elements
        });
      })
      .within(() => {
        cy.get('div.swal2-actions')
        .should('exist')
        .within(() => {
          cy.get('button[type="button"]').contains('Close').click(); // Check that it contains nested div elements
        }); // Check that it contains nested div elements
      })
      ;
      cy.contains('Search: Application');
      cy.contains('Application Invoices');

  });
});