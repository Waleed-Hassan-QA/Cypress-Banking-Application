/// <reference types="Cypress" />

export class CreateAccount {

    locators = {

        createAccountPageLink: "a[href='openaccount.htm']",
        accountType: 'select[id="type"]',
        openAccountBtn: 'input[value="Open New Account"]',
        successMessage: "div[id='openAccountResult'] h1[class='title']",
        NewAccountID: '#newAccountId',
    }

    goTocreateAccountPage() {
        cy.visit('https://parabank.parasoft.com/parabank/openaccount.htm')
        cy.get(this.locators.createAccountPageLink).click()
    }

    openNewAccount(accountType) {
        cy.get(this.locators.accountType).select(accountType);
        cy.wait(1000)
        cy.get(this.locators.openAccountBtn).should('be.visible').and('not.be.disabled').click();
    }

    captureNewAccountNumber() {
        return cy.get(this.locators.NewAccountID).should('be.visible').then(($el) => {
            const newAccountID = $el.text().trim()
            Cypress.env('newAccountNumber', newAccountID)
            return newAccountID
        })
    }

    asssertAccountOpened() {
        cy.get(this.locators.successMessage).should('contain', 'Account Opened!')
    }









}