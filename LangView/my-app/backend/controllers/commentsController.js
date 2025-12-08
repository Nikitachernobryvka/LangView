import { pool } from "../config/database.js";

export const getComments = async (req, res) => {
    const { page } = req.params;
    try {
        const result = await pool.query(
            'SELECT * FROM comments WHERE page = $1 ORDER BY created_at ASC',
            [page]
        );
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const addComment = async (req, res) => {
    console.log("BODY:", req.body);
    const { page, username, text, user_id } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO comments (page, username, text, level, user_id) VALUES ($1, $2, $3, 0, $4) RETURNING *',
            [page, username, text, user_id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Add comment error:", error);
        res.status(500).json({ error: error.message });
    }
}

export const addReply = async (req, res) => {
    const { parent_id, page, username, text, level, user_id } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO comments (parent_id, page, username, text, level, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [parent_id, page, username, text, level, user_id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Add reply error:", error);
        res.status(500).json({ error: error.message });
    }
}

export const editComment = async (req, res) => {
    const {id} = req.params;
    const {text} = req.body;
    const userId = req.userId; 

    try {
        const result = await pool.query(
            'UPDATE comments SET text = $1, updated_at = NOW() WHERE id = $2 AND user_id = $3 RETURNING *',
            [text, id, userId]
        );
        
        if (result.rowCount === 0) {
            return res.status(403).json({ message: "У вас немає дозволу на редагування цього коментаря." });
        }
        
        res.json(result.rows[0]);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const deleteComment = async (req, res) => {
    const {id} = req.params;
    const userId = req.userId;
    console.log("Trying to delete comment", id, "by user", userId);

    try {
        const result = await pool.query(
            'DELETE FROM comments WHERE id = $1 AND user_id = $2 RETURNING id',
            [id, Number(userId)]
        );
        
        if (result.rowCount === 0) {

            return res.status(403).json({ message: "У вас немає дозволу на видалення цього коментаря." });
        }

        res.json({message: "Коментар видалено"});
    }
    catch (error){
        console.error("Помилка:", error)
    }
}

// export const likeComment = async (req, res) => {
//     const {id, type} = req.params;

//     try {
//         if (type === "like") {
//             const result = await pool.query(
//                 'UPDATE comments SET likes = likes + 1 WHERE id = $1 RETURNING *',
//                 [id]
//             );

//             res.json(result.rows[0]);
//         }

//         else {
//             const result = await pool.query(
//                 'UPDATE comments SET dislikes = dislikes + 1 WHERE id = $1 RETURNING *',
//                 [id]
//             );
//             res.json(result.rows[0]);
//         }
//     }

//     catch (error) {
//         res.status(500).json({error: error.message});
//     }
// }
