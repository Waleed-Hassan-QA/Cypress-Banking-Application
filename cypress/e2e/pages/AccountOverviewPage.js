/// <reference types="Cypress" />
export class AccountOverviewPage {


    locators = {
        accountPage: "a[href='overview.htm']",
        pageTitle: "div[id='showOverview'] h1[class='title']",
        accountTable: "#accountTable",
        accountTableRow: "#accountTable tbody tr",
        accountTableHeader: "#accountTable th",

        //Account Detail Page
        pageHeading: "#accountDetails .title",
        accountId: "#accountId",
        accountType: "#accountType",
        trasactionTable: "#transactionTable",

    }


    visitAccountOverviewPage() {
        cy.visit('https://parabank.parasoft.com/parabank/overview.htm')
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/overview.htm')
        //cy.contains('Accounts Overview').click()
    }


    checkAccountPageHeading() {
        cy.get(this.locators.pageTitle).should('contain.text', 'Accounts Overview')
    }

    checkAccountTableVisible() {
        cy.get(this.locators.accountTable).should('be.visible')
    }

    checkAccountTableLength() {
        cy.get(this.locators.accountTableRow).its('length').should('be.gt', 1)
    }

    checkTableHeaderText(expectedHeaders) {
        cy.get(this.locators.accountTableHeader).each(($el, index) => {
            expect($el.text()).to.eq(expectedHeaders[index])
            //cy.wrap($el).should('contain.text', expectedHeaders[index]); This one is also correct
        }).should('have.length', expectedHeaders.length)
    }

    verifyNewAccountDetails() {
        const targetAccountID = Cypress.env('newAccountNumber')
        cy.get(this.locators.accountTableRow).contains('td', targetAccountID)
            .parent('tr')
            .within(() => {
                cy.get('td').eq(0).should('have.text', targetAccountID)
                cy.get('td').eq(1).should('have.text', '$100.00');
                cy.get('td').eq(2).should('have.text', '$100.00')
            });

        //cy.get(this.locators.accountTableRow).find('td').contains('a',13344) This one is fine

        // Fine
        // cy.get(this.locators.accountTableRow).first().find('td').first().invoke('text').then((accountId) => {
        //     expect(accountId.trim()).to.equal('12345')
        //     });


        //  This one is fine when we know the row 
        // cy.get('#accountTable tbody tr')
        //     .eq(-3)
        //     .within(() => {
        //         cy.get('td').eq(0).should('have.text', 13677);

        //     });


    }

    findAccount(ad) {

        cy.get(this.locators.accountTableRow).find('td').contains(ad.accountId).click()

    }
    verifyAccountDetailsByPage(ad) {

        cy.get(this.locators.pageHeading)
            .should('be.visible').and('have.text', 'Account Details')
        cy.get(this.locators.accountId)
            .should('be.visible').and('have.text', ad.accountId)
        cy.get(this.locators.accountType)
            .should('be.visible').and('have.text', ad.accountType)
        cy.get(this.locators.trasactionTable)
            .should('be.visible')

    }

}