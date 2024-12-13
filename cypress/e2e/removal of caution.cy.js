
import 'cypress-file-upload';

describe('Make Application to object Caution Removal', () => {
  beforeEach(() => {
    cy.login();
    cy.intercept('GET', 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails').as('getUserProfile');
    cy.intercept('POST', 'http://192.168.214.184/registrationservice/api/v1/caution-removal/caution-removal-application/create_caution_removal_application').as('confirmRequest');
  });
  const cautionCode = 'REG/CAUT/MR56P49GGO';

  // it('login and dashboard display ', () => {
  //   cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');
  // });
  // //different ways of getting to caution in the dash page either throur search of view more
  // it('navigation to Removal of Caution new application page', () => {
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
  //   cy.contains('View More').click(); ///to be checked

  //   //navigate to Removal of Caution
  //   cy.contains('Caution').should('be.visible').click();
  //   // cy.get('table').contains('td', 'Removal of Caution').should('be.visible').click();
  //   cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
  //   cy.contains('button', 'New Application').should('be.visible').click();
  //   cy.contains('Removal of Caution: New Application');
  // });
  // it('execute search through ardhisasaID to successfully add applicant detail', () => {
  //   cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');
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

  //   //navigate to Caution Removal page
  //   cy.contains('Caution').should('be.visible').click();
  //   cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
  //   cy.contains('button', 'New Application').should('be.visible').click();
  //   cy.contains('Removal of Caution: New Application');
  //   cy.contains('FAQs');
  //   cy.contains('button', 'Next').click({ force: true });
  //   // cy.contains('mat-step-header', 'Proprietorship details').click();

  //   //enter Proprietor  details
  //   cy.contains('Proprietor details');
  //   cy.get('input[formcontrolname="user_name"]').type('P000001');
  //   cy.contains('button.search_btn', 'Search')
  //     .click({ force: true });
  //   cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
  //     .should('be.visible')
  //     .contains('Person To Execute');
  //   cy.get('mat-radio-button[value="SELF"]')
  //     .should('be.visible')
  //     .click();
  //   cy.contains('button.add_advocate_btn', 'Save')
  //     .click({ force: true });
  //   cy.get('table').contains('td', 'Dennis Waweru').should('be.visible');
  // });
  // it('successfully remove added cautioner detail', () => {
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
  //   cy.contains('View More').click();

  //   //navigate to object Caution Removal page
  //   cy.contains('Caution').should('be.visible').click();
  //   cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
  //   cy.contains('button', 'New Application').should('be.visible').click();
  //   cy.contains('Removal of Caution: New Application');
  //   cy.contains('FAQs');
  //   cy.contains('button', 'Next').click({ force: true });
  //   // cy.contains('mat-step-header', 'Proprietorship details').click();

  //   //enter Cautioner details
  //   cy.contains('Proprietor details');
  //   cy.get('input[formcontrolname="user_name"]').type('P000001');
  //   cy.contains('button.search_btn', 'Search')
  //     .click({ force: true });
  //   cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
  //     .should('be.visible')
  //     .contains('Person To Execute');
  //   cy.get('mat-radio-button[value="SELF"]')
  //     .should('be.visible')
  //     .click();
  //   cy.contains('button.add_advocate_btn', 'Save')
  //     .click({ force: true });
  //   cy.get('table').contains('button', 'Remove').should('be.visible')
  //     .click();
  // });
  // it('successfull addition of proprietor details', () => {
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
  //   cy.contains('View More').click();

  //   //navigate to object Caution Removal page
  //   cy.contains('Caution').should('be.visible').click();
  //   cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
  //   cy.contains('button', 'New Application').should('be.visible').click();
  //   cy.contains('Removal of Caution: New Application');
  //   cy.contains('FAQs');
  //   cy.contains('button', 'Next').click({ force: true });
  //   // cy.contains('mat-step-header', 'Proprietorship details').click();

  //   //enter Proprietor details
  //   cy.contains('Proprietor details');
  //   //  cy.get('radio_btn[value="INDIVIDUAL"]').click();
  //   cy.get('input[formcontrolname="names"]').should('be.visible');
  //   cy.get('input[formcontrolname="names"]').type('P000001');
  //   cy.get('input[formcontrolname="identification_number"]').type('P000001');
  //   cy.get('input[placeholder="e.g 0700000000"]').should('be.visible').type('0720232125');
  //   cy.contains('span', 'Add').click();
  //   cy.get('table').contains('td', 'P000001').should('be.visible');
  // });
  // it('successfull removal of added proprietor detail', () => {
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
  //   cy.contains('View More').click();

  //   //navigate to object Caution Removal page
  //   cy.contains('Caution').should('be.visible').click();
  //   cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
  //   cy.contains('button', 'New Application').should('be.visible').click();
  //   cy.contains('Removal of Caution: New Application');
  //   cy.contains('FAQs');
  //   cy.contains('button', 'Next').click({ force: true });
  //   // cy.contains('mat-step-header', 'Proprietorship details').click();

  //   //enter Proprietor details
  //   cy.contains('Proprietor details');
  //   //  cy.get('radio_btn[value="INDIVIDUAL"]').click();
  //   cy.get('input[formcontrolname="names"]').should('be.visible');
  //   cy.get('input[formcontrolname="names"]').type('P000001');
  //   cy.get('input[formcontrolname="identification_number"]').type('P000001');
  //   cy.get('input[placeholder="e.g 0700000000"]').should('be.visible').type('0720232125');
  //   cy.contains('span', 'Add').click();
  //   cy.get('table').contains('button', 'Remove').should('be.visible')
  //     .click();
  // });
  // it('successfull input of data for grounds for removal of caution', () => {
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
  //   cy.contains('View More').click();

  //   //navigate to object Caution Removal page
  //   cy.contains('Caution').should('be.visible').click();
  //   cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
  //   cy.contains('button', 'New Application').should('be.visible').click();
  //   cy.contains('Removal of Caution: New Application');
  //   cy.contains('FAQs');
  //   cy.contains('button', 'Next').click({ force: true });
  //   cy.contains('Parcel details');
  //   cy.contains('button', 'Next').click({ force: true });

  // //grounds for removal of caution
  //   cy.contains('Caution details');
  //   cy.get('textarea[placeholder="Grounds for removal"]').type('P000001');
  //   cy.contains('label', 'Enter the grounds for removal of caution')
  //     .closest('div')
  //     .find('button')
  //     .contains('Add')
  //     .click();
  //     cy.contains('h3', 'Added grounds')
  //     .closest('div')
  //     .find('i.material-icons.close-icon')
  //     .click();

  // });
  // it('successfull removal of input data for grounds for removal of caution', () => {
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
  //   cy.contains('View More').click();

  //   //navigate to object Caution Removal page
  //   cy.contains('Caution').should('be.visible').click();
  //   cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
  //   cy.contains('button', 'New Application').should('be.visible').click();
  //   cy.contains('Removal of Caution: New Application');
  //   cy.contains('FAQs');
  //   cy.contains('button', 'Next').click({ force: true });
  //   cy.contains('Parcel details');
  //   cy.contains('button', 'Next').click({ force: true });
  //   cy.contains('Caution details');
  //   cy.get('textarea[placeholder="Grounds for removal"]').type('P000001');
  //   cy.contains('label', 'Enter the grounds for removal of caution')
  //     .closest('div')
  //     .find('button')
  //     .contains('Add')
  //     .click();
  //        cy.contains('h3', 'Added grounds')
  //     .closest('div')
  //     .find('p')
  //     .contains('P000001');

  // });
  // it('successfull addition of additional details', () => {
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
  //   cy.contains('View More').click();

  //   //navigate to object Caution Removal page
  //   cy.contains('Caution').should('be.visible').click();
  //   cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
  //   cy.contains('button', 'New Application').should('be.visible').click();
  //   cy.contains('Removal of Caution: New Application');
  //   cy.contains('FAQs');
  //   cy.contains('button', 'Next').click({ force: true });
  //   cy.contains('Parcel details');
  //   cy.contains('button', 'Next').click({ force: true });

  // //additional details
  //   cy.contains('Caution details');
  //   cy.get('textarea[placeholder="Additional info"]').type('P000001');
  //   cy.contains('label', 'Enter the additional details')
  //     .closest('div')
  //     .find('button')
  //     .contains('Add')
  //     .click();
  //   cy.contains('h3', 'Added details')
  //     .closest('div')
  //     .find('p')
  //     .contains('P000001');

  // });
  // it('successfull removal of added additional details', () => {
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
  //   cy.contains('View More').click();

  //   //navigate to object Caution Removal page
  //   cy.contains('Caution').should('be.visible').click();
  //   cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
  //   cy.contains('button', 'New Application').should('be.visible').click();
  //   cy.contains('Removal of Caution: New Application');
  //   cy.contains('FAQs');
  //   cy.contains('button', 'Next').click({ force: true });
  //   cy.contains('Parcel details');
  //   cy.contains('button', 'Next').click({ force: true });
  //   cy.contains('Caution details');
  //   cy.get('textarea[placeholder="Additional info"]').type('P000001');
  //   cy.contains('label', 'Enter the additional details')
  //     .closest('div')
  //     .find('button')
  //     .contains('Add')
  //     .click();
  //     cy.contains('h3', 'Added details')
  //     .closest('div')
  //     .find('i.material-icons.close-icon')
  //     .click();

  // });
  // it('successfull addition of Drawn By (Law firm) Details by search using Ardhisasa ID', () => {
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
  //   cy.contains('View More').click();

  //   //navigate to object Caution Removal page
  //   cy.contains('Caution').should('be.visible').click();
  //   cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
  //   cy.contains('button', 'New Application').should('be.visible').click();
  //   cy.contains('Removal of Caution: New Application');
  //   cy.contains('FAQs');
  //   cy.contains('button', 'Next').click({ force: true });
  //   cy.contains('Parcel details');
  //   cy.contains('button', 'Next').click({ force: true });

  // //drawn by firm details
  //   cy.contains('Drawn By (Law firm) Details');
  //   cy.contains('Do you want to tie this Application to a Registered Law Firm ');
  //   //check checkbox next to those words, check if the placeholders are in place
  //   cy.get('input[type="checkbox"][value="false"]') // Select input with value "false"
  //     .check({ force: true });
  //   cy.get('drawn-by-form')
  //     .find('input[id="search_input"]').type('CB0D21G000');
  //   cy.get('drawn-by-form')
  //     .find('button[id="search_btn"]').click({ force: true });

  //     const inputData = [
  //       { selector: 'input[formcontrolname="physical_address"]', text: 'Nairobi' },
  //       { selector: 'input[formcontrolname="law_firm_name"]', text: 'ARDHI ADVOCATES' },
  //       // { selector: 'input[formcontrolname="phone_number"]', text: '+254710103758' },
  //       { selector: 'input[formcontrolname="email_address"]', text: 'timomutai@gmail.com' },
  //       { selector: 'input[formcontrolname="postal_address"]', text: 'Box 000-0000 nairobi' },
  //                ];
  //     inputData.forEach(({ selector, text }) => {
  //       cy.get(selector)
  //         .should('be.visible')
  //         .invoke('val')
  //         .then(value => {
  //           if (!value) {
  //             cy.get(selector)
  //               .type(text);
  //           }
  //         });
  //     }); 
  //     cy.contains('button', 'Next').click({ force: true });
  // });
  // it('successfull addition and attachment of documents', () => {
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
  //   cy.contains('View More').click();

  //   //navigate 
  //   cy.contains('Caution').should('be.visible').click();
  //   cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
  //   cy.contains('button', 'New Application').should('be.visible').click();
  //   cy.contains('Removal of Caution: New Application');
  //   cy.contains('FAQs');
  //   cy.contains('button', 'Next').click({ force: true });
  //   cy.contains('Parcel details');
  //   cy.contains('button', 'Next').click({ force: true });
  //   cy.contains('Caution details');
  //   cy.contains('button', 'Next').click({ force: true });


  //   //attach documents
  //   cy.contains('Documents');
  //   cy.contains('Enter additional document name and upload (if any):');
  //   cy.get('input[formcontrolname="document_name"]').type('password123');
  //   cy.contains('button', 'Choose file').should('be.visible').click();
  //   cy.get('input[type="file"]').attachFile('edit actor.png');
  //   cy.get('table').contains('td', 'password123').should('be.visible');
  // });
  // it('successfull removal of attached documents', () => {
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
  //   cy.contains('View More').click();

  //   //navigate 
  //   cy.contains('Caution').should('be.visible').click();
  //   cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
  //   cy.contains('button', 'New Application').should('be.visible').click();
  //   cy.contains('Removal of Caution: New Application');
  //   cy.contains('FAQs');
  //   cy.contains('button', 'Next').click({ force: true });
  //   cy.contains('Parcel details');
  //   cy.contains('button', 'Next').click({ force: true });
  //   cy.contains('Caution details');
  //   cy.contains('button', 'Next').click({ force: true });


  //   //attach documents
  //   cy.contains('Documents');
  //   cy.contains('Enter additional document name and upload (if any):');
  //   cy.get('input[formcontrolname="document_name"]').type('password123');
  //   cy.contains('button', 'Choose file').should('be.visible').click();
  //   cy.get('input[type="file"]').attachFile('edit actor.png');
  //   cy.get('table').contains('td', 'password123').should('be.visible');
  //   cy.get('table').contains('button', 'Remove').should('be.visible')
  //     .click();
  //   cy.contains('div', 'No added documents');
  // });
//   it('proper confirmation and view of the new removal of caution application', () => {
//     cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');    //after login you can view dashboard and get use details for the profile setup
//     cy.contains('Services');

//     //must be advocate
//     cy.wait('@getUserProfile', { timeout: 10000 }).then((interception) => {
//       expect(interception.response.statusCode).to.equal(200);
//     });
//     cy.get('div[fxflex="20"]')
//       .find('img.personal_acc_icon')
//       .click();
//     cy.contains('span', 'Advocate Account')
//       .click();
//     cy.contains('View More').click();

//     //navigate 
//     cy.contains('Caution').should('be.visible').click();
//     cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
//     cy.contains('button', 'New Application').should('be.visible').click();
//     cy.contains('Removal of Caution: New Application');
//     cy.contains('FAQs');
//     cy.contains('button', 'Next').click({ force: true });

//     //parcel details
//     cy.contains('Parcel details');
//     cy.get('input[formcontrolname="parcel_number"]').type('NAIROBI/BLOCK190/125');
//     cy.get('input[formcontrolname="caution_entry"]').type('REG/CAUT/MR56P49GGO');

//     //enter Proprietor details
//     cy.contains('Proprietor details');
//     cy.get('input[formcontrolname="user_name"]').type('P000001');
//     cy.contains('button.search_btn', 'Search')
//       .click({ force: true });
//     cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
//       .should('be.visible')
//       .contains('Person To Execute');
//     cy.get('mat-radio-button[value="SELF"]')
//       .should('be.visible')
//       .click();
//     cy.contains('button.add_advocate_btn', 'Save')
//       .click({ force: true });
//     cy.get('table').contains('td', 'Dennis Waweru').should('be.visible');

//     //  cy.get('radio_btn[value="INDIVIDUAL"]').click();
//     cy.get('input[formcontrolname="names"]').should('be.visible');
//     cy.get('input[formcontrolname="names"]').type('P000001');
//     cy.get('input[formcontrolname="identification_number"]').type('P000001');
//     cy.get('input[placeholder="e.g 0700000000"]').should('be.visible').type('0720232125');
//     cy.contains('span', 'Add').click();
//     cy.get('table').contains('td', 'P000001').should('be.visible');
//     cy.contains('button', 'Next').click({ force: true });

//     //grounds for removal of caution
//     cy.contains('Caution details');
//     cy.get('textarea[placeholder="Grounds for removal"]').type('P000001');
//     cy.contains('label', 'Enter the grounds for removal of caution')
//       .closest('div')
//       .find('button')
//       .contains('Add')
//       .click();
//     cy.contains('h3', 'Added grounds')
//       .closest('div')
//       .find('i.material-icons.close-icon')
//       .click();

//     //additional details
//     cy.get('textarea[placeholder="Additional info"]').type('P000001');
//     cy.contains('label', 'Enter the additional details')
//       .closest('div')
//       .find('button')
//       .contains('Add')
//       .click();
//     cy.contains('h3', 'Added details')
//       .closest('div')
//       .find('p')
//       .contains('P000001');

// //drawn by firm details
//     cy.contains('Drawn By (Law firm) Details');
//     cy.contains('Do you want to tie this Application to a Registered Law Firm ');
//     //check checkbox next to those words, check if the placeholders are in place
//     cy.get('input[type="checkbox"][value="false"]') // Select input with value "false"
//       .check({ force: true });
//     cy.get('drawn-by-form')
//       .find('input[id="search_input"]').type('CB0D21G000');
//     cy.get('drawn-by-form')
//       .find('button[id="search_btn"]').click({ force: true });

//       const inputData = [
//         { selector: 'input[formcontrolname="physical_address"]', text: 'Nairobi' },
//         { selector: 'input[formcontrolname="law_firm_name"]', text: 'ARDHI ADVOCATES' },
//         // { selector: 'input[formcontrolname="phone_number"]', text: '+254710103758' },
//         { selector: 'input[formcontrolname="email_address"]', text: 'timomutai@gmail.com' },
//         { selector: 'input[formcontrolname="postal_address"]', text: 'Box 000-0000 nairobi' },
//                  ];
//       inputData.forEach(({ selector, text }) => {
//         cy.get(selector)
//           .should('be.visible')
//           .invoke('val')
//           .then(value => {
//             if (!value) {
//               cy.get(selector)
//                 .type(text);
//             }
//           });
//       }); 
//       cy.contains('button', 'Next').click({ force: true });

//    //attach documents
//    cy.contains('Documents');
//    cy.contains('Enter additional document name and upload (if any):');
//    cy.get('input[formcontrolname="document_name"]').type('password123');
//    cy.contains('button', 'Choose file').should('be.visible').click();
//    cy.get('input[type="file"]').attachFile('edit actor.png');
//    cy.get('table').contains('td', 'password123');
//    cy.contains('button', 'Next').click({ force: true });

//     //view and confirmation
//     cy.contains('Confirmation');
//     cy.get('table').contains('td', 'NAIROBI/BLOCK190/125').should('be.visible');
//     cy.get('table').contains('td', new RegExp(cautionCode, 'i')).should('be.visible');
    
//     cy.contains('Removal of caution applicant details');
//     cy.get('table').contains('td', 'Dennis Waweru');
//     cy.get('table').contains('td', 'P000001');
//     cy.get('table').contains('td', 'P000001');
//     cy.get('table').contains('td', 'Self');

//     cy.contains('Proprietor details');
//     cy.get('table').contains('td', 'P000001');
//     cy.get('table').contains('td', '0720232125');

//     cy.contains('Caution details');
//     cy.get('table').contains('td', 'P000001');
//     cy.get('table').contains('td', '0720232125');
  
//     cy.contains('Drawn By (Law firm) Details');
//     cy.get('table').contains('td', 'ARDHI ADVOCATES').should('be.visible');
//    cy.get('table').contains('td', 'CB0D21G000').should('be.visible');

//   });
  it('successfull flow of the new removal of caution application', () => {
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

    //navigate 
    cy.contains('Caution').should('be.visible').click();
    cy.contains('td', /^\s*Removal of Caution\s*$/).should('exist').should('be.visible').click();
    cy.contains('button', 'New Application').should('be.visible').click();
    cy.contains('Removal of Caution: New Application');
    cy.contains('FAQs');
    cy.contains('button', 'Next').click({ force: true });

    //parcel details
    cy.contains('Parcel details');
    cy.get('input[formcontrolname="parcel_number"]').type('NAIROBI/BLOCK190/125');
    cy.get('input[formcontrolname="caution_entry"]').type('REG/CAUT/MR56P49GGO');

    //enter Proprietor details
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

    //  cy.get('radio_btn[value="INDIVIDUAL"]').click();
    cy.get('input[formcontrolname="names"]').should('be.visible');
    cy.get('input[formcontrolname="names"]').type('P000001');
    cy.get('input[formcontrolname="identification_number"]').type('P000001');
    cy.get('input[placeholder="e.g 0700000000"]').should('be.visible').type('0720232125');
    cy.contains('span', 'Add').click();
    cy.get('table').contains('td', 'P000001').should('be.visible');
    cy.contains('button', 'Next').click({ force: true });

    //grounds for removal of caution
    cy.contains('Caution details');
    cy.get('textarea[placeholder="Grounds for removal"]').type('P000001');
    cy.contains('label', 'Enter the grounds for removal of caution')
      .closest('div')
      .find('button')
      .contains('Add')
      .click();
    cy.contains('h3', 'Added grounds')
      .closest('div')
      .find('i.material-icons.close-icon')
      .click();

    //additional details
    cy.get('textarea[placeholder="Additional info"]').type('P000001');
    cy.contains('label', 'Enter the additional details')
      .closest('div')
      .find('button')
      .contains('Add')
      .click();
    cy.contains('h3', 'Added details')
      .closest('div')
      .find('p')
      .contains('P000001');

    //drawn by firm details
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

    //attach documents
    cy.contains('Documents');
    cy.contains('Enter additional document name and upload (if any):');
    cy.get('input[formcontrolname="document_name"]').type('password123');
    cy.contains('button', 'Choose file').should('be.visible').click();
    cy.get('input[type="file"]').attachFile('edit actor.png');
    cy.get('table').contains('td', 'password123').should('be.visible');
    cy.contains('button', 'Next').click({ force: true });

    //view and confirmation
    cy.contains('Confirmation');
    
    //submission
  cy.get('.form_button', { timeout: 10000 }).contains('Submit').click({ force: true });
  cy.intercept('POST', 'http://192.168.214.184/registrationservice/api/v1/caution-removal/caution-removal-application/create_caution_removal_application').as('confirmRequest');

  // confirmation dialog
  cy.get('confirmation-dialog', { timeout: 10000 })
    .should('be.visible')
    .within(() => {
      cy.get('button[id="no"]').should('be.visible');
      cy.get('button[type="button"]').should('be.visible')
        .within(() => {
          cy.contains('Yes');
          cy.wait(10000);
        }).click({ force: true });
    });
    cy.wait('@confirmRequest').then((interception) => {
      cy.log('Request body:', JSON.stringify(interception.request.body));
      console.log('Request body:', interception.request.body);
      // expect(interception.response.statusCode).to.eq(200);
    });
  });
});