describe("Система коментарів на прикладі сторінки C#", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/auth/currentUser", { fixture: "currentUser.json" }).as("getUser");
    cy.intercept("GET", "/api/comments/**", { fixture: "comments.json" }).as("getComments");
    cy.intercept("POST", "/api/comments/add", { fixture: "newComment.json" }).as("postComment");
    cy.intercept("PUT", "/api/comments/edit/**", { fixture: "editedComment.json" }).as("putEdit");
    cy.intercept("DELETE", "/api/comments/delete/**", {body: {message: "Коментар видалено"}}).as("deleteComment");
    cy.intercept("POST", "/api/comments/reply", { fixture: "newReply.json" }).as("postReply");


    cy.visit("/csharp", {
      onBeforeLoad(win) {
        win.localStorage.setItem("token", "fake-token");
      }
    });
  });

  it("Показ коментарів", () => {
    cy.wait("@getUser");
    cy.wait("@getComments");

    cy.get("[data-cy^='comment-']").should("have.length.greaterThan", 0);
  });

  it("Додавання нового коментаря", () => {
    cy.wait("@getComments");

    cy.get("textarea").first().focus().clear().type("Новий коментар");
    cy.get("[data-cy='send-comment-button']").click();
    cy.wait("@postComment");

    cy.contains("[data-cy^='comment-']", "Новий коментар").should("exist");
    cy.get("textarea").first().should("have.value", "");
  });

  it("Редагування коментаря", () => {
    cy.wait("@getUser");
    cy.wait("@getComments");

    cy.get("[data-cy^='edit-button-']").first().click();
    cy.get("textarea").first().clear().type("Відредагований коментар");

    cy.get("[data-cy^='send-reply-button-']").first().click();
    cy.wait("@putEdit");

    cy.contains("[data-cy^='comment-']", "Відредагований коментар").should("exist");
  });

  it("Видалення коментаря", () => {
    const commentId = 3;

    cy.wait("@getUser");
    cy.wait("@getComments");

    cy.get(`[data-cy="comment-${commentId}"]`).should("exist");
    cy.get(`[data-cy="delete-button-${commentId}"]`).should("be.visible").click();
    cy.get(`[data-cy="confirm-delete-${commentId}"]`).click();

    cy.wait("@deleteComment");

    cy.get(`[data-cy="comment-${commentId}"]`).should("not.exist")
  });

  it("Додавання відповіді", () => {
    const commentId = 1;

    cy.wait("@getComments");
    
    cy.get(`[data-cy="reply-button-${commentId}"]`).click();
    cy.get(`[data-cy="reply-textarea-${commentId}"]`).type("Відповідь");
    cy.get(`[data-cy="send-reply-button-${commentId}"]`).click();

    cy.wait("@postReply");

    cy.get(`[data-cy="comment-${commentId}"]`).contains("Відповідь");
  })
});
