export const getLevel = (level, styles) => {
    if (level >=1) {
        return styles.level_1_2;
    }
    
    else {
        return "";
    }
}

export const countNestedReplies = (repliesArray) => {
    if (!repliesArray || repliesArray.length === 0) {
        return 0;
    }
    
    return repliesArray.reduce((count, rep) => {
        if (!rep) {
            return count; 
        }
        
        return count + 1 + countNestedReplies(rep.replies); 
    }, 0)
}

export const countTotalComments = (commentList) => {

    if (!Array.isArray(commentList)) {
        return 0;
    }

    return commentList.reduce((total, comment) => {

        if (!comment) {
            return total;
        }

        return total + 1 + countNestedReplies(comment.replies);
    }, 0)
}

export const insertReply = (comments, parentId, reply) => {
    return comments.map(comment => {
        if (comment.id === parentId) {
            return {...comment, replies: Array.isArray(comment.replies) ? [...comment.replies, reply] : [reply]}
        }
        else if (comment.replies && comment.replies.length > 0) {
           const newReplies = insertReply(comment.replies, parentId, reply);
           if (newReplies !== comment.replies) {
                return {...comment, replies: newReplies};
           }
        }
        return comment;
        
    })
}

export const deleteComment = (comments, deleteId) => {
    const filtredComments = comments.filter(comment => comment.id !== deleteId);

    if (filtredComments.length < comments.length) {
        return filtredComments;
    }

    return comments.map(comment => {
        if (comment.replies && comment.replies.length > 0) {
            const newReplies = deleteComment(comment.replies, deleteId);

            if (newReplies !== comment.replies) {
                return {
                    ...comment,
                    replies: newReplies
                }
            }
        }
        return comment;
    })
}

export const editComment = (comments, editId, newText) => {
    return comments.map(comment => {
        if (comment.id === editId) {
            return {...comment, text: newText};
        }

        else if (comment.replies && comment.replies.length) {
            const newReplies = editComment(comment.replies, editId, newText);
            if (newReplies !== comment.replies) {
                return {...comment, replies: newReplies};
            }
        }
        else { 
            return comment;
        }
    })
}

export const buildCommentTree = (flatList) => {
    if (!Array.isArray(flatList)) {
        return [];
    }
    
    const commentsMap = {};
    const rootComments = [];

    flatList.forEach(comment => { 
        commentsMap[comment.id] = { ...comment, replies: [] };
    });

    flatList.forEach(comment => {
        if (comment.parent_id) {
            const parent = commentsMap[comment.parent_id];
            if (parent) {
                parent.replies.push(commentsMap[comment.id]);
            }
        } else {
            rootComments.push(commentsMap[comment.id]);
        }
    });

    return rootComments;
};