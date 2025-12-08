import React from "react";
import { mount } from "cypress/react";
import { QuestionArea } from "../../src/components/layouts/QuestionArea/QuestionArea";

describe("Тестування QuestionArea", () => {
  const mockQuestion = {
    id: 1,
    question_text: "Яка мова програмування?",
    options: ["Python", "C#", "JavaScript"]
  };

  it("рендериться і показує питання та варіанти", () => {
    mount(<QuestionArea question={mockQuestion} />);

    cy.contains(mockQuestion.question_text).should("exist");
    cy.get("input[type='radio']").should("have.length", mockQuestion.options.length);
  });

  it("викликає onSelectAnswer при виборі варіанту", () => {
    const onSelectAnswer = cy.stub();
    mount(<QuestionArea question={mockQuestion} onSelectAnswer={onSelectAnswer} />);

    cy.get("input[type='radio']").eq(1).check().then(() => {
      expect(onSelectAnswer).to.have.been.calledWith(1);
    });
  });

  it("позначає вибрану відповідь", () => {
    mount(<QuestionArea question={mockQuestion} selectedOption={2} />);
    
    cy.get("input[type='radio']").eq(2).should("be.checked");
  });
});
