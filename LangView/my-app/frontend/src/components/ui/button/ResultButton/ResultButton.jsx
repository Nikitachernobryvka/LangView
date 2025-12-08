import React from "react";
import styles from "./ResultButton.module.css"
import { Link } from "react-router-dom";

export const ResultButton = () => {
    return (
        <Link to="/result">
            <button className={styles.result_button}>Результат</button>
        </Link>
    )
}

export default ResultButton
