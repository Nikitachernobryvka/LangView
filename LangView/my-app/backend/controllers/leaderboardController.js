import { pool } from "../config/database.js";

export const getLeaderboard = async (req, res) => {
  try {
    const test_id = req.query.test_id;
    const rawLimit = req.query.limit || 10;
    const limit = Math.min(Math.max(1, rawLimit), 200);

    if (!test_id || Number.isNaN(test_id)) {
      return res.status(400).json({ error: "Тест не знайдено або невірний test_id" });
    }

    const query = `
      WITH best_user AS (SELECT user_name, score, time_seconds, attempts, ROW_NUMBER() OVER (
      PARTITION BY user_name 
      ORDER BY score DESC, attempts ASC, time_seconds ASC
      ) AS rn FROM results WHERE test_id = $1) SELECT user_name, score, time_seconds, attempts, rank() OVER (
       ORDER BY score DESC, attempts ASC, time_seconds ASC) AS rnk FROM best_user WHERE rn = 1 ORDER BY rnk ASC LIMIT $2;
    `;

    const { rows } = await pool.query(query, [test_id, limit]);
    return res.json({ leaderboard: rows });
  } catch (error) {
    console.error("Помилка:", error);
    return res.status(500).json({ error: "Помилка" });
  }
};
