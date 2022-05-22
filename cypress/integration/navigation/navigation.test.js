/* eslint-disable no-undef */
const { baseUrl } = Cypress.config()

describe("Links redirection", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Routes to the main page when clicking the logo", () => {
    // Homepage
    cy.get("nav").get("[data-testid=logo]").click()
    cy.url().should("eq", `${baseUrl}/`)
  })

  /*   it("Routes to the corresponding locale when clicking a flag", () => {
    cy.get("nav").get("#react-select-long-value-select-option-0").click();
    cy.url().should("eq", `${baseUrl}/fr`);
  }); */

  it("Scrolls down to the right section of the page after clicking nav links.", () => {
    cy.get("nav").get("[data-testid=about-link]").click()
    cy.get(".about-section")
      .get("[data-testid=about-photo]")
      .should("be.visible")

    cy.get("nav").get("[data-testid=skills-link]").click()
    cy.get(".skills-section")
      .get("[data-testid=skills-list]")
      .should("be.visible")

    cy.get("nav").get("[data-testid=projects-link]").click()
    cy.get(".projects-section").should("be.visible")

    cy.get("nav").get("[data-testid=contact-link]").click()
    cy.get(".contact-section")
      .get("[data-testid=contact-message]")
      .should("be.visible")
  })
})
