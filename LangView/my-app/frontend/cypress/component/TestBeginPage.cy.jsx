import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import { TestBeginPage } from "../../src/pages/TestBeginPage/TestBeginPage";
import { AuthContext } from "../../src/context/AuthContext";

describe("Тестування TestBeginPage", () => {
  it("рендериться і містить дочірні компоненти", () => {
    const mockAuthValue = { user: { id: 1, name: "Test User" }, login: () => { }, logout: () => { } };

    mount(
      <AuthContext.Provider value={mockAuthValue}>
        <MemoryRouter>
          <TestBeginPage />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    
    cy.get("div").should("exist");
    cy.get("button").should("have.length", 3);
  });
});
