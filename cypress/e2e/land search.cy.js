
import 'cypress-file-upload';

describe('Make Application Land Search', () => {
  beforeEach(() => {
    cy.login();
    cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');

  });

  it('login and dashboard display ', () => {
    //after login you can view dashboard
    cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');
  });
 
  it('navigation to new application page', () => {
    //after login you can view dashboard
    cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');
    cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');
    cy.contains('Services');
    cy.contains('Search').should('be.visible');

    //get use details for the profile setup
    cy.wait('@getUserProfile', { timeout: 10000 }).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.get('[routerLink="/user/MoLPP/registration/search/search-application"]').should('be.visible').click();

    //get to search application page
    cy.contains('Search Applications');
    cy.contains('button', 'New Application').should('be.visible').click();
  });

  it('correct parcel entry and search', () => {
    //after login you can view dashboard
    cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');
    cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');
    cy.contains('Services');
    cy.contains('Search').should('be.visible');

    //get use details for the profile setup
    cy.wait('@getUserProfile', { timeout: 20000 }).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.get('[routerLink="/user/MoLPP/registration/search/search-application"]').should('be.visible').click();

    //get to search application page
    cy.contains('Search Applications');
    cy.contains('button', 'New Application').should('be.visible').click();
    // cy.contains('button', 'Next').click({ force: true });

    //enter search details
    cy.contains('Search details').click();
    //  cy.get('button').contains('Add Parcel').should('be.visible').and('be.disabled');
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

  });
  it('successful document attachments to the parcel', { retries: 2 }, () => {
    //after login you can view dashboard
    cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');
    cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');
    cy.contains('Services');
    cy.contains('Search').should('be.visible');

    //get use details for the profile setup
    cy.wait('@getUserProfile', { timeout: 20000 }).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.get('[routerLink="/user/MoLPP/registration/search/search-application"]').should('be.visible').click();

    //get to search application page
    cy.contains('Search Applications');
    cy.contains('button', 'New Application').should('be.visible').click();
    // cy.contains('button', 'Next').click({ force: true });

    //enter search details
    cy.contains('Search details').click();
    //  cy.get('button').contains('Add Parcel').should('be.visible').and('be.disabled');
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

    //attach documents
    cy.contains('Attach Documents');
    cy.contains('Upload: Certificate of title/Lease for: NAIROBI/BLOCK48/56');
    cy.contains('button', 'Choose file').should('be.visible').click();
    cy.get('input[type="file"]').attachFile('edit actor.png');
    cy.contains('Title for NAIROBI/BLOCK48/56', { timeout: 10000 });
    cy.contains('Enter additional document name and upload (if any)');
    cy.get('input[id="file_input"]').type('password123');
    cy.get('button[id="upload_other_doc"]').click();
    cy.get('input[id="otherFiles"]').attachFile('edit actor.png');
    cy.get('table').contains('td', 'password123').should('be.visible');
    //add remnove button
    cy.contains('button', 'Next').click({ force: true });
    // cy.contains('button', 'Back').should('be.visible').click();

    //view and confirmation
    cy.contains('Confirmation');
    cy.get('table').contains('td', 'Maureen Njoki , ID NO. 31255929').should('be.visible');
    cy.contains('Attached Documents');
    cy.get('table').contains('td', 'Certificate of title/Lease : NAIROBI/BLOCK48/56').should('be.visible');
  });

  it('incase of user wrongly triggers submission', () => {
    //after login you can view dashboard
    cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');
    cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');
      //get use details for the profile setup
      cy.wait('@getUserProfile', { timeout: 20000 }).then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
      });
    cy.contains('Services');
    cy.contains('Search').should('be.visible');

  
    cy.get('[routerLink="/user/MoLPP/registration/search/search-application"]').should('be.visible').click();

    //get to search application page
    cy.contains('Search Applications');
    cy.contains('button', 'New Application').should('be.visible').click();
    // cy.contains('button', 'Next').click({ force: true });

    //enter search details
    cy.contains('Search details').click();
    //  cy.get('button').contains('Add Parcel').should('be.visible').and('be.disabled');
    cy.get('input[formcontrolname="parcel_number"]').type('NAIROBI/BLOCK48/56');
    cy.contains('button', 'Add Parcel').should('be.visible').click();
    // a case where you add pn multiplle times
    cy.get('table').contains('td', 'NAIROBI/BLOCK48/56', { timeout: 10000 }).should('be.visible');
    //add action button
    cy.contains('Enter the purpose of search');
    cy.get('textarea[formcontrolname="purpose_of_search"]').type('personal');
    // cy.contains('radiobutton');
    cy.contains('Particulars of the subsisting entries in the register of the above-mentioned parcel');
    cy.contains('Particulars noted on the Property section / Proprietorship section');
    cy.contains('button', 'Next').click({ force: true });
    // cy.contains('button', 'Back').should('be.visible').click();

    //attach documents
    cy.contains('Attach Documents');
    cy.contains('Upload: Certificate of title/Lease for: NAIROBI/BLOCK48/56');
    cy.contains('button', 'Choose file').should('be.visible').click();
    cy.get('input[type="file"]').attachFile('edit actor.png');
    cy.contains('Title for NAIROBI/BLOCK48/56', { timeout: 10000 });
    cy.contains('Enter additional document name and upload (if any)');
    cy.get('input[id="file_input"]').type('password123');
    cy.get('button[id="upload_other_doc"]').click();
    cy.get('input[id="otherFiles"]').attachFile('edit actor.png');
    cy.get('table').contains('td', 'password123').should('be.visible');
    //add remnove button
    cy.contains('button', 'Next').click({ force: true });
    // cy.contains('button', 'Back').should('be.visible').click();

    //view and confirmation
    cy.contains('Confirmation');
    cy.get('table').contains('td', 'Maureen Njoki , ID NO. 31255929').should('be.visible');
    cy.contains('Attached Documents');
    cy.get('table').contains('td', 'Certificate of title/Lease : NAIROBI/BLOCK48/56').should('be.visible');
    cy.get('button[id="submit_request"]').click();

    // confirmation dialog
    cy.get('confirmation-dialog', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.get('button[id="no"]').should('be.visible').click();
      });
    cy.contains('Confirmation');
  });

  it('make payments meaning a succesful make search application ', () => {
    //after login you can view dashboard
    cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');
    cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');
    cy.contains('Services');
    cy.contains('Search').should('be.visible');

    //get use details for the profile setup
    cy.wait('@getUserProfile', { timeout: 30000 }).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.get('[routerLink="/user/MoLPP/registration/search/search-application"]').should('be.visible').click();

    //get to search application page
    cy.contains('Search Applications');
    cy.contains('button', 'New Application').should('be.visible').click();
    // cy.contains('button', 'Next').click({ force: true });

    //enter search details
    cy.contains('Search details').click();
    //  cy.get('button').contains('Add Parcel').should('be.visible').and('be.disabled');
    cy.get('input[formcontrolname="parcel_number"]').type('NAIROBI/BLOCK48/56');
    cy.contains('button', 'Add Parcel').should('be.visible').click();
    // a case where you add pn multiplle times
    cy.get('table').contains('td', 'NAIROBI/BLOCK48/56', { timeout: 10000 }).should('be.visible');
    //add action button
    cy.contains('Enter the purpose of search');
    cy.get('textarea[formcontrolname="purpose_of_search"]').type('personal');
    // cy.contains('radiobutton');
    cy.contains('Particulars of the subsisting entries in the register of the above-mentioned parcel');
    cy.contains('Particulars noted on the Property section / Proprietorship section');
    cy.contains('button', 'Next').click({ force: true });
    // cy.contains('button', 'Back').should('be.visible').click();

    //attach documents
    cy.contains('Attach Documents');
    cy.contains('Upload: Certificate of title/Lease for: NAIROBI/BLOCK48/56');
    cy.contains('button', 'Choose file').should('be.visible').click();
    cy.get('input[type="file"]').attachFile('edit actor.png');
    cy.contains('Title for NAIROBI/BLOCK48/56', { timeout: 10000 });
    cy.contains('Enter additional document name and upload (if any)');
    cy.get('input[id="file_input"]').type('password123');
    cy.get('button[id="upload_other_doc"]').click();
    cy.get('input[id="otherFiles"]').attachFile('edit actor.png');
    cy.get('table').contains('td', 'password123').should('be.visible');
    //add remnove button
    cy.contains('button', 'Next').click({ force: true });
    // cy.contains('button', 'Back').should('be.visible').click();

    //view and confirmation
    cy.contains('Confirmation');
    cy.get('table').contains('td', 'Maureen Njoki , ID NO. 31255929').should('be.visible');
    cy.contains('Attached Documents');
    cy.get('table').contains('td', 'Certificate of title/Lease : NAIROBI/BLOCK48/56').should('be.visible');
    cy.get('button[id="submit_request"]').click();

    // confirmation dialog
    cy.get('confirmation-dialog', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.get('button[id="no"]').should('be.visible');
        cy.get('button[type="button"]').should('be.visible')
          .within(() => {
            cy.contains('Yes');
          }).click(); // 
      });
    cy.get('div[role="dialog"]', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.get('div.swal2-content')
          .should('exist')
          .within(() => {
            cy.contains('Application successfully submitted!');
          });
      })
      .within(() => {
        cy.get('div.swal2-actions')
          .should('exist')
          .within(() => {
            cy.get('button[type="button"]').contains('Close').click();
          });
      })
      ;

    //invoice page
    cy.contains('Progress level: Search Application submitted, awaiting payment');
    cy.contains('Application Invoices');
    cy.contains('button', 'Pay').should('be.visible').click({ force: true });

    //make payment
    cy.contains('button', 'Mock Payments').click();
    cy.contains('Progress level: Search Application assigned to registrar ');
  });
  it('successful search application flow', () => {
    //after login you can view dashboard
    cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');
    cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');
    cy.contains('Services');
    cy.contains('Search').should('be.visible');

    //get use details for the profile setup
    cy.wait('@getUserProfile', { timeout: 30000 }).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.get('[routerLink="/user/MoLPP/registration/search/search-application"]').should('be.visible').click();

    //get to search application page
    cy.contains('Search Applications');
    cy.contains('button', 'New Application').should('be.visible').click();
    // cy.contains('button', 'Next').click({ force: true });

    //enter search details
    cy.contains('Search details').click();
    //  cy.get('button').contains('Add Parcel').should('be.visible').and('be.disabled');
    cy.get('input[formcontrolname="parcel_number"]').type('NAIROBI/BLOCK48/56');
    cy.contains('button', 'Add Parcel').should('be.visible').click();
    // a case where you add pn multiplle times
    cy.get('table').contains('td', 'NAIROBI/BLOCK48/56', { timeout: 10000 }).should('be.visible');
    //add action button
    cy.contains('Enter the purpose of search');
    cy.get('textarea[formcontrolname="purpose_of_search"]').type('personal');
    // cy.contains('radiobutton');
    cy.contains('Particulars of the subsisting entries in the register of the above-mentioned parcel');
    cy.contains('Particulars noted on the Property section / Proprietorship section');
    cy.contains('button', 'Next').click({ force: true });
    // cy.contains('button', 'Back').should('be.visible').click();

    //attach documents
    cy.contains('Attach Documents');
    cy.contains('Upload: Certificate of title/Lease for: NAIROBI/BLOCK48/56');
    cy.contains('button', 'Choose file').should('be.visible').click();
    cy.get('input[type="file"]').attachFile('edit actor.png');
    cy.contains('Title for NAIROBI/BLOCK48/56', { timeout: 10000 });
    cy.contains('Enter additional document name and upload (if any)');
    cy.get('input[id="file_input"]').type('password123');
    cy.get('button[id="upload_other_doc"]').click();
    cy.get('input[id="otherFiles"]').attachFile('edit actor.png');
    cy.get('table').contains('td', 'password123').should('be.visible');
    //add remnove button
    cy.contains('button', 'Next').click({ force: true });
    // cy.contains('button', 'Back').should('be.visible').click();

    //view and confirmation
    cy.contains('Confirmation');
    cy.get('table').contains('td', 'Maureen Njoki , ID NO. 31255929').should('be.visible');
    cy.contains('Attached Documents');
    cy.get('table').contains('td', 'Certificate of title/Lease : NAIROBI/BLOCK48/56').should('be.visible');
    cy.get('button[id="submit_request"]').click();

    // confirmation dialog
    cy.get('confirmation-dialog', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.get('button[id="no"]').should('be.visible');
        cy.get('button[type="button"]').should('be.visible')
          .within(() => {
            cy.contains('Yes');
          }).click();

      });
    cy.get('div[role="dialog"]', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.get('div.swal2-content')
          .should('exist')
          .within(() => {
            cy.contains('Application successfully submitted!');
          });
      })
      .within(() => {
        cy.get('div.swal2-actions')
          .should('exist')
          .within(() => {
            cy.get('button[type="button"]').contains('Close').click();
          });
      })
      ;
    cy.contains('Search: Application');
    cy.contains('Application Invoices');

  });
});

//for a successful application the property must be owned by the searcher if not there is await for approval and one must pay to  see search details