import React from "react";
import styles from "./LeaderboardPage.module.css"
import { ToHomeButton } from "../../components/ui/button/ToHomeButton";
import { ResultButton } from "../../components/ui/button/ResultButton";
import { useFetch } from "../../hooks/useFetch.js";
import { formatTime } from "../../utils/formatTime.js";
import { Link } from "react-router-dom";
import { ToTestButton } from "../../components/ui/button/ToTestButton/ToTestButton.jsx";

export function LeaderboardPage({ testId = 2 }) {
    const { data, loading, error } = useFetch(`/api/leaderboard/leaderboard?test_id=${testId}&limit=50`);

    const leaderboard = data?.leaderboard || [];

    return (
        <div className={styles.lead_frame}>
            <div className={styles.lead_external}>
                <h3 className={styles.title}>Рейтинг</h3>

                {loading && <p>Завантаження...</p>}
                {error && <p className={styles.error}>Помилка: {error.message || error}</p>}

                {!loading && !error && leaderboard.length === 0 && <p>Результатів немає</p>}

                {!loading && !error && leaderboard.length > 0 && (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Місце</th>
                                <th>Користувач</th>
                                <th>Бал</th>
                                <th>Час</th>
                                <th>Спроби</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboard.map((row) => (
                                <tr key={row.user_name}>
                                    <td>{row.rnk}</td>
                                    <td>{row.user_name}</td>
                                    <td>{row.score}</td>
                                    <td>{formatTime(row.time_seconds)}</td>
                                    <td>{row.attempts}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                <div className={styles.button_container}>
                    <ToHomeButton />
                    <ToTestButton/>
                </div>

            </div>
        </div>
    );
}

export default LeaderboardPage;