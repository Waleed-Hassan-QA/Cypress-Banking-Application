export class RegisterPage {


    locators = {

        firstname: 'input[id="customer.firstName"]',
        lastname: 'input[id="customer.lastName"]',
        address: 'input[id="customer.address.street"]',
        city: 'input[id="customer.address.city"]',
        state: 'input[id="customer.address.state"]',
        zipCode: 'input[id="customer.address.zipCode"]',
        phone: 'input[id="customer.phoneNumber"]',
        ssn: 'input[id="customer.ssn"]',
        username: 'input[id="customer.username"]',
        password: 'input[id="customer.password"]',
        confirm_password: 'input[id="repeatedPassword"]',
        registerBTN: 'input[value="Register"]',
        successMessage: '#rightPanel h1[class="title"] ',

    }

    visitPage() {
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    }

    createNewUser(user) {

        cy.get(this.locators.firstname).clear().type(user.firstname)
        cy.get(this.locators.lastname).clear().type(user.lastname)
        cy.get(this.locators.address).clear().type(user.address)
        cy.get(this.locators.city).clear().type(user.city)
        cy.get(this.locators.state).clear().type(user.state)
        cy.get(this.locators.zipCode).clear().type(user.zipCode)
        cy.get(this.locators.phone).clear().type(user.phone)
        cy.get(this.locators.ssn).clear().type(user.ssn)
        cy.get(this.locators.username).clear().type(user.username)
        cy.get(this.locators.password).clear().type(user.password)
        cy.get(this.locators.confirm_password).clear().type(user.password)
        cy.get(this.locators.registerBTN).click()

    }

    assertRegistrationSuccess() {
        return cy.get(this.locators.successMessage)
    }
}