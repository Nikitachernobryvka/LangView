import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { NavigationBar } from "../../src/components/layouts/NavigationBar/NavigationBar"
import { AuthContext } from "../../src/context/AuthContext";

describe(" Тестування NavigationBar", () => {
  it("рендериться з mock контекстом", () => {
    const mockLogout = cy.stub(); 

    mount(
      <AuthContext.Provider value={{ logout: mockLogout }}>
        <MemoryRouter>
          <NavigationBar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    cy.get("nav").should("exist");
    cy.contains("a", "C#").should("exist");
    cy.contains("a", "Python").should("exist");
  });
});
