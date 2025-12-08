import React from "react";
import styles from "./NextQuestionButton.module.css"

export const NextQuestionButton = ({onClick}) => {
    return (
        <button className={styles.next_button} onClick={onClick}>Наступне</button>
    )
}

export default NextQuestionButton