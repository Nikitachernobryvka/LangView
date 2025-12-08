import React from "react";
import { Link } from "react-router-dom";
import styles from "./TestBeginButton.module.css"

export const TestBeginButton = () => {
    return (
        <Link to="/test">
            <button className={styles.to_begin}>Почати тест</button>
        </Link>
    )
}

export default TestBeginButton
