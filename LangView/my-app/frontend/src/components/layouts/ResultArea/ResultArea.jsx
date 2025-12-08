import React from "react";
import styles from "./ResultArea.module.css"
import { BoldHr } from "../../ui/hr/BoldHr";

export const ResultArea = ({result}) => {
    return (
        <>
            <div className={styles.result_border}>
                <h3>Результат</h3>
                <BoldHr className={styles.horizontal_line} />
                <div className={styles.results}>
                    <p>Кількість правильних відповідей: {result.score}</p>
                    <p>Потрачений час: {result.time}</p>
                    <p>Спроба: {result.attempt}</p>
                </div>
            </div>
        </>
    )
}

export default ResultArea