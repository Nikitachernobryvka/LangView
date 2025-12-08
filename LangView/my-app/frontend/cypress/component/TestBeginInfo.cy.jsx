import React from "react";
import { mount } from "cypress/react";
import { TestBeginInfo } from "../../src/components/layouts/TestBeginInfo/TestBeginInfo";
import { AuthContext } from "../../src/context/AuthContext";

const mockUser = { username: "TestUser" };
const mockResponse = {
  test_name: "Базовий тест з програмування",
  questions_count: 5,
  user_attempts: 2
};

describe("Тестування TestBeginInfo", () => {
  it("рендериться і показує дані тесту", () => {
  
    cy.window().then((win) => {
      cy.stub(win, "fetch").resolves({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    
    mount(
      <AuthContext.Provider value={{ user: mockUser }}>
        <TestBeginInfo />
      </AuthContext.Provider>
    );
    
    cy.contains(mockResponse.test_name).should("exist");
    cy.contains(`Кількість питань: ${mockResponse.questions_count}`).should("exist");
    cy.contains(`Спроба: ${mockResponse.user_attempts}`).should("exist");
  });
});
