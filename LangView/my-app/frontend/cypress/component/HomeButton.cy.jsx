import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { HomeButton } from "../../src/components/ui/button/HomeButton/HomeButton";

describe("Тестування HomeButton", () => {
  it("рендериться з лінком на '/' і показує картинку", () => {
    mount(
      <MemoryRouter>
        <HomeButton />
      </MemoryRouter>
    );

    cy.get("a").should("have.attr", "href", "/");

    cy.get("a img").should("exist");
  });
});
