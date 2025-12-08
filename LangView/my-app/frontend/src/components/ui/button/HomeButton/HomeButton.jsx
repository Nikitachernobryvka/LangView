import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./HomeButton.module.css"
import homelogo from "../../../../assets/svg/homeLogo.svg"

export const HomeButton = () => {
    return (
        <Link to="/" className={styles.home}><img src={homelogo} /></Link>
    )
}

export default HomeButton;