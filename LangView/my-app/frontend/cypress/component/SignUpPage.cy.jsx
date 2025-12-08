import React from "react";
import { mount } from "cypress/react";
import { SignUpPage } from "../../src/pages/SignUpPage/SignUpPage.jsx";
import { AuthContext } from "../../src/context/AuthContext.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Тестування SignUpPage", () => {
  let mockRegister, mockNavigate;

  beforeEach(() => {
    mockRegister = cy.stub();
    mockNavigate = cy.stub();

    mount(
      <MemoryRouter>
        <AuthContext.Provider value={{ register: mockRegister }}>
          <SignUpPage />
        </AuthContext.Provider>
      </MemoryRouter>
    );
  });

  it("показує всі поля та кнопку", () => {
    cy.get('input[placeholder="Ім\'я користувача"]').should("exist");
    cy.get('input[placeholder="Пошта"]').should("exist");
    cy.get('input[placeholder="Пароль"]').should("exist");
    cy.contains("Зареєструватися").should("exist");
  });

  it("показує помилку якщо поля пусті", () => {
    cy.contains("Зареєструватися").click();
    cy.contains("Заповніть всі поля").should("exist");
  });

  it("викликає register", () => {
    mockRegister.resolves({ user: { username: "test" } });

    cy.get('input[placeholder="Ім\'я користувача"]').type("testuser");
    cy.get('input[placeholder="Пошта"]').type("test@mail.com");
    cy.get('input[placeholder="Пароль"]').type("123456");
    cy.contains("Зареєструватися").click().then(() => {
      expect(mockRegister).to.have.been.calledWith("testuser", "test@mail.com", "123456");
    });
  });
});
