import React, { useState } from "react";
import styles from "./QuestionNavigation.module.css"

export const QuestionNavigation = ({ totalQuestions, currentQuestion, onSelectQuestion, selectedOption }) => {
    const buttons = [];

    for (let i = 1; i <= totalQuestions; i++) {
        let className = "";

        if (i === currentQuestion) {
            className = styles.active;
        }

        else if (selectedOption && selectedOption[i] !== undefined && selectedOption[i] !== null) {
            className = styles.selected;
        }

        buttons.push(<button key={i} className={className} onClick={() => onSelectQuestion(i)}>{i}</button>)
    }

    return (
        <>
            <div className={styles.general}>
                <h3 className={styles.title}>Питання</h3>
                <div className={styles.scroll}>
                    <div className={styles.grid}>
                        {buttons}
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionNavigation