import React from "react";
import { mount } from "cypress/react";
import { Footer } from "../../src/components/layouts/Footer/Footer";

describe("Тестування Footer", () => {
  it("рендериться і показує пошту та текст", () => {
    mount(<Footer />);

    cy.get("footer a")
      .should("have.attr", "href", "mailto:chernobryvka.mykyta@student.uzhnu.edu.ua");

    cy.get("footer a img").should("exist");

    cy.get("footer a span").should("contain.text", "Наша пошта");

    cy.get("footer p").should("contain.text", "2025 LangView. Всі права захищені");
  });
});
