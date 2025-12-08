import React, { useState } from "react";
import { mount } from "cypress/react";
import { CommentTextArea } from "../../src/components/layouts/CommentTextArea";

describe("Тестування CommentTextArea", () => {
  it("повинен реагувати на фокус та вводити текст", () => {
    const onFocusStub = cy.stub();

    const TestWrapper = () => {
      const [value, setValue] = useState("");
      return (
        <CommentTextArea
          data-cy="test-textarea"
          value={value}
          onFocus={onFocusStub}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    };

    mount(<TestWrapper />);

    cy.get('[data-cy="test-textarea"]')
      .focus()
      .should("have.focus")
      .then(() => {
        expect(onFocusStub).to.have.been.called;
      });

    cy.get('[data-cy="test-textarea"]')
      .type("Введення тексту коментаря")
      .should("have.value", "Введення тексту коментаря");
  });
});
