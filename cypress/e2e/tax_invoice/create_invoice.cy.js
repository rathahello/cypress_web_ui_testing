import { authPage } from '../../support/pageObjects/auth'
import { taxInvoice } from '../../support/pageObjects/invoice'
import { dataObject } from '../../support/pageObjects/data'

describe("Successfully create invoice", () => {
    beforeEach(() => {
        dataObject.getCsvData('user_login_test_data.csv')
            .then((data) => {
            authPage.login(data[0].username, data[0].password);
        })
    })
    it("create invoice", () => {
        dataObject.getCsvData('invoice_test_data.csv')
        .then((parsedData) => {
            taxInvoice.createInvoice(
            parsedData[0].customerAddress,
            parsedData[0].telephone,
            parsedData[0].vatTin,
            parsedData[0].quantity,
            parsedData[0].unitPrice
            );
        });
    })
    it("Verify invoice creation response", () => {
        cy.get('[data-toggle="dropdown"]').click();
        cy.contains('Tax Invoice').click(); 
        dataObject.getJsonData('invoice_created.json')
        .then(value => {
            cy.get('tbody').contains('td', value.customerName).eq(0).should('be.visible');
            cy.get('tbody').contains('td', 'REGISTERED').eq(0).should('be.visible');
        })
    })
})