import { BillPayPage } from "../pages/BillPayPage"
import { payeeData } from "..//../fixtures/payeeData.json"
import { AccountOverviewPage } from "../pages/AccountOverviewPage"

const billPayPage = new BillPayPage()
const accountOviewPage = new AccountOverviewPage()


describe("Bill Pay Tests", () => {

    before(function () {
        cy.login('john', 'demo')
    })

    it('Add Payee & send payment', () => {

        cy.fixture('payeeData.json').then((data) => {
            accountOviewPage.getExixtingAccountId().then((from) => {
                data.fromAccount = from
                billPayPage.visit_BillPayPage()
                billPayPage.addPayeedDetails_AndPayBill(data.PayeeDetails, data.RecipentDetails, data.amount, data.fromAccount)
                billPayPage.asssertBillPaid()

            })

        })



    })




})