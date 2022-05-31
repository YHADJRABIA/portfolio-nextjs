/* eslint-disable no-undef */

// scrollBehavior set to center to avoid bug from sticky nav hidding elements
describe("Form actions", { scrollBehavior: "center" }, () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Shows an error if fields are empty", () => {
    cy.get("[data-testid=submit-contact-form]").click()
    cy.contains("All fields must be filled out").should("be.visible")
  })

  it("Shows an error if empty spaces if one or many fields have whitespaces only", () => {
    cy.get("[data-testid=contact-name]").type("test")
    cy.get("[data-testid=contact-email]").type("  ")
    cy.get("[data-testid=contact-message]").type("My message")
    cy.get("[data-testid=submit-contact-form]").click()
    cy.contains("All fields must be filled out").should("be.visible")
  })

  it("Shows an error in case of an invalid email", () => {
    cy.get("[data-testid=contact-name]").type("test")
    cy.get("[data-testid=contact-email]").type("invalid e-mail")
    cy.get("[data-testid=contact-message]").type("My message")
    cy.get("[data-testid=submit-contact-form]").click()
    cy.contains("Invalid e-mail").should("be.visible")
  })

  it("Shows an error if reCAPTCHA is unticked", () => {
    cy.get("[data-testid=contact-name]").type("test")
    cy.get("[data-testid=contact-email]").type("valid@email.com")
    cy.get("[data-testid=contact-message]").type("My message")
    cy.get("[data-testid=submit-contact-form]").click()
    cy.contains("Tick reCAPTCHA").should("be.visible")
  })

  it("Resets fields if form is successfully submitted", () => {
    cy.get("[data-testid=contact-name]").type("test")
    cy.get("[data-testid=contact-email]").type("valid@email.com")
    cy.get("[data-testid=contact-message]").type("My message")
    Cypress.Commands.add("solveGoogleReCAPTCHA", () => {
      // Wait until the iframe (Google reCAPTCHA) is totally loaded
      cy.wait(500)
      cy.get("#g-recaptcha *> iframe").then($iframe => {
        const $body = $iframe.contents().find("body")
        cy.wrap($body)
          .find(".recaptcha-checkbox-border")
          .should("be.visible")
          .click()
      })
    })
    cy.get("[data-testid=submit-contact-form]").click()
    cy.get("input").should("have.value", "")
  })

  it("Shows a success message if message has been submitted", () => {
    cy.get("[data-testid=contact-name]").type("test")
    cy.get("[data-testid=contact-email]").type("valid@email.com")
    cy.get("[data-testid=contact-message]").type("My message")
    Cypress.Commands.add("solveGoogleReCAPTCHA", () => {
      // Wait until the iframe (Google reCAPTCHA) is totally loaded
      cy.wait(500)
      cy.get("#g-recaptcha *> iframe").then($iframe => {
        const $body = $iframe.contents().find("body")
        cy.wrap($body)
          .find(".recaptcha-checkbox-border")
          .should("be.visible")
          .click()
      })
    })
    cy.get("[data-testid=submit-contact-form]").click()
    cy.contains("E-mail sent").should("be.visible")
  })
})
