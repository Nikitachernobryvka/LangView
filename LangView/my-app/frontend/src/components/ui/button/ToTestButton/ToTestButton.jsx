import React from "react";

import { Link } from "react-router-dom";
import styles from "./ToTestButton.module.css"

export const ToTestButton = () => {
    return (
        <Link to="/testbegin">
            <button className={styles.to_test}>На початок тесту</button>
        </Link>
    )
}