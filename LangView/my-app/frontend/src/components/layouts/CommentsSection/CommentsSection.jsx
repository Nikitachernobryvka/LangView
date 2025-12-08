import React, { useState, useContext } from "react"

import styles from "./CommentsSection.module.css"

import { countTotalComments, buildCommentTree } from "../../../utils/commentsUtils"

import { CommentsCounter } from "../CommentsCounter"
import { CommentTextArea } from "../CommentTextArea"
import { CancelButton } from "../../ui/button/CancelButton"
import { SendButton } from "../../ui/button/SendButton"
import { Comment } from "../../layouts/Comment"

import { useFetch } from "../../../hooks/useFetch"
import { usePost } from "../../../hooks/usePost"

import { AuthContext } from "../../../context/AuthContext"

export const CommentsSection = ({ page }) => {
    const { user: currentUser } = useContext(AuthContext);

    const token = localStorage.getItem("token");

    const { data: comments = [], loading, error, setData: setCommentsList } = useFetch(`/api/comments/${page}`);

    const commentsList = buildCommentTree(comments)

    const { postData } = usePost("/api/comments/add");
    const { postData: postReply } = usePost("/api/comments/reply");

    const [showButtons, setShowButtons] = useState(false);
    const [commentText, setCommentText] = useState("");

    const handleHideButtons = () => {
        setShowButtons(false);
        setCommentText("")
    }

    const handleAddComment = async () => {
        if (commentText.trim() === "") {
            return;
        }

        try {
            const newComment = await postData({
                page,
                text: commentText,
                username: currentUser.username,
                user_id: currentUser.id
            })
            setCommentsList(current => [...current, newComment]);
            setCommentText("");
            setShowButtons(false);
        }
        catch (error) {
            console.error("Помилка додавання коментаря:", error);
        }
    }

    const handleAddReply = async (parentId, replyText, level) => {
        try {
            const newReply = await postReply({
                parent_id: parentId,
                page,
                username: currentUser.username,
                text: replyText,
                level,
                user_id: currentUser.id
            })

            setCommentsList(current => [...current, newReply])

        }
        catch (error) {
            console.error("Помилка додавання відповіді:", error);
        }
    }

    const handleDeleteComment = async (deleteId) => {
        try {
            const res = await fetch(`/api/comments/delete/${deleteId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!res.ok) {
                throw new Error("Не вдалося видалити")
            }

            setCommentsList(current => current.filter(comment =>
                comment.id !== deleteId && comment.parent_id !== deleteId
            ));
        }
        catch (error) {
            console.error("Помилка видалення:", error);
        }
    }

    const handleEditComment = async (editId, newText) => {
        try {
            const res = await fetch(`/api/comments/edit/${editId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ text: newText })
            })

            if (!res.ok) {
                throw new Error("Не вдалося редагувати");
            }
            const updated = await res.json()

            setCommentsList(current => current.map(comment =>
                comment.id === editId ? { ...comment, text: updated.text } : comment
            ));

        }
        catch (error) {
            console.error("Помилка редагування:", error);
        }
    }

    if (loading) {
        return <p>Завантаження</p>;
    }

    if (error) {
        return <p>Помилка: {error.message}</p>;
    }

    return (
        <div>
            <h2 className={styles.comments_title}>Коментарі до статті</h2>
            <CommentsCounter count={countTotalComments(commentsList)} text="Коментарів" />

            <CommentTextArea onFocus={() => { setShowButtons(true) }}
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)} />

            {showButtons && (
                <div className={styles.button_container}>
                    <CancelButton data-cy="cancel-main-comment" onClick={handleHideButtons} />
                    <SendButton data-cy="send-comment-button" onClick={handleAddComment} />
                </div>
            )}

            <ul className={styles.comments_list}>
                {commentsList.map((comment) => (
                    <li key={comment.id}>
                        <Comment
                           data-cy={`comment-${comment.id}`}
                            parentId={Number(comment.id)}
                            text={comment.text} username={comment.username}
                            level={0}
                            initialReplies={comment.replies}
                            likes={comment.likes} dislikes={comment.dislikes}
                            onAddReply={handleAddReply} onDelete={handleDeleteComment} onEdit={handleEditComment}
                            commentUserId={Number(comment.user_id)}
                            currentUserId={Number(currentUser.id)} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
