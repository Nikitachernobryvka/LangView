import React from "react";
import { mount } from "cypress/react";
import { LoginButton } from "../../src/components/ui/button/AuthButton/AuthButton";

describe("Тестування AuthButton", () => {
  it("повинен викликати onClick при натисканні", () => {
    const onClickStub = cy.stub();

    mount(<LoginButton onClick={onClickStub}>Тест кнопки</LoginButton>);

    cy.contains("Тест кнопки").click().then(() => {
      expect(onClickStub).to.have.been.calledOnce;
    });
  });
});
