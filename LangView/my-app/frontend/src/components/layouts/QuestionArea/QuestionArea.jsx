import React, {useState} from "react";
import styles from "./QuestionArea.module.css"
import { BoldHr } from "../../ui/hr/BoldHr";

export const QuestionArea = ({question, onSelectAnswer, selectedOption}) => {
    if (!question) {
        return null;
    }

    const handleChange = (index) => {
        if (onSelectAnswer) {
            onSelectAnswer(index);
        }
    }

    return (
        <>
        <div className={styles.question_border}>
            <h3>{question.question_text}</h3>
            <BoldHr className={styles.horizontal_line}/>
            <div className={styles.answers}>
                {question.options.map((option, index) => (
                    <label key={index}>
                        <input type="radio" name={`Відповідь-${question.id}`}
                        checked={selectedOption === index} onChange={() => handleChange(index)}/>
                        {option}
                    </label>
                ))}
            </div>
        </div>
            
        </>
    )
}

export default QuestionArea