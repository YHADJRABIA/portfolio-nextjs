/* eslint-disable no-undef */

const { baseUrl } = Cypress.config();

describe("Homepage rendering", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.scrollTo(0, 1000);
  });

  it("Loads the layout correctly", () => {
    cy.get(".hero-container").should("exist");
    cy.get("nav").should("exist");
    cy.get(".about-section").get("[data-testid=about-photo]").should("exist");
    cy.get(".skills-section").get("[data-testid=skills-list]").should("exist");
    cy.get(".projects-section").should("exist");
    cy.get(".contact-section").should("exist");
    cy.get("footer").should("exist");
  });

  it("Ensures that the navbar is always visible and contains all elements except the burger menu", () => {
    cy.get("nav").get("[data-testid=logo]").should("be.visible");
    cy.get(".nav-menu li").should("have.length", 5);
    cy.get("nav").get("[data-testid=about-link]").should("be.visible");
    cy.get("nav").get("[data-testid=skills-link]").should("be.visible");
    cy.get("nav").get("[data-testid=projects-link]").should("be.visible");
    cy.get("nav").get("[data-testid=contact-link]").should("be.visible");
    cy.get("nav").get(".language-container").should("be.visible");
    cy.get("nav").get("[data-testid=burger-menu]").should("not.be.visible");
  });

  it("Shows all the flags when the language toggler is clicked", () => {
    cy.get(".flag-img").click();
    cy.get("#react-select-long-value-select-placeholder").should("be.visible");
    cy.get("#react-select-long-value-select-option-0").should("be.visible");
    cy.get("#react-select-long-value-select-option-1").should("be.visible");
    cy.get("#react-select-long-value-select-option-2").should("be.visible");
  });

  it("Changes the navbar's colour after scrolling down", () => {
    cy.get("nav").should("have.class", "active");
  });

  it("Leads to the right section after clicking the navbar links", () => {});
});

describe("Reponsive layout rendering on mobile", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(320, 480);
    cy.scrollTo(0, 1000);
  });

  it("Shows nabar correctly with logo only", () => {
    cy.get("nav").get("[data-testid=burger-menu]").should("be.visible");
    cy.get("nav").get("[data-testid=logo]").should("be.visible");
    cy.get(".nav-menu li").should("have.length", 5);
    cy.get("nav").get("[data-testid=about-link]").should("not.be.visible");
    cy.get("nav").get("[data-testid=skills-link]").should("not.be.visible");
    cy.get("nav").get("[data-testid=projects-link]").should("not.be.visible");
    cy.get("nav").get("[data-testid=contact-link]").should("not.be.visible");
    cy.get("nav").get(".language-container").should("not.be.visible");
  });

  it("Shows navigation menu only once burger icon is clicked", () => {
    cy.get("nav")
      .get("[data-testid=burger-menu]")
      .click()
      .should("have.class", "burger-toggled");
    cy.get("nav").get("[data-testid=about-link]").should("be.visible");
    cy.get("nav").get("[data-testid=skills-link]").should("be.visible");
    cy.get("nav").get("[data-testid=projects-link]").should("be.visible");
    cy.get("nav").get("[data-testid=contact-link]").should("be.visible");
    cy.get("nav").get(".language-container").should("be.visible");
  });
});
