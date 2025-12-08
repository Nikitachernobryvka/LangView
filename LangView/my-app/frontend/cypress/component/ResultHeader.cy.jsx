import React from "react";
import { mount } from "cypress/react";
import { ResultHeader } from "../../src/components/layouts/ResultHeader/ResultHeader";

describe("Тестування ResultHeader", () => {
  it("рендериться і показує назву тесту", () => {
    const testName = "Тест з програмування";

    mount(<ResultHeader testName={testName} />);
    
    cy.contains("Тест з програмування").should("exist");
  });
});
