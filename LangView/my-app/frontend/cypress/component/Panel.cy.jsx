import React from "react";
import { mount } from "cypress/react";
import { Panel } from "../../src/components/layouts/Panel/Panel.jsx";
describe("Тестування Panel", () => {
  it("рендерить заголовок та вміст дітей", () => {
    mount(
      <Panel title="Заголовок панелі">
        <p data-cy="panel-child">Текст всередині панелі</p>
      </Panel>
    );

    cy.contains("Заголовок панелі").should("be.visible");

    cy.get('[data-cy="panel-child"]').should("exist").and("contain.text", "Текст всередині панелі");
  });

  it("додає додатковий className, якщо він переданий", () => {
    mount(
      <Panel title="Тестовий заголовок" className="extra-class">
        <div data-cy="child">Вміст</div>
      </Panel>
    );

    cy.get(".extra-class").should("exist");
  });

  it("підтримує порожніх дітей (children)", () => {
    mount(<Panel title="Порожня панель" />);

    cy.contains("Порожня панель").should("be.visible");
  });
});
