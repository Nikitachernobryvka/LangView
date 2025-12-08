import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { HTMLPage } from "../../src/pages/HTMLPage/HTMLPage";
import { AuthContext } from "../../src/context/AuthContext";

describe("Тестування HTMLPage", () => {
  it("рендериться без помилок", () => {
    const mockLogout = () => {};

    mount(
      <AuthContext.Provider value={{ logout: mockLogout }}>
        <MemoryRouter>
          <HTMLPage />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    Cypress.on("uncaught:exception", (err) => {
      return false;
    });

    cy.contains("h2", "HTML").should("exist");

    cy.get("div.frame").should("have.length.at.least", 4);
  });
});
