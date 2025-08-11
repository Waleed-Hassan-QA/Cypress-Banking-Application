/// <reference types="Cypress" />

export class TransferFundsPage {

    locators = {

        pageHeading: "div[id='showForm'] h1[class='title']",
        amount: "#amount",
        fromAcount: "#fromAccountId",
        toAccount: "#toAccountId",
        send: "input[value='Transfer']",

        // Assert fund transfer
        transferCompleted: "div[id='showResult'] h1[class='title']",
        SuccessMessage: "div[id='showResult'] h1[class='title']",

    }

    visitTransferFundsPage() {
        cy.visit('https://parabank.parasoft.com/parabank/transfer.htm')
    }

    verifyPageHeading(){
        cy.get(this.locators.pageHeading).should('contain','Transfer Funds')
    }

    fundTransfer(amount,fromAccount,toAccount) {

        cy.get(this.locators.amount).clear().type(amount)
        cy.get(this.locators.fromAcount).select(fromAccount)
        cy.get(this.locators.toAccount).select(toAccount)
        cy.get(this.locators.send).click()

    }

     assertFundTransfer(){
        cy.get(this.locators.transferCompleted).should('have.text','Transfer Complete!')
    }


}