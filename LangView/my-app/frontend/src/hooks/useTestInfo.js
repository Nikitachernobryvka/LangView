import { useState, useEffect } from "react";

export const useTestInfo = (username) => {
    const [questionCount, setQuestionCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestInfo = async () => {
            if (!username) {
                return;
            }
            try {
                setLoading(true);
                const res = await fetch(`/api/test/info?user_name=${username}`);
                if (!res.ok) {
                    throw new Error(`Помилка:, ${res.status}`);
                }
                const data = await res.json()
                setQuestionCount(data.questions_count)
            }

            catch (error) {
                console.error(error);
                setError(error)
            }

            finally {
                setLoading(false);
            }
        }
        fetchTestInfo();
    }, [username])

    return {questionCount, loading, error};
}
