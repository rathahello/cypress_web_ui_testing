class AuthPage {
    login(username, password) {
        cy.visit("http://10.5.24.21:8888");
        cy.get('#userID').type(username);
        cy.get('#password').type(password);
        cy.get('#Submit').click()
    }
}
export const authPage = new AuthPage();