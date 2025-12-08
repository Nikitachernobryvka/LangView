import React from "react";
import styles from "./CommentsCounter.module.css"

export const CommentsCounter = ({count, text}) => {
    return (
        <h3 className={styles.counter}>
            {text}: {count}
        </h3>
    )
}

export default CommentsCounter