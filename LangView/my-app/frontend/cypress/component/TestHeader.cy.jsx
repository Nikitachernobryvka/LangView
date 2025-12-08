import React from "react";
import { mount } from "cypress/react";
import TestHeader from "../../src/components/layouts/TestHeader/TestHeader";

describe("Тестування TestHeader", () => {
  const testInfo = {
    test_name: "Тест з програмування",
    user_attempts: 2,
    time_seconds: 125,
  };
  const currentQuestion = 3;
  const totalQuestion = 10;
  
  it("рендериться з правильними даними", () => {
    mount(
      <TestHeader
        testInfo={testInfo}
        elapsedTime={testInfo.time_seconds}
        currentQuestion={currentQuestion}
        totalQuestion={totalQuestion}
      />
    );
    
    cy.get("h3").contains(testInfo.test_name);
    cy.contains(`Спроба: ${testInfo.user_attempts}`);
    cy.contains("Час: 02:05");
    cy.contains(`Питання: ${currentQuestion}/${totalQuestion}`);
  });
});
