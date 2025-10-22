import React from "react";
import { HomeButton } from "../../ui/button/HomeButton";
import styles from "./NavigationBar.module.css"

export const NavigationBar = () => {
    return (
        <nav className={styles.nav}>
            <HomeButton />
            <a href="/">C#</a>
            <a href="/">Python</a>
            <a href="/">Java</a>
            <a href="/">JavaScript</a>
            <a href="/">HTML</a>
            <a href="/">CSS</a>
            <a href="/">SQL</a>
            <a href="/">Тест</a>
        </nav>
    )
}

export default NavigationBar;