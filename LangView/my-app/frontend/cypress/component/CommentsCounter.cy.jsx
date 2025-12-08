import React from "react";
import { mount } from "cypress/react";
import { CommentsCounter } from "../../src/components/layouts/CommentsCounter";

describe("Тестування CommentsCounter", () => {
  it("відображає текст і кількість коментарів", () => {
    const text = "Коментарів";
    const count = 3;

    mount(<CommentsCounter text={text} count={count} />);

    cy.contains(`${text}: ${count}`).should("exist");
  });
});
