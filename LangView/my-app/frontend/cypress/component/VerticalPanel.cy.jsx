import React from "react";
import { mount } from "cypress/react";
import { VerticalPanel } from "../../src/components/VerticalPanel/VerticalPanel";

describe("Тестування VerticalPanel", () => {
  const src = "test-image.png";
  const title = "Заголовок панелі";
  const text = "Текст панелі";

  it("рендериться і показує картинку, заголовок та текст", () => {
    mount(<VerticalPanel src={src} title={title} text={text} />);

    cy.get("img").should("have.attr", "src", src);

    cy.contains("h2", title).should("exist");

    cy.contains("p", text).should("exist");

    cy.get("div").should("exist");
  });
});
