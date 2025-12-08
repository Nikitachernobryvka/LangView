import React from "react";
import styles from "./RatingButton.module.css"
import { Link } from "react-router-dom";

export const RatingButton = () => {
    return (
        <Link to="/leadboard">
            <button className={styles.rating_button}>Рейтинг</button>
        </Link>
    )
}

export default RatingButton
