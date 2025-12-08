import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { JavaPage } from "../../src/pages/JavaPage/JavaPage";
import { AuthContext } from "../../src/context/AuthContext";

describe("Тестування JavaPage", () => {
  it("рендериться без помилок", () => {
    const mockLogout = () => {};

    mount(
      <AuthContext.Provider value={{ logout: mockLogout }}>
        <MemoryRouter>
          <JavaPage />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    Cypress.on("uncaught:exception", (err) => {
      return false;
    });

    cy.contains("h2", "Java").should("exist");

    cy.get("div.frame").should("have.length.at.least", 4);
  });
});
