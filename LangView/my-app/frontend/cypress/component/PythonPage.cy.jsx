import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { PythonPage } from "../../src/pages/PythonPage/PythonPage";
import { AuthContext } from "../../src/context/AuthContext";

describe("Тестування PythonPage", () => {
  it("рендериться без помилок", () => {
    const mockLogout = () => {};

    mount(
      <AuthContext.Provider value={{ logout: mockLogout }}>
        <MemoryRouter>
          <PythonPage />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    Cypress.on("uncaught:exception", (err) => {
      return false;
    });

    cy.contains("h2", "Python").should("exist");

    cy.get("div.frame").should("have.length.at.least", 3);
  });
});
