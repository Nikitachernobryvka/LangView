import React from 'react';
import styles from "./HomeButton.module.css"
import homelogo from "../../../../assets/svg/homeLogo.svg"

export const HomeButton = ({ href = "/" }) => {
    return (
        <a href={href} className={styles.home}><img src={homelogo} /></a>
    )
}

export default HomeButton;