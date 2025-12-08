import React from "react";
import { mount } from "cypress/react";
import { EndAttemptButton } from "../../src/components/ui/button/EndAttemptButton/EndAttemptButton";

describe("Тестування EndAttemptButton", () => {
  it("рендериться і реагує на клік", () => {
    const onClick = cy.stub();
    mount(<EndAttemptButton onClick={onClick} />);
    
    cy.get("button").contains("Завершити спробу").should("exist");
    
    cy.get("button").click().then(() => {
      expect(onClick).to.have.been.calledOnce;
    });
  });
});
