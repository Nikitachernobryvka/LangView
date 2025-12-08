import React from "react";
import light from "../../../../assets/svg/lightThemeLogo.svg"
import styles from "./ThemeToggle.module.css"

export const ThemeToggle = () => {
    return (
        <a href="/" className={styles.theme_toggle}>
            <img src={light} />
        </a>
    )
}

export default ThemeToggle;