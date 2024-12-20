
import 'cypress-file-upload';
const registry = 'NAIROBI';
const donorId = 'P000001';
const donorName = 'P000001';
const doneeId = 'P000002';
const doneeName = 'P000002';
const executers = 'SELF';
const addProvisions = 'SELF';
const lawFirmId = 'CB0D21G000';
const profLink = 'http://192.168.214.184/acl/api/v1/accounts/userprofiledetails';
const firmName = 'ARDHI ADVOCATES';
const firmId = 'edit actor.png';
const inputData = [
    { selector: 'input[formcontrolname="physical_address"]', text: 'Nairobi' },
    { selector: 'input[formcontrolname="law_firm_name"]', text: 'ARDHI ADVOCATES' },
    // { selector: 'input[formcontrolname="phone_number"]', text: '+254710103758' },
    { selector: 'input[formcontrolname="email_address"]', text: 'timomutai@gmail.com' },
    { selector: 'input[formcontrolname="postal_address"]', text: 'Box 000-0000 nairobi' },
];
const docName = 'password123';
const docFile = 'edit actor.png';


describe('Make Application to General Power of Attorney', () => {
    beforeEach(() => {
        cy.login();
        cy.intercept('GET', `${profLink}`).as('getUserProfile');

    });
    it('login and dashboard display ', () => {
        cy.contains('Search for a Service', { timeout: 10000 }).should('be.visible');
    });
    //different ways of getting to caution in the dash page either throur search of view more
    it('navigation to General Power of Attorney new application page', () => {
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

        //navigate to General Power of Attorney page
        cy.contains('Power of Attorney').should('be.visible').click();
        // cy.get('table').contains('td', 'Removal of Caution').should('be.visible').click();
        cy.get('table').contains('td', 'General Power of Attorney').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('General Power Of Attorney: New application');
    });
    it('execute search through ardhisasaID to successfully add donor detail', () => {
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

        //navigate to General Power of Attorney page
        cy.contains('Power of Attorney').should('be.visible').click();
        cy.get('table').contains('td', 'General Power of Attorney').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('General Power Of Attorney: New application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });

        //enter donor details
        cy.contains('label', 'Add Donor using Ardhisasa ID')
            .closest('div')
            .find('input[formcontrolname="user_name"]')
            .type(donorId);
        cy.contains('label', 'Add Donor using Ardhisasa ID')
            .closest('div')
            .find('button')
            .contains('button.search_btn', 'Search')
            .click();
        cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
            .should('be.visible')
            .contains('Person To Execute');
        cy.get(`mat-radio-button[value="${executers}"]`)
            .should('be.visible')
            .click();
        cy.contains('button.add_advocate_btn', 'Save')
            .click({ force: true });
        cy.get('table').contains('td', `${donorName}`).should('be.visible');

    });
    it('successfully remove added donor detail', () => {
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

        //navigate to General Power of Attorney page
        cy.contains('Power of Attorney').should('be.visible').click();
        cy.get('table').contains('td', 'General Power of Attorney').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('General Power Of Attorney: New application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });

        //enter donor details
        cy.contains('label', 'Add Donor using Ardhisasa ID')
            .closest('div')
            .find('input[formcontrolname="user_name"]')
            .type(donorId);
        cy.contains('label', 'Add Donor using Ardhisasa ID')
            .closest('div')
            .find('button')
            .contains('button.search_btn', 'Search')
            .click();
        cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
            .should('be.visible')
            .contains('Person To Execute');
        cy.get(`mat-radio-button[value="${executers}"]`)
            .should('be.visible')
            .click();
        cy.contains('button.add_advocate_btn', 'Save')
            .click({ force: true });
        cy.get('table').contains('td', `${donorName}`).should('be.visible');
        cy.get('table').contains('button', 'Remove').should('be.visible')
            .click();
        cy.get('table').contains('td', `${donorName}`).should('not.exist');

    });
    it('execute search through ardhisasaID to successfully add donee detail', () => {
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

        //navigate to General Power of Attorney page
        cy.contains('Power of Attorney').should('be.visible').click();
        cy.get('table').contains('td', 'General Power of Attorney').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('General Power Of Attorney: New application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });

        //enter donee details
        cy.contains('label', 'Add Donee using Ardhisasa ID')
            .closest('div')
            .find('input[formcontrolname="user_name"]')
            .type(doneeId);
        cy.contains('label', 'Add Donee using Ardhisasa ID')
            .closest('div')
            .find('button')
            .contains('button.search_btn', 'Search')
            .click();
        cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
            .should('be.visible')
            .contains('Person To Execute');
        cy.get(`mat-radio-button[value="${executers}"]`)
            .should('be.visible')
            .click();
        cy.contains('button.add_advocate_btn', 'Save')
            .click({ force: true });
        cy.get('table').contains('td', `${doneeName}`).should('be.visible');

    });
    it('successfully remove added donee detail', () => {
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

        //navigate to General Power of Attorney page
        cy.contains('Power of Attorney').should('be.visible').click();
        cy.get('table').contains('td', 'General Power of Attorney').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('General Power Of Attorney: New application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });

        //enter donee details
        cy.contains('label', 'Add Donee using Ardhisasa ID')
            .closest('div')
            .find('input[formcontrolname="user_name"]')
            .type(doneeId);
        cy.contains('label', 'Add Donee using Ardhisasa ID')
            .closest('div')
            .find('button')
            .contains('button.search_btn', 'Search')
            .click();
        cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
            .should('be.visible')
            .contains('Person To Execute');
        cy.get(`mat-radio-button[value="${executers}"]`)
            .should('be.visible')
            .click();
        cy.contains('button.add_advocate_btn', 'Save')
            .click({ force: true });
        cy.get('table').contains('td', `${doneeName}`).should('be.visible');
        cy.get('table').contains('button', 'Remove').should('be.visible')
            .click();
            cy.get('table').contains('td', `${doneeName}`).should('not.exist');

    });
    it('successfull addition of additional provisions', () => {
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

        //navigate to General Power of Attorney page
        cy.contains('Power of Attorney').should('be.visible').click();
        cy.get('table').contains('td', 'General Power of Attorney').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('General Power Of Attorney: New application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });

        //additional provisions
        cy.get('textarea[placeholder="Additional provisions"]').type(addProvisions);
        cy.contains('label', 'Additional provisions')
            .closest('div')
            .find('button')
            .contains('Add')
            .click();
        cy.contains('b', 'Added additional provision')
            .closest('div')
            .find('p')
            .contains(addProvisions);

    });
    it('successfull removal of added additional provisions', () => {
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

        //navigate to General Power of Attorney page
        cy.contains('Power of Attorney').should('be.visible').click();
        cy.get('table').contains('td', 'General Power of Attorney').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('General Power Of Attorney: New application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });

        //additional provisions
        cy.get('textarea[placeholder="Additional provisions"]').type(addProvisions);
        cy.contains('label', 'Additional provisions')
            .closest('div')
            .find('button')
            .contains('Add')
            .click();
        cy.contains('b', 'Added additional provision')
            .closest('div')
            .find('mat-icon.material-icons')
            .contains('close')
            .click();

    });
    it('successfull addition of Drawn By (Law firm) Details by search using Ardhisasa ID', () => {
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

        //navigate to General Power of Attorney page
        cy.contains('Power of Attorney').should('be.visible').click();
        cy.get('table').contains('td', 'General Power of Attorney').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('General Power Of Attorney: New application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });

        //drawn by firm details
        cy.contains('Drawn By (Law firm) Details');
        cy.contains('Do you want to tie this Application to a Registered Law Firm ');
        //check checkbox next to those words, check if the placeholders are in place
        cy.get('input[type="checkbox"][value="false"]') // Select input with value "false"
            .check({ force: true });
        cy.get('drawn-by-form')
            .find('input[id="search_input"]').type(lawFirmId);
        cy.get('drawn-by-form')
            .find('button[id="search_btn"]').click({ force: true });
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

        //navigate to General Power of Attorney page
        cy.contains('Power of Attorney').should('be.visible').click();
        cy.get('table').contains('td', 'General Power of Attorney').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('General Power Of Attorney: New application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });

        //enter Application Details 
        cy.contains('Application Details');
        cy.contains('button', 'Next').click({ force: true });

        //attach documents
        cy.contains('Documents');
        cy.contains('Enter additional document name and upload (if any):');
        cy.get('input[formcontrolname="document_name"]').type(docName);
        cy.contains('button', 'Choose file').should('be.visible').click();
        cy.get('input[type="file"]').attachFile(docFile);
        cy.get('table').contains('td', `${docName}`).should('be.visible');
    });
    it('successfull removal of attached documents', () => {
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

        //navigate to General Power of Attorney page
        cy.contains('Power of Attorney').should('be.visible').click();
        cy.get('table').contains('td', 'General Power of Attorney').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('General Power Of Attorney: New application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });

        //enter Application Details 
        cy.contains('Application Details');
        cy.contains('button', 'Next').click({ force: true });

        //attach documents
        cy.contains('Documents');
        cy.contains('Enter additional document name and upload (if any):');
        cy.get('input[formcontrolname="document_name"]').type(docName);
        cy.contains('button', 'Choose file').should('be.visible').click();
        cy.get('input[type="file"]').attachFile(docFile);
        cy.get('table').contains('td', `${docName}`).should('be.visible');
        cy.get('table').contains('button', 'Remove').should('be.visible')
            .click();
        cy.get('table').contains('td', `${docName}`).should('not.exist');
    });
    it('Proper confirmation and view of the new General Power of Attorney application', () => {
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

        //navigate to General Power of Attorney page
        cy.contains('Power of Attorney').should('be.visible').click();
        cy.get('table').contains('td', 'General Power of Attorney').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('General Power Of Attorney: New application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });
        // cy.contains('mat-step-header', 'Proprietorship details').click();

        //enter Application Details 
        cy.contains('Application Details');
        cy.get('mat-select[formcontrolname="registry"]')
            .click();
        cy.contains('span', `${registry}`).click();

        //enter donor details
        cy.contains('label', 'Add Donor using Ardhisasa ID')
            .closest('div')
            .find('input[formcontrolname="user_name"]')
            .type(donorId);
        cy.contains('label', 'Add Donor using Ardhisasa ID')
            .closest('div')
            .find('button')
            .contains('button.search_btn', 'Search')
            .click();
        cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
            .should('be.visible')
            .contains('Person To Execute');
        cy.get(`mat-radio-button[value="${executers}"]`)
            .should('be.visible')
            .click();
        cy.contains('button.add_advocate_btn', 'Save')
            .click({ force: true });
        cy.get('table').contains('td', `${donorName}`).should('be.visible');

        //enter donee details
        cy.contains('label', 'Add Donee using Ardhisasa ID')
            .closest('div')
            .find('input[formcontrolname="user_name"]')
            .type(doneeId);
        cy.contains('label', 'Add Donee using Ardhisasa ID')
            .closest('div')
            .find('button')
            .contains('button.search_btn', 'Search')
            .click();
        cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
            .should('be.visible')
            .contains('Person To Execute');
        cy.get(`mat-radio-button[value="${executers}"]`)
            .should('be.visible')
            .click();
        cy.contains('button.add_advocate_btn', 'Save')
            .click({ force: true });
        cy.get('table').contains('td', `${doneeName}`).should('be.visible');

        //additional details
        cy.get('textarea[placeholder="Additional provisions"]').type(addProvisions);
        cy.contains('label', 'Additional provisions')
            .closest('div')
            .find('button')
            .contains('Add')
            .click();
        cy.contains('b', 'Added additional provision')
            .closest('div')
            .find('p')
            .contains(addProvisions);

        //drawn by firm details
        cy.contains('Drawn By (Law firm) Details');
        cy.contains('Do you want to tie this Application to a Registered Law Firm ');
        //check checkbox next to those words, check if the placeholders are in place
        cy.get('input[type="checkbox"][value="false"]') // Select input with value "false"
            .check({ force: true });
        cy.get('drawn-by-form')
            .find('input[id="search_input"]').type(lawFirmId);
        cy.get('drawn-by-form')
            .find('button[id="search_btn"]').click({ force: true });

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
        cy.get('input[formcontrolname="document_name"]').type(docName);
        cy.contains('button', 'Choose file').should('be.visible').click();
        cy.get('input[type="file"]').attachFile(docFile);
        cy.get('table').contains('td', `${docName}`).should('be.visible');
        cy.contains('button', 'Next').click({ force: true });

        //view and confirmation
        cy.contains('Parcel Details');
        cy.get('table').contains('td', `${registry}`).should('be.visible');

        cy.contains('Proprietor / Donor Details');
        cy.get('table').contains('td', `${donorId}`);
        cy.get('table').contains('td', `${donorName}`);

        cy.contains('Donee Details');
        cy.get('table').contains('td', `${doneeId}`);
        cy.get('table').contains('td', `${doneeName}`);

        cy.contains('Additional Provisions');
        cy.contains('p', `${addProvisions}`);

        cy.contains('Drawn By (Law firm) Details');
        cy.get('table').contains('td', `${firmName}`).should('be.visible');
        cy.get('table').contains('td', `${firmId}`).should('be.visible');

        cy.contains('Attached Documents');
        //not available

    });
    it('successfull flow of application of a new General Power of Attorney application', () => {

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

        //navigate to General Power of Attorney page
        cy.contains('Power of Attorney').should('be.visible').click();
        cy.get('table').contains('td', 'General Power of Attorney').should('be.visible').click();
        cy.contains('button', 'New Application').should('be.visible').click();
        cy.contains('General Power Of Attorney: New application');
        cy.contains('FAQs');
        cy.contains('button', 'Next').click({ force: true });
        // cy.contains('mat-step-header', 'Proprietorship details').click();

        //enter Application Details 
        cy.contains('Application Details');
        cy.get('mat-select[formcontrolname="registry"]')
            .click();
        cy.contains('span', `${registry}`).click();

        //enter donor details
        cy.contains('label', 'Add Donor using Ardhisasa ID')
            .closest('div')
            .find('input[formcontrolname="user_name"]')
            .type(donorId);
        cy.contains('label', 'Add Donor using Ardhisasa ID')
            .closest('div')
            .find('button')
            .contains('button.search_btn', 'Search')
            .click();
        cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
            .should('be.visible')
            .contains('Person To Execute');
        cy.get(`mat-radio-button[value="${executers}"]`)
            .should('be.visible')
            .click();
        cy.contains('button.add_advocate_btn', 'Save')
            .click({ force: true });
        cy.get('table').contains('td', `${donorName}`).should('be.visible');

        //enter donee details
        cy.contains('label', 'Add Donee using Ardhisasa ID')
            .closest('div')
            .find('input[formcontrolname="user_name"]')
            .type(doneeId);
        cy.contains('label', 'Add Donee using Ardhisasa ID')
            .closest('div')
            .find('button')
            .contains('button.search_btn', 'Search')
            .click();
        cy.get('mat-dialog-container[role="dialog"]', { timeout: 10000 })//popup
            .should('be.visible')
            .contains('Person To Execute');
        cy.get(`mat-radio-button[value="${executers}"]`)
            .should('be.visible')
            .click();
        cy.contains('button.add_advocate_btn', 'Save')
            .click({ force: true });
        cy.get('table').contains('td', `${doneeName}`).should('be.visible');

        //additional details
        cy.get('textarea[placeholder="Additional provisions"]').type(additionalDets);
        cy.contains('label', 'Additional provisions')
            .closest('div')
            .find('button')
            .contains('Add')
            .click();
        cy.contains('b', 'Added additional provision')
            .closest('div')
            .find('p')
            .contains(addProvisions);

        //drawn by firm details
        cy.contains('Drawn By (Law firm) Details');
        cy.contains('Do you want to tie this Application to a Registered Law Firm ');
        //check checkbox next to those words, check if the placeholders are in place
        cy.get('input[type="checkbox"][value="false"]') // Select input with value "false"
            .check({ force: true });
        cy.get('drawn-by-form')
            .find('input[id="search_input"]').type(lawFirmId);
        cy.get('drawn-by-form')
            .find('button[id="search_btn"]').click({ force: true });

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

        //view and confirmation
        cy.contains('Parcel Details');
        cy.contains('Proprietor / Donor Details');
        cy.contains('Donee Details');
        cy.contains('Additional Provisions');
        cy.contains('Drawn By (Law firm) Details');


        //submission
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
                    }).click();
            });
    });
});