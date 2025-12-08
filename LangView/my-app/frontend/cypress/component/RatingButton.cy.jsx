import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { RatingButton } from "../../src/components/ui/button/RatingButton/RatingButton";

describe("Тестування RatingButton", () => {
  it("рендериться і веде на сторінку рейтингу", () => {
    mount(
      <MemoryRouter>
        <RatingButton />
      </MemoryRouter>
    );
    
    cy.get("button").should("exist").and("have.text", "Рейтинг");
    
    cy.get("a").should("have.attr", "href", "/leadboard");
  });
});
