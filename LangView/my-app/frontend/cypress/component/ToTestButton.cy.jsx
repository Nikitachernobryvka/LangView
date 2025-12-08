import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { ToTestButton } from "../../src/components/ui/button/ToTestButton/ToTestButton";

describe("Тестування ToTestButton", () => {
  it("рендериться і веде на початок тесту", () => {
    mount(
      <MemoryRouter>
        <ToTestButton />
      </MemoryRouter>
    );

    cy.get("button").should("exist").and("have.text", "На початок тесту");
    
    cy.get("a").should("have.attr", "href", "/testbegin");
  });
});
