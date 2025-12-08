import React from "react";
import { mount } from "cypress/react";
import { DeleteButton } from "../../src/components/ui/button/DeleteButton/DeleteButton";

describe("Тестування DeleteButton", () => {
  it("рендериться і реагує на клік", () => {
    const onClickStub = cy.stub();

    mount(<DeleteButton data-cy="delete-btn" onClick={onClickStub} />);
    
    cy.get('[data-cy="delete-btn"]').should("exist");
    
    cy.get('[data-cy="delete-btn"]').click().then(() => {
      expect(onClickStub).to.have.been.calledOnce;
    });
  });
});
