// import {dataObject} from '../../support/pageObjects/data'

// describe("Login Test Suite", () => {
//     it("login with valid credentials", () => {
//         cy.visit("http://10.5.24.21:8888");
//         cy.contains("Sign in to Chief Bank System").should("be.visible");
//         dataObject.getCsvData('user_login_test_data.csv').then((data) => {
//             cy.get("#userID").type(data[0].username);
//             cy.get("#password").type(data[0].password);
//         });
//         cy.get("#Submit").click();
//     })
// })