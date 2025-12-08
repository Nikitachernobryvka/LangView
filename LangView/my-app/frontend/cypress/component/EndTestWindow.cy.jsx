import React from "react";
import { mount } from "cypress/react";
import { EndTestWindow } from "../../src/components/EndTestWindow/EndTestWindow";
import { MemoryRouter } from "react-router-dom";

describe("Тестування EndTestWindow", () => {
  it("рендериться і викликає колбеки при кліку на кнопки", () => {
    const cancelSpy = cy.spy().as("cancelSpy");
    const submitStub = cy.stub().resolves({ score: 5 }).as("submitStub");
    
    mount(
      <MemoryRouter>
        <EndTestWindow cancel={cancelSpy} onSubmit={submitStub} />
      </MemoryRouter>
    );
    
    cy.contains("Ви впевнені, що хочете завершити тест?").should("exist");
    
    cy.contains("Відмінити").click();
    cy.get("@cancelSpy").should("have.been.calledOnce");
    
    cy.contains("Завершити").click();
    cy.get("@submitStub").should("have.been.calledOnce");
  });
});
