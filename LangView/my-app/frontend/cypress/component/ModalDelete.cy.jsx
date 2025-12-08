import React from "react";
import { mount } from "cypress/react";

import { ModalDelete } from "../../src/components/ModalDelete/ModalDelete.jsx";

describe("Тестування ModalDelete", () => {
  it('викликає cancel при натисканні кнопки "Скасувати" і викликає confirm при натисканні кнопки "Видалити"', () => {
    const cancelStub = cy.stub();
    const confirmStub = cy.stub();
    const parentId = 12;

    mount(
      <ModalDelete cancel={cancelStub} confirm={confirmStub} parentId={parentId} />
    );

    cy.get(`[data-cy="cancel-delete-${parentId}"]`).click().then(() => {
      expect(cancelStub).to.have.been.calledOnce;
      expect(confirmStub).not.to.have.been.called;
    });

    cy.get(`[data-cy="confirm-delete-${parentId}"]`).click().then(() => {
      expect(confirmStub).to.have.been.calledOnce;
    });
  });
});
