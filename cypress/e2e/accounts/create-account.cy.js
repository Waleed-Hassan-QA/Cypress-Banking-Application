
import { CreateAccount } from "../pages/CreateAccount"
import { AccountOverviewPage } from "../pages/AccountOverviewPage"

const createAccount = new CreateAccount()
const accountOverviewPage = new AccountOverviewPage()

describe("Accounts Test", () => {

    beforeEach(function () {
        cy.session('myUserSession', () => {
            cy.login('john', 'demo')
        })
    })

    it('Create a new account', () => {
        
        createAccount.goTocreateAccountPage()
        createAccount.openNewAccount("SAVINGS")
        createAccount.captureNewAccountNumber()
        createAccount.asssertAccountOpened()

    })


    it('Verify New account details in overview page', () => {

        accountOverviewPage.visitAccountOverviewPage()
        accountOverviewPage.verifyNewAccountDetails()

    })

})