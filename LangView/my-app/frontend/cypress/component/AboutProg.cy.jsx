import React from "react";
import { mount } from "cypress/react";
import { AboutProg } from "../../src/components/AboutProg/AboutProg";

describe("Тестування AboutProg", () => {
  it("рендериться і показує заголовок, текст та картинку", () => {
    mount(<AboutProg />);

    cy.get("div").should("exist");

    cy.contains("Про програмування").should("exist");

    cy.contains("Програмування — це процес створення інструкцій для комп'ютерів").should("exist");

    cy.get("img")
      .should("have.attr", "src")
      .and("include", "progLanguages.png");

    cy.get("img").should("have.attr", "alt", "Картинка мов програмування");
  });
});
