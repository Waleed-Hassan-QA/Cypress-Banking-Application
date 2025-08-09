import { LoginPage } from "../pages/LoginPage"
import user from "../../fixtures/user.json"

const loginPage = new LoginPage()

describe("Login Test Suite", ()=>{

    it('Login with valid user',()=>{
        loginPage.visitPage()
        loginPage.fillLoginForm(user.name,user.password)
        loginPage.assertLoginSuccess().should('be.visible','Accounts Overview')
        loginPage.assertLoginSuccess().contains('Accounts Overview')
        loginPage.logout()
        cy.url().should('include','ConnType=JDBC')
    })

    it('Validate error message with invalid user',()=>{
        loginPage.visitPage()
        loginPage.fillLoginForm('waleed','123')
        loginPage.assertloginError().should('have.text','An internal error has occurred and has been logged.')
    })










})