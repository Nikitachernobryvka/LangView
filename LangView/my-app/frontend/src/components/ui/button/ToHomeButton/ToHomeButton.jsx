import React from "react";
import { Link } from "react-router-dom";
import styles from "./ToHomeButton.module.css"

export const ToHomeButton = () => {
    return (
        <Link to="/">
            <button className={styles.to_home}>На головну</button>
        </Link>
    )
}

export default ToHomeButton
