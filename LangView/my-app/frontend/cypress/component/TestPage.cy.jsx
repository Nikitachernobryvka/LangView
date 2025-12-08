import React from "react";
import { mount } from "cypress/react";
import { TestPage } from "../../src/pages/TestPage/TestPage";
import { AuthContext } from "../../src/context/AuthContext";
import { MemoryRouter } from "react-router-dom";

const mockQuestion = {
  id: 1,
  question_text: "Яке правильне?",
  options: ["A", "B", "C"]
};

const mockTestInfo = {
  test_name: "Тест з програмування",
  questions_count: 3,
  user_attempts: 1,
  time_seconds: 0
};

describe("Тестування TestPage", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      cy.stub(win, "fetch").callsFake((url) => {
        if (url.includes("/api/question/")) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockQuestion)
          });
        }
        if (url.includes("/api/test/info")) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockTestInfo)
          });
        }
      });
    });
  });
  
  it("EndAttemptButton відкриває EndTestWindow", () => {
    mount(
      <MemoryRouter>
        <AuthContext.Provider value={{ user: { username: "TestUser" } }}>
          <TestPage />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    
    cy.get("button").contains("Завершити спробу").click();
    cy.contains("Завершити").should("exist"); 
  });
});
