import React, { useState, useContext } from "react";

import styles from "./Comment.module.css";

import { getLevel, countNestedReplies } from "../../../utils/commentsUtils";

import { LikeButton } from "../../ui/button/LikeButton";
import { DislikeButton } from "../../ui/button/DislikeButton";
import { ReplyButton } from "../../ui/button/ReplyButton";
import { CommentTextArea } from "../CommentTextArea";
import { SendButton } from "../../ui/button/SendButton";
import { CancelButton } from "../../ui/button/CancelButton";
import { AnswerListButton } from "../../ui/button/AnswerListButton";
import { EditButton } from "../../ui/button/EditButton";
import { DeleteButton } from "../../ui/button/DeleteButton";
import { ModalDelete } from "../../ModalDelete/ModalDelete";

import { AuthContext } from "../../../context/AuthContext";

export const Comment = ({ parentId, text, username, level = 0, initialReplies = [], onAddReply, onDelete, onEdit, likes: initialLikes = 0, dislikes: initialDislikes = 0, commentUserId, currentUserId
}) => {
    const { user: currentUser } = useContext(AuthContext);

    const [showReplyTextArea, setShowReplyTextArea] = useState(false);
    const [replyText, setReplyText] = useState("");
    const [showReplies, setShowReplies] = useState(level === 0 ? false : true);

    const [likes, setLikes] = useState(initialLikes);
    const [dislikes, setDislikes] = useState(initialDislikes);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const [deleteShowModal, setDeleteShowModal] = useState(false);
    const [editing, setEditing] = useState(false);
    const [editText, setEditText] = useState("");

    const totalNestedReplies = countNestedReplies(initialReplies);
    const isOwner = currentUserId && Number(currentUserId) === Number(commentUserId);

    const handleSendReply = () => {
        if (replyText.trim() === "") return;

        const newLevel = level + 1 < 2 ? level + 1 : 2;

        let finalReplyText = replyText;

        if (level > 0) {
            finalReplyText = `@${username} ${replyText}`;
        }

        onAddReply(parentId, finalReplyText, newLevel);
        setReplyText("");
        setShowReplyTextArea(false);
        setShowReplies(true);
    };

    const handleCancelReply = () => {
        setReplyText("");
        setShowReplyTextArea(false);
    };

    const handleShowReplies = () => {
        setShowReplies(prev => !prev);
    };

    // const handleLike = async () => {
    //     try {
    //         const action = liked ? "unlike" : "like";
    //         const res = await fetch(`/api/comments/${parentId}/like`, { method: "POST" });
    //         if (!res.ok) throw new Error("Не вдалося оновити лайк");

    //         const updated = await res.json();
    //         setLikes(updated.likes);
    //         setDislikes(updated.dislikes);
    //         setLiked(action === "like");
    //         setDisliked(false);
    //     } catch (error) {
    //         console.error("Помилка:", error);
    //     }
    // };

    // const handleDislike = async () => {
    //     try {
    //         const action = disliked ? "undislike" : "dislike";
    //         const res = await fetch(`/api/comments/${parentId}/dislike`, { method: "POST" });
    //         if (!res.ok) throw new Error("Не вдалося оновити дизлайк");

    //         const updated = await res.json();
    //         setLikes(updated.likes);
    //         setDislikes(updated.dislikes);
    //         setDisliked(action === "dislike");
    //         setLiked(false);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handleOpenDeleteModal = () => setDeleteShowModal(true);
    const handleCancelDeleteModal = () => setDeleteShowModal(false);
    const handleDelete = () => {
        onDelete(parentId);
        handleCancelDeleteModal();
    };

    const startEditing = () => {
        setEditText(text);
        setEditing(true);
    };

    const cancelEditing = () => {
        setEditing(false);
        setEditText("");
    };

    const saveEdit = () => {
        if (editText.trim() === "") return;
        onEdit(parentId, editText);
        setEditing(false);
    };

    const shouldShowAnswerListButton = level === 0 && totalNestedReplies > 0;

    return (
        <>
            <div className={`${styles.comment} ${getLevel(level, styles)} ${editing ? styles.editing : ""}`}>
                <div className={styles.username}>{username}</div>

                {editing && (
                    <div className={styles.editing_content}>
                        <CommentTextArea value={editText} onChange={(e) => setEditText(e.target.value)} />
                        <div className={styles.button_container}>
                            <SendButton data-cy={`send-reply-button-${parentId}`} onClick={saveEdit} />
                            <CancelButton data-cy={`cancel-reply-button-${parentId}`} onClick={cancelEditing} />
                        </div>
                    </div>
                )}

                {!editing && (
                    <>
                        <div className={styles.top_row}>
                            <div className={styles.text}>{text}</div>
                            {isOwner && (
                                <div className={styles.button_container}>
                                    <EditButton data-cy={`edit-button-${parentId}`} onClick={startEditing} />
                                    <DeleteButton data-cy={`delete-button-${parentId}`} onClick={handleOpenDeleteModal} />
                                </div>
                            )}
                        </div>
                    </>
                )}

                {deleteShowModal && <ModalDelete parentId={parentId} cancel={handleCancelDeleteModal} confirm={handleDelete} />}

                {!editing && (
                    <>
                        <div className={styles.button_container}>
                            <LikeButton/>
                            <span className={styles.counter}>{likes}</span>
                            <DislikeButton/>
                            <span className={styles.counter}>{dislikes}</span>
                            <ReplyButton data-cy={`reply-button-${parentId}`} onClick={() => setShowReplyTextArea(prev => !prev)} />
                        </div>

                        {showReplyTextArea && (
                            <div className={styles.reply_box}>
                                <CommentTextArea data-cy={`reply-textarea-${parentId}`} value={replyText} onChange={(e) => setReplyText(e.target.value)} />
                                <div className={styles.reply_button_container}>
                                    <SendButton data-cy={`send-reply-button-${parentId}`} onClick={handleSendReply} />
                                    <CancelButton data-cy={`cancel-reply-button-${parentId}`} onClick={handleCancelReply} />
                                </div>
                            </div>
                        )}

                        {shouldShowAnswerListButton && (
                            <AnswerListButton count={totalNestedReplies} show={showReplies} onClick={handleShowReplies} />
                        )}

                        <ul className={`${styles.replies_list} ${!showReplies ? styles.replies_hidden : ""}`}>
                            {initialReplies.map((rep) => (
                                <li key={rep.id} className={styles.reply_item}>
                                    <Comment
                                        parentId={rep.id}
                                        username={rep.username}
                                        text={rep.text}
                                        level={rep.level}
                                        initialReplies={rep.replies}
                                        likes={rep.likes}
                                        dislikes={rep.dislikes}
                                        onAddReply={onAddReply}
                                        onDelete={onDelete}
                                        onEdit={onEdit}
                                        commentUserId={rep.user_id}
                                        currentUserId={currentUserId}
                                    />
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </>
    );
};
