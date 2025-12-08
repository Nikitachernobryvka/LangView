import React from "react";
import { mount } from "cypress/react";
import { EditButton } from "../../src/components/ui/button/EditButton";

describe("Тестування EditButton", () => {
  it("повинен викликати onClick при натисканні", () => {
    const onClickStub = cy.stub();

    mount(<EditButton data-cy="edit-btn" onClick={onClickStub} />);

    cy.get('[data-cy="edit-btn"]').click().then(() => {
      expect(onClickStub).to.have.been.calledOnce;
    });
  });
});
