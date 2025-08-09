/// <reference types="Cypress" />

export class LoginPage {

    locators = {

        username: 'input[name="username"]',
        password: 'input[name="password"]',
        btn: 'input[value="Log In"]',
        success: 'div[id="showOverview"] h1[class="title"]',
        error: '.error',
        logout: 'a[href="logout.htm"]'


    }

    visitPage() {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    }

    fillLoginForm(name, password) {
        cy.get(this.locators.username).clear().type(name)
        cy.get(this.locators.password).clear().type(password)
        cy.get(this.locators.btn).click()
    }

    logout(){
        cy.get(this.locators.logout).click()
    }

    assertLoginSuccess() {
        return cy.get(this.locators.success)
    }

    assertloginError() {
        return cy.get(this.locators.error)
    }



}