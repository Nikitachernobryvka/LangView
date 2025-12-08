import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { RepeatButton } from "../../src/components/ui/button/RepeatButton/RepeatButton";

describe("Тестування RepeatButton", () => {
  it("рендериться і веде на початок тесту", () => {
    mount(
      <MemoryRouter>
        <RepeatButton />
      </MemoryRouter>
    );
    
    cy.get("button").should("exist").and("have.text", "Спробувати знову");
    
    cy.get("a").should("have.attr", "href", "/testbegin");
  });
});
