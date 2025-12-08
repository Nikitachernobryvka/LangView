import React from "react";
import { Link } from "react-router-dom";
import { HomeButton } from "../../ui/button/HomeButton";
// import { ThemeToggle } from "../../ui/button/ThemeToggle";
import styles from "./NavigationBar.module.css"
import {LogoutButton} from "../../ui/button/LogoutButton/LogoutButton";

export const NavigationBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_left}>
                <HomeButton />
                <Link to="/csharp">C#</Link>
                <Link to="/python">Python</Link>
                <Link to="/java">Java</Link>
                <Link to="/javascript">JavaScript</Link>
                <Link to="/html">HTML</Link>
                <Link to="/css">CSS</Link>
                <Link to="/sql">SQL</Link>
                <Link to="/testbegin">Тест</Link>
            </div>
            <div className={styles.nav_right}>
                {/* <ThemeToggle/> */}
                <LogoutButton/>
            </div>
            
        </nav>
    )
}

export default NavigationBar;
