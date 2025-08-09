/// <reference types="Cypress" />
import { AccountOverviewPage } from "../pages/AccountOverviewPage"


const accountOviewPage = new AccountOverviewPage()
const expectedHeaders = ['Account', 'Balance*', 'Available Amount'];
const accountDetails = {
    accountId:'13344',
    accountType:'SAVINGS'
}

describe("Accounts Overview Test", () => {

    beforeEach(function () {
        cy.session('myUserSession', () => {
            cy.login('john', 'demo')
        })
    })

    it('Verify user can view account overview after login', () => {
    
        accountOviewPage.visitAccountOverviewPage()
        accountOviewPage.checkAccountPageHeading()
        accountOviewPage.checkAccountTableVisible()
        accountOviewPage.checkAccountTableLength()
        accountOviewPage.checkTableHeaderText(expectedHeaders)
        
    })

    it.skip('Verify new account details after creating it', () => {
        accountOviewPage.visitAccountOverviewPage()
        accountOviewPage.verifyNewAccountDetails()
    })


    it('Verify Account details by Page', () => {
        accountOviewPage.visitAccountOverviewPage()
        accountOviewPage.findAccount(accountDetails)
        accountOviewPage.verifyAccountDetailsByPage(accountDetails)

    })

})