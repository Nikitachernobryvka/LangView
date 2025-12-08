import React from "react";
import styles from "./PrevQuestionButton.module.css"
export const PrevQuestionButton = ({onClick}) => {
    return (
        <button className={styles.prev_button} onClick={onClick}>Попереднє</button>
    )
}

export default PrevQuestionButton