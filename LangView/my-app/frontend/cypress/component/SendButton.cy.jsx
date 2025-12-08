import React from "react";
import { mount } from "cypress/react";
import { SendButton } from "../../src/components/ui/button/SendButton";

describe("Тестування SendButton", () => {
  it("повинен викликати onClick при натисканні", () => {
    const onClickStub = cy.stub();

    mount(<SendButton data-cy="send-btn" onClick={onClickStub} />);

    cy.get('[data-cy="send-btn"]').click().then(() => {
      expect(onClickStub).to.have.been.calledOnce;
    });
  });
});
