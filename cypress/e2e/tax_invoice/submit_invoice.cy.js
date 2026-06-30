import { authPage } from '../../support/pageObjects/auth'
import { dataObject } from '../../support/pageObjects/data'

describe("Submit Tax Invoice", () => {
    beforeEach(() => {
        dataObject.getCsvData('user_login_test_data.csv')
        .then((data) => {
            authPage.login(data[0].username, data[0].password);
        })
    })
    it("Submit invoice", () => {
        cy.get('[data-toggle="dropdown"]').click();
        cy.contains('Tax Invoice').click();
        cy.get('tbody').contains('td', 'REGISTERED').eq(0).should('be.visible').then(() => {
            cy.get('[data-tip="✏ Edit Invoice"]').eq(0).click();
        })
        cy.get('button').contains('Submit').click();
    })
})