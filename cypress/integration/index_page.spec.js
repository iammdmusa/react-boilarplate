/// <reference types="cypress" />

describe("index Page", function() {
  beforeEach(() => {
    cy.log("Visiting http://localhost:3000");
    cy.visit("/");
  });

  it("renders deploy link", function() {
    cy.get("#__next")
      .find(".flex-1")
      .find("h1")
      .contains("Welcome to home page");
  });
});
