import React from "react";
import { mount } from "cypress/react";
import { TestResultPage } from "../../src/pages/TestResultPage/TestResultPage";
import { AuthContext } from "../../src/context/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe("Тестування TestResultPage", () => {
  const mockUser = { username: "TestUser" };
  const mockTestInfo = { test_name: "Тест з програмування" };
  const mockLastResult = { score: 5, time_seconds: 120, attempts: 1 };

  beforeEach(() => {
    cy.stub(window, "fetch").callsFake((url) => {
      if (url.includes("/api/test/info")) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockTestInfo),
        });
      }
      if (url.includes("/api/test/lastResult")) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockLastResult),
        });
      }
      return Promise.reject("Unknown API call");
    });
  });
  
  it("рендериться і показує результат", () => {
    mount(
      <MemoryRouter>
        <AuthContext.Provider value={{ user: mockUser }}>
          <TestResultPage />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    
    cy.contains(mockTestInfo.test_name).should("exist");
    
    cy.contains(`Кількість правильних відповідей: ${mockLastResult.score}`).should("exist");
    cy.contains("Спроба: 1").should("exist");
    
    cy.contains("На головну").should("exist");
    cy.contains("Спробувати знову").should("exist");
    cy.contains("Рейтинг").should("exist");
  });
});
