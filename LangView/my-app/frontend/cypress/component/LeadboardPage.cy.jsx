import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { LeaderboardPage } from "../../src/pages/LeaderboradPage/LeaderboardPage";

describe("Тестування LeaderboardPage", () => {
  const mockData = {
    leaderboard: [
      { rnk: 1, user_name: "User1", score: 10, time_seconds: 120, attempts: 1 },
      { rnk: 2, user_name: "User2", score: 8, time_seconds: 150, attempts: 2 },
    ],
  };

  it("рендериться таблиця з даними", () => {
    cy.stub(window, "fetch").resolves({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    mount(
      <MemoryRouter>
        <LeaderboardPage testId={2} />
      </MemoryRouter>
    );

    cy.contains("Рейтинг").should("exist");
    cy.get("tbody tr").should("have.length", mockData.leaderboard.length);
    cy.contains("User1").should("exist");
    cy.contains("User2").should("exist");
  });

  it("показує повідомлення при порожньому рейтингу", () => {
    cy.stub(window, "fetch").resolves({
      ok: true,
      json: () => Promise.resolve({ leaderboard: [] }),
    });

    mount(
      <MemoryRouter>
        <LeaderboardPage testId={2} />
      </MemoryRouter>
    );

    cy.contains("Результатів немає").should("exist");
  });

  it("показує повідомлення про помилку", () => {
    cy.stub(window, "fetch").rejects(new Error("Помилка"));

    mount(
      <MemoryRouter>
        <LeaderboardPage testId={2} />
      </MemoryRouter>
    );

    cy.contains("Помилка").should("exist");
  });
});
