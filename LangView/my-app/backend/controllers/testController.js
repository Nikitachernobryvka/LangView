import {pool} from "../config/database.js"

export const getTestInfo = async (req, res) => {
    const {user_name} = req.query;

    try {
        const testResult = await pool.query(
            "SELECT id, test_name, questions_count FROM test LIMIT 1"
        );

        if (testResult.rows.length === 0) {
            return res.status(400).json({error: "Тест не знайдено"});
        }

        const test = testResult.rows[0];

        let attempts = 0;

        if (user_name) {
            const attemptResult = await pool.query(
                "SELECT COUNT(*) FROM results WHERE user_name = $1 AND test_id = $2",
                [user_name, test.id]
            )
            attempts = parseInt(attemptResult.rows[0].count);
        }

        res.json({
            test_name: test.test_name,
            questions_count: test.questions_count,
            user_attempts: attempts
        })
    }
    
    catch (error) {
        console.error(error);
        res.status(500).json({error: "Помилка"});
    }
}

export const submitTest = async (req, res) => {
    const {user_name, test_id, answers, attempts, time_seconds} = req.body;

    if (!user_name || !test_id || !Array.isArray(answers)) {
        return res.status(400).json({error: "Невірні дані"});
    }

    try {
        const ids = answers.map(answer => answer.question_id);

        const placeholders = ids.map((_, i) => `$${i + 1}`).join(",");
        const query = `SELECT id, correct_option FROM questions WHERE id IN (${placeholders});`
        const correctRes = await pool.query(query, ids);

        const correctMap = {};
        for (const row of correctRes.rows) {
            correctMap[row.id] = row.correct_option;
        }

        let score = 0;

        for (const a of answers) {
            const correct = correctMap[a.question_id];
            if (correct !== undefined && a.selected_option === correct) {
                score += 1;
            }
        }

        const insert = await pool.query(
            'INSERT INTO results (user_name, test_id, score, attempts, time_seconds) VALUES ($1, $2, $3, $4, $5) RETURNING id, completed_at',
            [user_name, test_id, score, attempts !== undefined && attempts !== null ? attempts : 1,
            time_seconds !== undefined && time_seconds !== null ? time_seconds : null]
        )

        return res.json({
            score,
            time_seconds:  time_seconds !== undefined && time_seconds !== null ? time_seconds : null,
            attempts: attempts !== undefined && attempts !== null ? attempts : 1,
            savedResultId: insert.rows[0].id,
            completed_at: insert.rows[0].completed_at
        })
    }

    catch (error) {
        console.error(error);
        res.status(500).json({error: "Помилка"})
    }
}

export const getLastResult = async (req, res) => {
    const { user_name, test_id } = req.query;

    try {
        const result = await pool.query(
            "SELECT * FROM results WHERE user_name = $1 AND test_id = $2 ORDER BY id DESC LIMIT 1",
            [user_name, test_id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Результат не знайдено" });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Помилка сервера" });
    }
};