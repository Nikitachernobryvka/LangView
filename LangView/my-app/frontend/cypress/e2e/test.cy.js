describe("Проходження тесту", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/auth/currentUser", { fixture: "currentUser.json" }).as("getUser");
    cy.intercept("GET", "/api/question/**", { fixture: "question.json" }).as("getQuestion");
    cy.intercept("GET", "/api/test/info*", { fixture: "testInfo.json" }).as("getTestInfo");
    cy.intercept("GET", "/api/test/lastResult*", { fixture: "lastResult.json" }).as("getLastResult");
    cy.intercept("GET", "/api/leaderboard/leaderboard*", { fixture: "leaderboard.json" }).as("getLeaderboard");

  });

  it("Початок тесту", () => {
    cy.visit("/testbegin", {
      onBeforeLoad(win) {
        win.localStorage.setItem("token", "fake-token");
      }
    });

    cy.wait("@getTestInfo");

    cy.contains("Базовий тест з програмування").should("exist");
    cy.contains("Спроба: 1").should("exist");
    cy.contains("Кількість питань: 10").should("exist");

    cy.contains("button", "Почати тест").click();
    cy.url().should("include", "/test");
  });

  it("Проходження тесту", () => {
    cy.visit("/test", {
      onBeforeLoad(win) {
        win.localStorage.setItem("token", "fake-token");
      }
    });

    cy.wait("@getUser");
    cy.wait("@getQuestion");
    cy.wait("@getTestInfo");

    cy.get("input[type='radio']").first().click().should("be.checked");
    cy.contains("button", "Наступне").click();
    cy.wait("@getQuestion");
    cy.contains("button", "Попереднє").click();
    cy.wait("@getQuestion");
  });

  it("Перехід на сторінку результату", () => {
    cy.visit("/result", {
      onBeforeLoad(win) {
        win.localStorage.setItem("token", "fake-token");
      }
    });

    cy.contains("Кількість правильних відповідей:").should("exist");
    cy.contains("Потрачений час:").should("exist");
    cy.contains("Спроба:").should("exist");

    cy.contains("button", "На головну").should("exist");
    cy.contains("button", "Спробувати знову").should("exist");
    cy.contains("button", "Рейтинг").should("exist");
  });

  it("Перехід на сторінку рейтингу", () => {
    cy.visit("/result", {
      onBeforeLoad(win) {
        win.localStorage.setItem("token", "fake-token");
      }
    });

    cy.contains("button", "Рейтинг").click();

    cy.wait("@getLeaderboard");
    cy.url().should("include", "/leadboard");

    cy.contains("Рейтинг").should("exist");
    cy.contains("TestUser №1").should("exist");
    cy.contains("TestUser №2").should("exist");
    
  })
});
