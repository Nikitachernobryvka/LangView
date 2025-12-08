import React from "react";
import { mount } from "cypress/react";
import { AnswerListButton } from "../../src/components/ui/button/AnswerListButton/AnswerListButton";

describe("Тестування AnswerListButton", () => {
  const count = 5;
  let onClickStub;

  beforeEach(() => {
    onClickStub = cy.stub().as("onClickStub");
  });

  it("відображає кількість відповідей", () => {
    mount(<AnswerListButton count={count} show={false} onClick={onClickStub} />);

    cy.get("button").contains(`${count}`).should("exist");
  });

  it("показує правильний стан стрілки при show=false", () => {
    mount(<AnswerListButton count={count} show={false} onClick={onClickStub} />);

    cy.get('[data-cy="answer-arrow"]').should("have.attr", "data-state", "closed");
  });

  it("показує правильний стан стрілки при show=true", () => {
    mount(<AnswerListButton count={count} show={true} onClick={onClickStub} />);

    cy.get('[data-cy="answer-arrow"]').should("have.attr", "data-state", "open");
  });

  it("викликає колбек при кліку", () => {
    mount(<AnswerListButton count={count} show={false} onClick={onClickStub} />);

    cy.get('[data-cy="answer-arrow"]').click();
    cy.get("@onClickStub").should("have.been.calledOnce");
  });
});
