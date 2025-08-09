import { BillPayPage } from "../pages/BillPayPage"


const billPayPage = new BillPayPage()

const data = {

    PayeeDetails: {
        payeeName: 'Waleed',
        payeeAddress: 'abc',
        payeeCity: 'new york',
        payeeState: 'new york',
        payeeZipCode: '1234',
        payeePhone: '1234'
    },

    RecipentDetails: {
        recipentAccountNumber: '1234',
        verifyAccountNumber: '1234'
    },

    amount: '10',
    fromAccount: '2345',
}
describe("Bill Pay Tests", () => {

    before(function () {
        cy.login('test2', 'test')
    })

    it('Add Payee & send payment', () => {

        billPayPage.visit_BillPayPage().click()
        billPayPage.addPayeedDetails_AndPayBill(data.PayeeDetails,data.RecipentDetails,data.amount,data.fromAccount)
       // createAccount.asssertAccountOpened().should('contain', 'Account Opened!')

    })




})