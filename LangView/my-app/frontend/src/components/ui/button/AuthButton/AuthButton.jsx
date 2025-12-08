import React from "react";
import styles from "./AuthButton.module.css"
export const LoginButton = ({children, onClick}) => {
    return (
        <button className={styles.login_button} onClick={onClick}>{children}</button>
    )
}

export default LoginButton