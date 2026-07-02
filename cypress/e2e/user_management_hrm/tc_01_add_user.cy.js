// import { authPage} from '../../support/pageObjects/auth'
// import { userManagement } from '../../support/pageObjects/user_management'
// import { dataObject } from '../../support/pageObjects/data'

// describe("User Management - Add User", () => {
//     it("Add User", () => {
//         // Login to OrangeHRM
//         authPage.loginToOrangeHRM("Admin", "admin123");
//         // Navigate to User Management page
//         cy.contains('Admin').should('be.visible').click();
//         cy.get("span").contains("User Management").should('be.visible');
//         dataObject.getCsvData("user_management_test_data.csv").then((data) => {
//             userManagement.addUser(
//                 data[0].userRole,
//                 data[0].status,
//                 data[0].password
//             );
//         })
//     })
//     it("Search user after created successfully", () => {
//         dataObject.getJsonData("user_created.json").then((data) => {
//             // Navigate to User Management page
//             cy.contains('Admin').should('be.visible').click();
//             userManagement.searchUser(
//                 data.userName
//             );
//         })
//     })
// })