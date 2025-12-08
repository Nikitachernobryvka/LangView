import React from "react";
import { mount } from "cypress/react";
import { NextQuestionButton } from "../../src/components/ui/button/NextQuestionButton/NextQuestionButton";

describe("Тестування NextQuestionButton", () => {
  it("рендериться і реагує на клік", () => {
    const onClick = cy.stub();
    mount(<NextQuestionButton onClick={onClick} />);
    
    cy.get("button").should("exist").and("have.text", "Наступне");

    cy.get("button").click().then(() => {
      expect(onClick).to.have.been.calledOnce;
    });
  });
});
