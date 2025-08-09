import { RegisterPage } from "../pages/RegisterPage"
import registerData from "../../fixtures/registerUser.json"

const register = new RegisterPage()

describe("Registeration Test", ()=>{

    //const randomNum = Math.floor(Math.random() * 10000)
    //const randomString = Math.random().toString(36).substring(2, 8)

    it('Create a new user',()=>{
        register.visitPage()
        cy.url().should('include','register')
        register.createNewUser(registerData)
        register.assertRegistrationSuccess().should('contain.text','Welcome ' + registerData.username)
      
    })

   








})