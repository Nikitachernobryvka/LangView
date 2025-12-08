import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { LogoutButton } from "../../src/components/ui/button/LogoutButton/LogoutButton";
import { AuthContext } from "../../src/context/AuthContext";

describe("Тестування LogoutButton", () => {
  it("рендериться і показує картинку", () => {
    const mockLogout = () => {};

    mount(
      <AuthContext.Provider value={{ logout: mockLogout }}>
        <MemoryRouter>
          <LogoutButton />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    cy.get("button").should("exist");

    cy.get("button img").should("exist");
  });
});
