/// <reference types="Cypress" />
import { TransferFundsPage } from "../pages/TransferFundsPage";
import { getFromAndToAccounts } from "../HelperClasses/accountsHelpers";

const transferFundPage = new TransferFundsPage()

describe("Transfer Funds Test", () => {


    it('Should transfer funds from existing to new account', () => {
        getFromAndToAccounts().then(({ from, to }) => {
            transferFundPage.visitTransferFundsPage()
            transferFundPage.fundTransfer('10', from, to)
            transferFundPage.assertFundTransfer()
        })
    })
    


})