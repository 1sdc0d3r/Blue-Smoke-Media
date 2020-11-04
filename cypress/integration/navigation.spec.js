describe('Navigation', () => {
    it('loads home page', () => {
        cy.visit("/");
        cy.contains("h1", /Blue Smoke Digital/i);
    });
    it('navigates to help', () => {
        cy.get("button").contains(/home/i).should('be.visible').trigger("mouseover")
        cy.get("a[href='/help']").contains(/need help/i).click()
    });
})
