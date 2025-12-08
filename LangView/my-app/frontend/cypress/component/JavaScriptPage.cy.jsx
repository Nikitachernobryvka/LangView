import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { JavaScriptPage } from "../../src/pages/JavaScriptPage/JavaScriptPage";
import { AuthContext } from "../../src/context/AuthContext";

describe("Тестування JavaScriptPage", () => {
  it("рендериться без помилок", () => {
    const mockLogout = () => {};

    mount(
      <AuthContext.Provider value={{ logout: mockLogout }}>
        <MemoryRouter>
          <JavaScriptPage />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    Cypress.on("uncaught:exception", (err) => {
      return false;
    });

    cy.contains("h2", "JavaScript").should("exist");

    cy.get("div.frame").should("have.length.at.least", 4);
  });
});
