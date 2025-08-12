export class BillPayPage {

    locators = {

        billPayPageLink: 'a[href="billpay.htm"]',
        payeeName: "input[name='payee.name']",
        payeeAddress: "input[name='payee.address.street']",
        payeeCity: "input[name='payee.address.city']",
        payeeState: "input[name='payee.address.state']",
        payeeZipCode: "input[name='payee.address.zipCode']",
        payeePhone: 'input[name="payee.phoneNumber"]',

        //Recipent Account Details
        recipentAccountNumber: "input[name='payee.accountNumber']",
        verifyAccountNumber: "input[name='verifyAccount']",

        // Amount 
        amount: "input[name='amount']",
        fromAccount: "select[name='fromAccountId']",
        sendPayment: "input[value='Send Payment']",

        //Assert
        assertBillPayment:"div[id='billpayResult'] h1[class='title']"

    }

    visit_BillPayPage() {
         cy.visit('https://parabank.parasoft.com/parabank/billpay.htm')
    }

    addPayeedDetails_AndPayBill(PayeeDetails, AccountDetails, Amount, fromAccount) {
        cy.get(this.locators.payeeName).clear().type(PayeeDetails.payeeName)
        cy.get(this.locators.payeeAddress).clear().type(PayeeDetails.payeeAddress)
        cy.get(this.locators.payeeCity).clear().type(PayeeDetails.payeeCity)
        cy.get(this.locators.payeeState).clear().type(PayeeDetails.payeeState)
        cy.get(this.locators.payeeZipCode).clear().type(PayeeDetails.payeeZipCode)
        cy.get(this.locators.payeePhone).clear().type(PayeeDetails.payeePhone)

        cy.get(this.locators.recipentAccountNumber).clear().type(AccountDetails.recipentAccountNumber)
        cy.get(this.locators.verifyAccountNumber).clear().type(AccountDetails.verifyAccountNumber)

        cy.get(this.locators.amount).clear().type(Amount)
        cy.get(this.locators.fromAccount).select(fromAccount)

        cy.get(this.locators.sendPayment).click()
    }

    asssertBillPaid() {
         cy.get(this.locators.assertBillPayment).should('have.text','Bill Payment Complete')
    }



}