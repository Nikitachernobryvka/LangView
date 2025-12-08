import React from "react";
import { mount } from "cypress/react";
import { ReplyButton } from "../../src/components/ui/button/ReplyButton";

describe("Тестування ReplyButton", () => {
  it("повинен викликати onClick при натисканні", () => {
    const onClickStub = cy.stub();

    mount(<ReplyButton data-cy="reply-btn" onClick={onClickStub} />);

    cy.get('[data-cy="reply-btn"]').click().then(() => {
      expect(onClickStub).to.have.been.calledOnce;
    });
  });
});
