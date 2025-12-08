import React from "react";
import email from "../../../assets/svg/emailLogo.svg";
import style from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <a href="mailto:chernobryvka.mykyta@student.uzhnu.edu.ua">
                <img src={email} />
                <span>Наша пошта</span>
            </a>
            <p>2025 LangView. Всі права захищені</p>
        </footer>
    )
}

export default Footer;