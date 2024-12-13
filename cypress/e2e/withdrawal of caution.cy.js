
import 'cypress-file-upload';

describe('Make Application to Withdrawal of Caution', () => {
    beforeEach(() => {
        cy.login();
        cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');

    });
      it('login and dashboard display ', () => {
        cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');
      });
      //different ways of getting to caution in the dash page either throur search of view more
      it('navigation to Withdrawal of Caution page', () => {
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

        //navigate to Withdrawal of Caution
        cy.contains('Caution').should('be.visible').click();
        cy.get('table').contains('td', 'Withdrawal of Caution').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('Withdrawal of Caution: New Application');
      });
      it('execute search through ardhisasaID to successfully add cautioner detail', () => {
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

        //navigate to Withdrawal of Caution page
        cy.contains('Caution').should('be.visible').click();
        cy.get('table').contains('td', 'Withdrawal of Caution').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('Withdrawal of Caution: New Application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });
        // cy.contains('mat-step-header', 'Proprietorship details').click();

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

        //navigate to Withdrawal of Caution page
        cy.contains('Caution').should('be.visible').click();
        cy.get('table').contains('td', 'Withdrawal of Caution').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('Withdrawal of Caution: New Application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });
        // cy.contains('mat-step-header', 'Proprietorship details').click();

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
        cy.contains('button.add_advocate_btn', 'Save')
          .click({ force: true });
        cy.get('table').contains('button', 'Remove').should('be.visible')
          .click();
      });
      it('successfull addition of proprietor details', () => {
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

        //navigate to Withdrawal of Caution page
        cy.contains('Caution').should('be.visible').click();
        cy.get('table').contains('td', 'Withdrawal of Caution').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('Withdrawal of Caution: New Application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });
        // cy.contains('mat-step-header', 'Proprietorship details').click();

        //enter Proprietor details
        cy.contains('Proprietor details');
        //  cy.get('radio_btn[value="INDIVIDUAL"]').click();
        cy.contains('div', 'Select category of proprietor')
          .within(() => {
            cy.get('input[formcontrolname="names"]').type('P000001');
            cy.get('input[formcontrolname="identification_number"]').type('P000001');
            cy.get('input[formcontrolname="phone_number"]').type('0720232125');
            cy.get('button.mat-raised-button').click();
            // .should('be.visible')  
          });
        cy.get('table').contains('td', 'P000001').should('be.visible');
      });
      it('successfull removal of added proprietor detail', () => {
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

        //navigate to Withdrawal of Caution page
        cy.contains('Caution').should('be.visible').click();
        cy.get('table').contains('td', 'Withdrawal of Caution').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('Withdrawal of Caution: New Application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });
        // cy.contains('mat-step-header', 'Proprietorship details').click();

        //enter Proprietor details
        cy.contains('Proprietor details');
        //  cy.get('radio_btn[value="INDIVIDUAL"]').click();
        cy.contains('div', 'Select category of proprietor')
          .within(() => {
            cy.get('input[formcontrolname="names"]').type('P000001');
            cy.get('input[formcontrolname="identification_number"]').type('P000001');
            cy.get('input[formcontrolname="phone_number"]').type('0720232125');
            cy.get('button.mat-raised-button').click();
            // .should('be.visible')  
          });
        cy.get('table').contains('button', 'Remove').should('be.visible')
          .click();

      });
    it('successfull addition of reasons for Withdrawal of Caution', () => {
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

        //navigate to Withdrawal of Caution
        cy.contains('Caution').should('be.visible').click();
        cy.get('table').contains('td', 'Withdrawal of Caution').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('Withdrawal of Caution: New Application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });
        cy.contains('Cautioner details');
        cy.contains('button', 'Next').click({ force: true });
        cy.contains('Reasons for withdrawal of caution');
        cy.get('textarea[placeholder="Enter reasons for withdrawal"]').type('P000001');
        cy.contains('label', 'Enter reasons for withdrawal')
            .closest('div')
            .find('button')
            .contains('Add')
            .click();
        cy.contains('p', 'P000001')
            .closest('div')
            .find('p')
            .contains('P000001');
    });
    it('successfull removal of added reasons for Withdrawal of Caution', () => {
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

        //navigate to Withdrawal of Caution
        cy.contains('Caution').should('be.visible').click();
        cy.get('table').contains('td', 'Withdrawal of Caution').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('Withdrawal of Caution: New Application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });
        cy.contains('Cautioner details');
        cy.contains('button', 'Next').click({ force: true });
        cy.contains('Reasons for withdrawal of caution');

        cy.get('textarea[placeholder="Enter reasons for withdrawal"]').type('P000001');
        cy.contains('label', 'Enter reasons for withdrawal')
            .closest('div')
            .find('button')
            .contains('Add')
            .click();
        cy.contains('p', 'P000001')
            .closest('div')
            .parent() 
            .find('i.material-icons.close-icon')
            .click();
    });
    it('successfull addition of additional details', () => {
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
        cy.contains('View More').click();

        //navigate to Withdrawal of Caution
        cy.contains('Caution').should('be.visible').click();
        cy.get('table').contains('td', 'Withdrawal of Caution').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('Withdrawal of Caution: New Application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });
        cy.contains('Cautioner details');
        cy.contains('button', 'Next').click({ force: true });
        cy.contains('Additional information');
        cy.get('textarea[placeholder="Additional info"]').type('P000001');
        cy.contains('label', 'Enter additional details')
            .closest('div')
            .find('button')
            .contains('Add')
            .click();
        cy.contains('h3', 'Added details')
            .closest('div')
            .find('p')
            .contains('P000001');
    });
    it('successfull removal of added additional details', () => {
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

        //navigate to Withdrawal of Caution
        cy.contains('Caution').should('be.visible').click();
        cy.get('table').contains('td', 'Withdrawal of Caution').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('Withdrawal of Caution: New Application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });
        cy.contains('Cautioner details');
        cy.contains('button', 'Next').click({ force: true });
        cy.contains('Additional information');
        cy.get('textarea[placeholder="Additional info"]').type('P000001');
        cy.contains('label', 'Enter additional details')
            .closest('div')
            .find('button')
            .contains('Add')
            .click();
        cy.contains('h3', 'Added details')
            .closest('div')
            .find('i.material-icons.close-icon')
            .click();
    });
    it('successfull addition of Drawn By (Law firm) Details by search using Ardhisasa ID', () => {
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

        //navigate to Withdrawal of Caution
        cy.contains('Caution').should('be.visible').click();
        cy.get('table').contains('td', 'Withdrawal of Caution').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('Withdrawal of Caution: New Application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });
        cy.contains('Cautioner details');
        cy.contains('button', 'Next').click({ force: true });

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

    });
    it('successfull addition and attachment of documents', () => {
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

        //navigate to Withdrawal of Caution
        cy.contains('Caution').should('be.visible').click();
        cy.get('table').contains('td', 'Withdrawal of Caution').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('Withdrawal of Caution: New Application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });
        cy.contains('Cautioner details');
        cy.contains('button', 'Next').click({ force: true });
        cy.contains('Reasons for withdrawal of caution');
        cy.contains('button', 'Next').click({ force: true });

        //attach documents
        cy.contains('Documents');
        cy.contains('Enter additional document name and upload (if any):');
        cy.get('input[formcontrolname="document_name"]').type('password123');
        cy.contains('button', 'Choose file').should('be.visible').click();
        cy.get('input[type="file"]').attachFile('edit actor.png');
        cy.get('table').contains('td', 'password123').should('be.visible');


    });
    it('successfull removal of attached documents', () => {
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

        //navigate to Withdrawal of Caution
        cy.contains('Caution').should('be.visible').click();
        cy.get('table').contains('td', 'Withdrawal of Caution').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('Withdrawal of Caution: New Application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });
        cy.contains('Cautioner details');
        cy.contains('button', 'Next').click({ force: true });
        cy.contains('Reasons for withdrawal of caution');
        cy.contains('button', 'Next').click({ force: true });

        //attach documents
        cy.contains('Documents');
        cy.contains('Enter additional document name and upload (if any):');
        cy.get('input[formcontrolname="document_name"]').type('password123');
        cy.contains('button', 'Choose file').should('be.visible').click();
        cy.get('input[type="file"]').attachFile('edit actor.png');
        cy.get('table').contains('td', 'password123').should('be.visible');
        cy.get('table').contains('button', 'Remove').should('be.visible')
            .click();
        cy.get('table').contains('td', 'password123').should('not.exist');
    });
  
});

