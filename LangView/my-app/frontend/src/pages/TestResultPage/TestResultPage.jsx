import React, { useState, useEffect, useContext } from "react";
import styles from "./TestResultPage.module.css"
import { ResultHeader } from "../../components/layouts/ResultHeader";
import { ResultArea } from "../../components/layouts/ResultArea";
import { ToHomeButton } from "../../components/ui/button/ToHomeButton";
import { RepeatButton } from "../../components/ui/button/RepeatButton";
import { RatingButton } from "../../components/ui/button/RatingButton";
import { formatTime } from "../../utils/formatTime";
import { AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

export function TestResultPage() {

    const { user } = useContext(AuthContext);
    const currentTestId = 2;

    const { data: testInfo, loading: infoLoading, error: infoError } = useFetch(`/api/test/info?user=${user.username}`);
    const { data: lastResult, loading: resultLoading, error: resultError } = useFetch(`/api/test/lastResult?user_name=${user.username}&test_id=${currentTestId}`);

    const loading = infoLoading || resultLoading;
    const error = infoError || resultError;

    if (loading) {
        return <p>Завантаження...</p>;
    } 

    if (error) {
        return <p>Помилка: {error.message || error}</p>;
    } 

    return (
        <div className={styles.result_frame}>
            <div className={styles.result_external}>
                <ResultHeader testName={testInfo?.test_name || "Завантаження"} />
                <div className={styles.main_container}>
                    <div className={styles.right_side}>
                        {lastResult ? (
                            <ResultArea
                                result={{
                                    ...lastResult,
                                    time: formatTime(lastResult.time_seconds),
                                    attempt: lastResult.attempts,
                                }}
                            />
                        ) : (
                            <p>Результат недоступний</p>
                        )}

                        <div className={styles.button_container}>
                            <ToHomeButton />
                            <RepeatButton />
                            <RatingButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestResultPage;