import React from "react";
import { mount } from "cypress/react";
import { PrevQuestionButton } from "../../src/components/ui/button/PrevQuestionButton/PrevQuestionButton";

describe("Тестування PrevQuestionButton", () => {
  it("рендериться і реагує на клік", () => {
    const onClick = cy.stub();
    mount(<PrevQuestionButton onClick={onClick} />);

    cy.get("button")
      .should("exist")
      .and("have.text", "Попереднє");

    cy.get("button").click().then(() => {
      expect(onClick).to.have.been.calledOnce;
    });
  });
});
