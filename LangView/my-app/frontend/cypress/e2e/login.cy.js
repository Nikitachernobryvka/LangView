describe("Авторизація користувача", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Показує помилку, якщо поля порожні", () => {
    cy.contains("button", "Увійти").click();

    cy.get("p").should("be.visible").and("contain", "Заповніть всі поля")
  });

  it("Успішна авторизація і редірект на головну сторінку", () => {
    cy.fixture("userId.json").then((user) => {
      cy.intercept("POST", "api/auth/login", { fixture: "loginSuccess.json" }).as("loginReq");

      cy.get('input[placeholder="Електронна пошта/Ім\'я користувача"]').type(user.identifier);
      cy.get("input[placeholder='Пароль']").type(user.password);

      cy.contains("button", "Увійти").click();

      cy.wait("@loginReq");

      cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    });
  });

  it("Виведення повідомлення про помилку", () => {
      cy.fixture("userId.json").then((user) => {
        cy.intercept("POST", "api/auth/login", { fixture: "loginError.json" }).as("loginFail");

        cy.get('input[placeholder="Електронна пошта/Ім\'я користувача"]').type(user.identifier);
        cy.get("input[placeholder='Пароль']").type(user.password);

        cy.contains("button", "Увійти").click();

        cy.wait("@loginFail");

        cy.get("p").should("be.visible").and("contain", "Невірний логін або пароль");
      })
    })

})