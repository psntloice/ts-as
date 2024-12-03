
import 'cypress-file-upload';

describe('Make Caution Application', () => {
  beforeEach(() => {
    cy.login();
    cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');

  });

  it('login and dashboard display ', () => {
    cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');    //after login you can view dashboard
  });

  //different ways of getting to caution and diff ways of getting to  caution in the dash page either throur search of view more
  it('navigation to caution new application page', () => {
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
    cy.get('table').contains('td', 'Caution').should('be.visible').click();
    cy.contains('button', 'New Application').should('be.visible').click();
    // cy.contains('button', 'Next').click({ force: true });
    cy.contains('mat-step-header', 'Proprietorship details') ;
  });

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
    cy.get('table').contains('td', 'Caution').should('be.visible').click();
    cy.contains('button', 'New Application').should('be.visible').click();
    // cy.contains('button', 'Next').click({ force: true });
    cy.contains('mat-step-header', 'Proprietorship details').click();

    //enter Proprietorship details
    cy.contains('Parcel details'); //parcel
    cy.get('input[formcontrolname="parcel_number"]').type('NAIROBI/BLOCK190/125');
    cy.get('input[formcontrolname="names"]').type('Mary');//Proprietorship details
    // cy.get('input[formcontrolname="phone_number"]').type('0700000000');
    cy.get('input[formcontrolname="identification_number"]').type('56842395');
    cy.contains('button', 'Add').should('be.visible').click();
    cy.get('table').contains('td', 'Mary').should('be.visible');
    cy.contains('button', 'Next').click({ force: true });

    //enter Caution details
    cy.contains('Caution details');
    cy.get('mat-radio-button[value="ABSOLUTE"]').click();
    cy.get('textarea[formcontrolname="interests_claimed"]').type('TEST: FREEHOLD PARCEL');
    cy.contains('div', 'Select extent or scope of caution')  // Finds the div containing the text 'Add'
      .within(() => {  // Scope the search to this div
        cy.get('button.mat-raised-button')  
          // .should('be.visible')  
          .click(); 
      });

    //enter Cautioner details
    cy.contains('Cautioner details');
    cy.get('input[formcontrolname="user_name"]').type('P000001');
    cy.contains('button.search_btn', 'Search')
      .click({ force: true });
    cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
      .should('be.visible')
      .contains('Person To Execute');
    cy.get('mat-radio-button[value="SELF"]')
      .should('be.visible')
      .click();
    cy.contains('button.add_advocate_btn', 'Save') // Waits for button with 'Add' text
      .click({ force: true });

    // cy.contains('Additional details');
    // cy.get('textarea[formcontrolname="caution_additional_information"]').type('personal');
    // cy.contains('button', 'Add').should('be.visible').click({ force: true });


    cy.contains('Drawn By (Law firm) Details');
    cy.contains('Do you want to tie this Application to a Registered Law Firm ');
    //check checkbox next to those words, check if the placeholders are in place
    cy.get('input[type="checkbox"][value="false"]') // Select input with value "false"
      .check({ force: true });
    cy.get('drawn-by-form')
      .find('input[id="search_input"]').type('CB0D21G000');
    cy.get('drawn-by-form')
      .find('button[id="search_btn"]').click({ force: true });

    const inputData = [
      { selector: 'input[formcontrolname="physical_address"]', text: 'Nairobi' },
      { selector: 'input[formcontrolname="law_firm_name"]', text: 'ARDHI ADVOCATES' },
      // { selector: 'input[formcontrolname="phone_number"]', text: '+254710103758' },
      { selector: 'input[formcontrolname="email_address"]', text: 'timomutai@gmail.com' },
      { selector: 'input[formcontrolname="postal_address"]', text: 'Box 000-0000 nairobi' },
               ];
    inputData.forEach(({ selector, text }) => {
      cy.get(selector)
        .should('be.visible')
        .invoke('val')
        .then(value => {
          if (!value) {
            cy.get(selector)
              .type(text);
          }
        });
    }); 
    cy.contains('button', 'Next').click({ force: true });
    // cy.contains('button', 'Back').should('be.visible').click();

    //attach documents
    cy.contains('Documents');
    cy.get('input[id="file_input"]').type('password123');
    cy.contains('button', 'Choose file').should('be.visible').click();
    cy.get('input[type="file"]').attachFile('edit actor.png');
    cy.get('table').contains('td', 'password123').should('be.visible');
    cy.contains('button', 'Next').click({ force: true });

    //view and confirmation
    cy.contains('Confirmation');
    cy.get('table').contains('td', 'Parcel Numbe')
  .should('be.visible')  // Ensure that the table containing 'gar' is visible
  .closest('table') .within(() => {
    // Step 2: Now, within this table, you can search for other data
    // For example, finding another piece of data within the same table
    cy.get('td').contains('NAIROBI/BLOCK190/125').should('be.visible');
  });
    // cy.get('table').contains('td', 'NAIROBI/BLOCK48/56').should('be.visible');
    cy.contains('Proprietor details');
    // cy.get('table').contains('td', 'Mary').should('be.visible');
    cy.contains('Cautioner details');
    // cy.get('table').contains('td', 'Dennis Waweru').should('be.visible');
    cy.contains('Caution details');
    // cy.get('table').contains('td', 'Mary').should('be.visible');
    cy.contains('Drawn By (Law firm) Details');
    // cy.get('table').contains('td', 'ARDHI ADVOCATES').should('be.visible');
    cy.get('.form_button').contains('Submit').click({ force: true });
    // Wait for the file upload request to complete

    // confirmation dialog
    cy.get('confirmation-dialog', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.get('button[id="no"]').should('be.visible');
        cy.get('button[type="button"]').should('be.visible')
          .within(() => {
            cy.contains('Yes');
          }).pause();
      });

  });
});

