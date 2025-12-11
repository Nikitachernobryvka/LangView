describe("Реєстрація користувача", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("Показує помилку, якщо поля порожні", () => {
    cy.contains("button", "Зареєструватися").click();

    cy.get("p").should("be.visible").and("contain", "Заповніть всі поля");
  });

  it("Успішна реєстрація та редірект на сторінку авторизації", () => {
    cy.fixture("newUser.json").then((user) => {
      cy.intercept("POST", "/api/auth/register", {fixture: "signUpSuccess"}).as("signUpReq")

      cy.get('input[placeholder="Ім\'я користувача"]').type(user.username);
      cy.get("input[placeholder='Пошта']").type(user.email);
      cy.get("input[placeholder='Пароль']").type(user.password);

      cy.contains("button", "Зареєструватися").click();

      cy.wait("@signUpReq");

      cy.url().should("include", "/login");
    })
  });

  it("Виведелння повідомлення про помилку", () => {
    cy.fixture("newUser.json").then((user) => {
      cy.intercept("POST", "api/auth/register", {fixture: "signUpError"}).as("registerFail");

      cy.get('input[placeholder="Ім\'я користувача"]').type(user.username);
      cy.get("input[placeholder='Пошта']").type(user.email);
      cy.get("input[placeholder='Пароль']").type(user.password);

      cy.contains("button", "Зареєструватися").click();

      cy.wait("@registerFail");

      cy.get("p").should("be.visible").and("contain", "Це ім'я користувача або пошта вже використовується");
    })
  })
})