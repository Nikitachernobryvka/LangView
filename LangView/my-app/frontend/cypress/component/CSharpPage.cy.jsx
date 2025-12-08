import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { CSharpPage } from "../../src/pages/CSharpPage/CSharpPage";
import { AuthContext } from "../../src/context/AuthContext";

describe("Тестування CSharpPage", () => {
  it("рендериться без помилок", () => {
    const mockLogout = () => {};

    mount(
      <AuthContext.Provider value={{ logout: mockLogout }}>
        <MemoryRouter>
          <CSharpPage />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    Cypress.on("uncaught:exception", (err) => {
      return false;
    });

    cy.contains("h2", "C#").should("exist");

    cy.get("div.frame").should("have.length.at.least", 4);
  });
});
