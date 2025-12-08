import React from "react";
import { mount } from "cypress/react";
import { CancelButton } from "../../src/components/ui/button/CancelButton";

describe("Тестування CancelButton", () => {
  it("повинен викликати onClick при натисканні", () => {
    const onClickStub = cy.stub();

    mount(<CancelButton onClick={onClickStub} />);

    cy.get('[data-cy="cancel-button"]').click().then(() => {
      expect(onClickStub).to.have.been.calledOnce;
    });
  });
});
