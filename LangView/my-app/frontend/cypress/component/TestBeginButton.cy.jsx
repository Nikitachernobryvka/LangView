import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { TestBeginButton } from "../../src/components/ui/button/TestBeginButton/TestBeginButton";

describe("Тестування TestBeginButton", () => {
  it("рендериться і веде на тест", () => {
    mount(
      <MemoryRouter>
        <TestBeginButton />
      </MemoryRouter>
    );
    
    cy.get("button").should("exist").and("have.text", "Почати тест");
    
    cy.get("a").should("have.attr", "href", "/test");
  });
});
