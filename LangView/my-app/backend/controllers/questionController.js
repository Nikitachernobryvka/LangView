import {pool} from "../config/database.js";

// export const getQuestions = async (req, res) => {
//     const {testId} = req.params;

//     try {
//         let query;
//         let values = [];

//         if (testId) {
//             query = 'SELECT id, question_text, options, order_num FROM questions WHERE test_id = $1 ORDER BY order_num';
//             values = [testId]
//         }

//         else {
//             query = 'SELECT id, question_text, options, order_num FROM questions ORDER by test_id, order_num'
//         }

//         const result = await pool.query(query, values);
//         res.json(result.rows);
//     }
    
//     catch (error) {
//         console.error(error);
//         res.status(500).json({error: "Помилка"})
//     }
// }

export const getQuestionById = async (req, res) => {
    const {id} = req.params;

    try {
        const result = await pool.query(
            "SELECT id, question_text, options, order_num FROM questions WHERE id = $1",
            [id]
        )

        if (result.rows.length === 0) {
            return res.status(404).json({error: "Питання не знайдено"})
        }

        res.json(result.rows[0]);
    }

    catch (error) {
        console.error(error);
        res.status(500).json({error: "Помилка"})
    }
}
