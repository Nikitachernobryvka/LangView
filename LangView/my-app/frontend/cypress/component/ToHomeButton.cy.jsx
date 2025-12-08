import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { ToHomeButton } from "../../src/components/ui/button/ToHomeButton/ToHomeButton";

describe("Тестування ToHomeButton", () => {
  it("рендериться і веде на головну", () => {
    mount(
      <MemoryRouter>
        <ToHomeButton />
      </MemoryRouter>
    );
    
    cy.get("button").should("exist").and("have.text", "На головну");
    
    cy.get("a").should("have.attr", "href", "/");
  });
});
