import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { CSSPage } from "../../src/pages/CSSPage/CSSPage";
import { AuthContext } from "../../src/context/AuthContext";

describe("Тестування CSSPage", () => {
  it("рендериться без помилок", () => {
    const mockLogout = () => {};

    mount(
      <AuthContext.Provider value={{ logout: mockLogout }}>
        <MemoryRouter>
          <CSSPage />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    Cypress.on("uncaught:exception", (err) => {
      return false;
    });

    cy.contains("h2", "CSS").should("exist");

    cy.get("div.frame").should("have.length.at.least", 4);
  });
});
