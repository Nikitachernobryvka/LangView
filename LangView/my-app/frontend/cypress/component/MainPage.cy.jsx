import React from "react";
import { mount } from "cypress/react";
import { MainPage } from "../../src/pages/MainPage/MainPage";

describe("Тестування MainPage", () => {
  it("рендериться і показує ключові елементи", () => {
    mount(<MainPage />);

    cy.get("h1").should("contain.text", "Основне про мови програмування");

    cy.get("div").contains("Про програмування").should("exist");
    cy.get("div").contains("Актуальність").should("exist");

    cy.get("p").contains("Твори майбутнє з кодом").should("exist");

    cy.get("div").contains("Втілюй ідеї").should("exist");
    cy.get("div").contains("Відкривай нові можливості").should("exist");
    cy.get("div").contains("Вивчай без меж").should("exist");

    cy.get("div").find("img").should("have.length", 5); 
  });
});
