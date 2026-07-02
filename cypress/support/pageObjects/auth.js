class AuthPage {
    login(username, password) {
        cy.session( username, () => {
            cy.visit("http://10.5.24.21:8888");
            cy.get('#userID').type(username);
            cy.get('#password').type(password);
            cy.get('#Submit').click();
        })
    }
    loginToOrangeHRM(username, password) {
        cy.session( username, () => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get('[name="username"]').type(username);
            cy.get('[name="password"]').type(password);
            cy.get('[type="submit"]').click();
        })
    }
}
export const authPage = new AuthPage();