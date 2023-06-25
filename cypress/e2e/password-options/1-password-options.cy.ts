/// <reference types="cypress" />

const regexLowercaseOnly = /^[a-z]+$/g;
const regexUppercaseOnly = /^[A-Z]+$/g;
const regexNumbersOnly = /^[0-9]+$/g;
const regexSpecialOnly = /[~`!@#$%^&*()_\-+={[}\]|\\:;\"'<,>.?/]/g;

describe("generates-password", () => {
  beforeEach(() => {
    // allow clipboard
    Cypress.automation("remote:debugger:protocol", {
      command: "Browser.grantPermissions",
      params: {
        permissions: ["clipboardReadWrite", "clipboardSanitizedWrite"],
        origin: window.location.origin,
      },
    });

    // go to page
    cy.visit("http://localhost:3000");

    // wait until page loads
    cy.wait(100);
  });

  it("has a default password length of 15", () => {
    // click generate button
    cy.get("#button-generate").click();

    // check generated password is 15 characters long
    cy.get("#input-password").invoke("val").should("have.length", 15);
  });

  it("has a minimum allowable length 8", () => {
    // select all text inside input, enter value avove max akllowable length
    cy.get("#length").type("{selectall}").type("1");

    // click generate button
    cy.get("#button-generate").click();
    cy.get("#button-generate").click();

    // check generated password is 8 characters long
    cy.get("#input-password").invoke("val").should("have.length", 8);
  });

  it("has a maximum allowable length 99", () => {
    // select all text inside input, enter value avove max akllowable length
    cy.get("#length").type("{selectall}").type("999");

    // click generate button
    cy.get("#button-generate").click();
    cy.get("#button-generate").click();

    // check generated password is 99 characters long
    cy.get("#input-password").invoke("val").should("have.length", 99);
  });

  it("has the correct length when set to a custom length (23)", () => {
    // select all text inside input, then type 23
    cy.get("#length").type("{selectall}").type("23");

    // click generate button
    cy.get("#button-generate").click();
    cy.get("#button-generate").click();

    // check generated password is 69 characters long
    cy.get("#input-password").invoke("val").should("have.length", 23);
  });

  it("has only lowercase characters", () => {
    // uncheck all options except lowercase
    cy.get("#uppercase").click();
    cy.get("#numbers").click();
    cy.get("#special").click();

    // click generate button
    cy.get("#button-generate").click();

    // check generated password is 69 characters long
    cy.get("#input-password").invoke("val").should("match", regexLowercaseOnly);
  });

  it("has only uppercase characters", () => {
    // uncheck all options except lowercase
    cy.get("#lowercase").click();
    cy.get("#numbers").click();
    cy.get("#special").click();

    // click generate button
    cy.get("#button-generate").click();

    // check generated password is 69 characters long
    cy.get("#input-password").invoke("val").should("match", regexUppercaseOnly);
  });

  it("has only numbers", () => {
    // uncheck all options except lowercase
    cy.get("#lowercase").click();
    cy.get("#uppercase").click();
    cy.get("#special").click();

    // click generate button
    cy.get("#button-generate").click();

    // check generated password is 69 characters long
    cy.get("#input-password").invoke("val").should("match", regexNumbersOnly);
  });

  it("has only special characters", () => {
    // uncheck all options except lowercase
    cy.get("#lowercase").click();
    cy.get("#uppercase").click();
    cy.get("#numbers").click();

    // click generate button
    cy.get("#button-generate").click();

    // check generated password is 69 characters long
    cy.get("#input-password").invoke("val").should("match", regexSpecialOnly);
  });
});
