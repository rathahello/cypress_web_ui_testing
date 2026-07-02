import { randomValues } from "./random";
import { dataObject } from "./data";
import { intercept } from "./intercept";

class UserManagement {
    addUser(userRole, status, password) {
        let userName = `${randomValues.randomString(10)}`;
        cy.customContainsClick('[type="button"]', "Add");
        cy.customClick('.oxd-select-text-input', 0);
        cy.customContainsClick(".oxd-select-dropdown", userRole);
        cy.customClick('.oxd-select-text-input', 1);
        cy.customContainsClick(".oxd-select-dropdown", status);
        cy.get('input[placeholder="Type for hints..."]')
          .type("a")
          .wait(2000);
        cy.customClick('.oxd-autocomplete-dropdown', 0);
        cy.customEqInput('input.oxd-input', 1, userName);
        cy.customEqInput('[type="password"]', 0, password);
        cy.customEqInput('[type="password"]', 1, password);
        cy.get('[type="submit"]').click();
        intercept.interceptNetworkPost('api/v2/admin/users', 'addUserRequest', 'user_created.json');
    }
    searchUser(userName) {
        cy.customEqInput('input.oxd-input', 0, userName);
    }
}
export const userManagement = new UserManagement();