import React from "react";
import { mount } from "cypress/react";
import { Relevance } from "../../src/components/RelevancePanel/RelevancePanel"

describe("Тестування Relevance", () => {
  it("рендериться і показує основні елементи", () => {
    mount(<Relevance className="test-class" />);

    cy.get("div").should("exist");

    cy.contains("Актуальність").should("exist");

    cy.contains("програмування стало важливим інструментом").should("exist");

    cy.get("img").should("have.attr", "src");
  });
});
