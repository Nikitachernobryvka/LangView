import React from "react";
import { mount } from "cypress/react";
import { ResultArea } from "../../src/components/layouts/ResultArea/ResultArea";

describe("Тестування ResultArea", () => {
  it("рендериться та відображає результат", () => {
    const mockResult = {
      score: 8,
      time: "03:25",
      attempt: 2
    };
    
    mount(<ResultArea result={mockResult} />);
    
    cy.contains("Кількість правильних відповідей: 8").should("exist");
    cy.contains("Потрачений час: 03:25").should("exist");
    cy.contains("Спроба: 2").should("exist");
  });
});
