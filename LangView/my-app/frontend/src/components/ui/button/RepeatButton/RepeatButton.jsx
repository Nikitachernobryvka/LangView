import React from "react";
import { Link } from "react-router-dom";

import styles from "./RepeatButton.module.css"

export const RepeatButton = () => {
    return (
        <Link to="/testbegin">
            <button className={styles.repeat_button}>Спробувати знову</button>  
        </Link>
    )
}

export default RepeatButton
