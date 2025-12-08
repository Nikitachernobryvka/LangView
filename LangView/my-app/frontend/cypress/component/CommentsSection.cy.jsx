import React from "react";
import { mount } from "cypress/react";

import { CommentsSection } from "../../src/components/layouts/CommentsSection/CommentsSection.jsx";
import { AuthContext } from "../../src/context/AuthContext.jsx";
import { mockComments } from "../../src/mock/comment.js";

const currentUser = { id: 1, username: "User№1" };

describe("Тестування CommentsSection", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/comments/page1", {
      statusCode: 200,
      body: mockComments,
    }).as("getComments");

    cy.intercept("POST", "/api/comments/add", (req) => {
      req.reply({
        statusCode: 200,
        body: {
          id: 99,
          text: req.body.text,
          username: req.body.username,
          user_id: req.body.user_id,
          replies: [],
          likes: 0,
          dislikes: 0,
        },
      });
    }).as("postComment");

    cy.intercept("POST", "/api/comments/reply", (req) => {
      req.reply({
        statusCode: 200,
        body: {
          id: 100,
          text: req.body.text,
          username: req.body.username,
          user_id: req.body.user_id,
          replies: [],
          likes: 0,
          dislikes: 0,
          parent_id: req.body.parent_id,
        },
      });
    }).as("postReply");

    cy.intercept("DELETE", "/api/comments/delete/*", { statusCode: 200 }).as("deleteComment");

    cy.intercept("PUT", "/api/comments/edit/*", (req) => {
      req.reply({
        statusCode: 200,
        body: { text: req.body.text },
      });
    }).as("editComment");
  });

  it("Додає коментар", () => {
    mount(
      <AuthContext.Provider value={{ user: currentUser }}>
        <CommentsSection page="page1" />
      </AuthContext.Provider>
    );

    cy.wait("@getComments");

    cy.get('textarea').first().type("Мій тестовий коментар");
    cy.get('[data-cy="send-comment-button"]').click();

    cy.wait("@postComment");
    cy.contains("Мій тестовий коментар").should("exist");
    cy.contains("Коментарів").should("contain.text", "3");
  });

  it("Додає відповідь", () => {
    mount(
      <AuthContext.Provider value={{ user: currentUser }}>
        <CommentsSection page="page1" />
      </AuthContext.Provider>
    );

    cy.wait("@getComments");

    cy.get('[data-cy="reply-button-1"]').click();
    cy.get('[data-cy="reply-textarea-1"]').type("Моя відповідь");
    cy.get('[data-cy="send-reply-button-1"]').click();

    cy.wait("@postReply");
    cy.contains("Моя відповідь").should("exist");
  });

  it("Редагує коментар", () => {
    mount(
      <AuthContext.Provider value={{ user: currentUser }}>
        <CommentsSection page="page1" />
      </AuthContext.Provider>
    );

    cy.wait("@getComments");

    cy.get('[data-cy="edit-button-1"]').click();
    cy.get('textarea').first().clear().type("Редагований текст");
    cy.get('[data-cy="send-reply-button-1"]').click();

    cy.wait("@editComment");
    cy.contains("Редагований текст").should("exist");
  });

  it("Видаляє коментар", () => {
    mount(
      <AuthContext.Provider value={{ user: currentUser }}>
        <CommentsSection page="page1" />
      </AuthContext.Provider>
    );

    cy.wait("@getComments");

    cy.get('[data-cy="delete-button-1"]').click();
    cy.get('[data-cy="confirm-delete-1"]').click();

    cy.wait("@deleteComment");
    cy.contains("Мій тестовий коментар").should("not.exist");
  });
});
