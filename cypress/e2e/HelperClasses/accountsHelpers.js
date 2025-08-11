/// <reference types="Cypress" />

import { AccountOverviewPage } from '../pages/AccountOverviewPage';
import { CreateAccount } from '../pages/CreateAccount';

const accountOviewPage = new AccountOverviewPage()
const createAccountPage = new CreateAccount()

export function getFromAndToAccounts() {
  cy.login('john', 'demo'); 

  return accountOviewPage.getExixtingAccountId().then((from) => {
    // Create a new account and get its ID
    createAccountPage.goTocreateAccountPage();
    createAccountPage.openNewAccount('SAVINGS');
    createAccountPage.asssertAccountOpened();
    
    return createAccountPage.captureNewAccountNumber().then((to) => {
      return { from, to };
    });
  });
}