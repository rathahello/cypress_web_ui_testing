describe("Login with valid credentials", () => {
    it("should login successfully", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[name="username"]').type("Admin");
        cy.get('[name="password"]').type("admin123");
        cy.get('[type="submit"]').click();
        cy.get('h6').contains("Dashboard").should("be.visible");
    });
});