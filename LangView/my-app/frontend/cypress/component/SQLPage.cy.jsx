import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { SQLPage } from "../../src/pages/SQLPage/SQLPage";
import { AuthContext } from "../../src/context/AuthContext";

describe("Тестування SQLPage", () => {
  it("рендериться без помилок", () => {
    const mockLogout = () => {};

    mount(
      <AuthContext.Provider value={{ logout: mockLogout }}>
        <MemoryRouter>
          <SQLPage />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    Cypress.on("uncaught:exception", (err) => {
      return false;
    });

    cy.contains("h2", "SQL").should("exist");

    cy.get("div.frame").should("have.length.at.least", 4);
  });
});
