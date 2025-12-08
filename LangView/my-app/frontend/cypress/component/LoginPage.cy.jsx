import React from "react";
import { mount } from "cypress/react";
import { LoginPage } from "../../src/pages/LoginPage/LoginPage.jsx";
import { AuthContext } from "../../src/context/AuthContext.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Тестування LoginPage", () => {
  let mockLogin;

  beforeEach(() => {
    mockLogin = cy.stub();

    mount(
      <MemoryRouter>
        <AuthContext.Provider value={{ login: mockLogin }}>
          <LoginPage />
        </AuthContext.Provider>
      </MemoryRouter>
    );
  });

  it("показує всі поля та кнопку", () => {
    cy.get('input[placeholder="Електронна пошта/Ім\'я користувача"]').should("exist");
    cy.get('input[placeholder="Пароль"]').should("exist");
    cy.contains("Увійти").should("exist");
  });

  it("показує помилку якщо поля пусті", () => {
    cy.contains("Увійти").click();
    cy.contains("Заповніть всі поля").should("exist");
  });

  it("викликає login", () => {
    mockLogin.resolves({ user: { username: "test" } });

    cy.get('input[placeholder="Електронна пошта/Ім\'я користувача"]').type("testuser");
    cy.get('input[placeholder="Пароль"]').type("123456");
    cy.contains("Увійти").click().then(() => {
      expect(mockLogin).to.have.been.calledWith("testuser", "123456");
    });
  });
});
