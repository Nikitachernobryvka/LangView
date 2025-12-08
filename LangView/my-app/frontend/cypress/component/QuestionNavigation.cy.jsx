import React from "react";
import { mount } from "cypress/react";
import {QuestionNavigation} from "../../src/components/layouts/QuestionNavigation/QuestionNavigation";
import styles from "../../src/components/layouts/QuestionNavigation/QuestionNavigation.module.css";

describe("Тестування QuestionNavigation", () => {
  const totalQuestions = 5;
  const currentQuestion = 2;
  const selectedOption = { 1: 0, 3: 2 };

  it("рендериться з правильним числом кнопок", () => {
    mount(
      <QuestionNavigation
        totalQuestions={totalQuestions}
        currentQuestion={currentQuestion}
        selectedOption={selectedOption}
        onSelectQuestion={() => {}}
      />
    );

    cy.get("button").should("have.length", totalQuestions);
  });

  it("позначає активну кнопку", () => {
    mount(
      <QuestionNavigation
        totalQuestions={totalQuestions}
        currentQuestion={currentQuestion}
        selectedOption={selectedOption}
        onSelectQuestion={() => {}}
      />
    );

    cy.get("button").eq(currentQuestion - 1).should("have.class", styles.active);
  });

  it("позначає вибрані питання", () => {
    mount(
      <QuestionNavigation
        totalQuestions={totalQuestions}
        currentQuestion={currentQuestion}
        selectedOption={selectedOption}
        onSelectQuestion={() => {}}
      />
    );
    
    Object.keys(selectedOption).forEach((q) => {
      const index = Number(q) - 1;
      cy.get("button").eq(index).should("have.class", styles.selected);
    });
  });
  
  it("реагує на клік кнопки", () => {
    const onSelectQuestion = cy.stub().as("onSelectQuestion");

    mount(
      <QuestionNavigation
        totalQuestions={totalQuestions}
        currentQuestion={currentQuestion}
        selectedOption={selectedOption}
        onSelectQuestion={onSelectQuestion}
      />
    );

    cy.get("button").eq(0).click();
    cy.get("@onSelectQuestion").should("have.been.calledWith", 1);
  });
});
