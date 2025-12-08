import React from "react";
import { mount } from "cypress/react";
import { ExamplePanel } from "../../src/components/layouts/ExamplePanel/ExamplePanel"

describe("Тестування ExamplePanel", () => {
  it("рендериться без помилок і показує основні елементи", () => {
    mount(
      <ExamplePanel name="Python" text='Нижче написано код для для виведення повідомлення "Hello World!" за допомогою мови програмування Python.'>
        {'print(“Hello World”)'}
      </ExamplePanel>
    );

    cy.contains("Приклад використання мови Python").should("exist");

    cy.contains('Нижче написано код для для виведення повідомлення "Hello World!" за допомогою мови програмування Python.').should("exist");

    cy.contains('print(“Hello World”)').should("exist");

    cy.get("div").should("exist");
  });
});
