import React from "react";
import { Link } from "react-router-dom";

import styles from "./EndAttemptButton.module.css"
export const EndAttemptButton = ({onClick}) => {
    return (
            <button className={styles.end_button} onClick={onClick}>Завершити спробу</button>
    )
}

export default EndAttemptButton