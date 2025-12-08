import React from "react";
import { mount } from "cypress/react";
import { Comment } from "../../src/components/layouts/Comment/Comment.jsx";
import { AuthContext } from "../../src/context/AuthContext.jsx";

const currentUser = { id: 1, username: "User№1" };
const mockComment = {
  parentId: 1,
  text: "Тестовий коментар",
  username: "User№1",
  level: 0,
  initialReplies: [],
  likes: 0,
  dislikes: 0,
  commentUserId: 1,
  currentUserId: 1,
};

describe("Тестування Comment", () => {
  let mockOnAddReply, mockOnDelete, mockOnEdit;

  beforeEach(() => {

    mockOnAddReply = cy.stub();
    mockOnDelete = cy.stub();
    mockOnEdit = cy.stub();

    mount(
      <AuthContext.Provider value={{ user: currentUser }}>
        <Comment
          {...mockComment}
          onAddReply={mockOnAddReply}
          onDelete={mockOnDelete}
          onEdit={mockOnEdit}
        />
      </AuthContext.Provider>
    );
  });

  it("показує текст коментаря та кнопки редагування/видалення для власника", () => {
    cy.contains("Тестовий коментар").should("exist");
    cy.get('[data-cy="edit-button-1"]').should("exist");
    cy.get('[data-cy="delete-button-1"]').should("exist");
  });

  it("редагує коментар", () => {
    cy.get('[data-cy="edit-button-1"]').click();
    cy.get("textarea").first().clear().type("Редагований коментар");
    cy.get('[data-cy="send-reply-button-1"]').click().then(() => {
      expect(mockOnEdit).to.have.been.calledWith(1, "Редагований коментар");
    });
  });

  it("відкриває та закриває модальне вікно видалення", () => {
    cy.get('[data-cy="delete-button-1"]').click();
    cy.get('[data-cy="confirm-delete-1"]').should("exist");
    cy.get('[data-cy="cancel-delete-1"]').click();
    cy.get('[data-cy="confirm-delete-1"]').should("not.exist");
  });

  it("видаляє коментар", () => {
    cy.get('[data-cy="delete-button-1"]').click();
    cy.get('[data-cy="confirm-delete-1"]').click().then(() => {
      expect(mockOnDelete).to.have.been.calledWith(1);
    });
  });

  it("додає відповідь", () => {
    cy.get('[data-cy="reply-button-1"]').click();
    cy.get('[data-cy="reply-textarea-1"]').type("Моя відповідь");
    cy.get('[data-cy="send-reply-button-1"]').click().then(() => {
      expect(mockOnAddReply).to.have.been.calledWith(1, "Моя відповідь", 1);
    });
  });

});
