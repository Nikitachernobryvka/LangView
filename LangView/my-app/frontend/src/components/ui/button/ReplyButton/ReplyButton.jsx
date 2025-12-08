import React from "react";
import styles from "./ReplyButton.module.css"

export const ReplyButton = ({onClick, "data-cy": dataCy}) => {
    return (
        <button className={styles.button} onClick={onClick} data-cy={dataCy}>Відповісти</button>
    )
}

export default ReplyButton