/* eslint-disable no-undef */
const { baseUrl } = Cypress.config();

describe("Links redirection", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Routes to the right page upon clicking the logo", () => {
    // Homepage
    cy.get("nav").get("[data-testid=logo]").click();
    cy.url().should("eq", `${baseUrl}/`);
  });

  it("Scrolls down to the right section of the page after clicking nav links.", () => {
    cy.get("nav").get("[data-testid=about-link]").click();
    cy.get(".about-section")
      .get("[data-testid=about-photo]")
      .should("be.visible");

    cy.get("nav").get("[data-testid=skills-link]").click();
    cy.get(".skills-section")
      .get("[data-testid=skills-list]")
      .should("be.visible");

    cy.get("nav").get("[data-testid=projects-link]").click();
    cy.get(".projects-section").should("be.visible");

    cy.get("nav").get("[data-testid=contact-link]").click();
    cy.get(".contact-section")
      .get("[data-testid=form-message]")
      .should("be.visible");
  });
});
