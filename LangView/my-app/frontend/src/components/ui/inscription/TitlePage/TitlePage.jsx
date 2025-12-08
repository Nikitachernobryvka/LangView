import React from "react"
import styles from "./TitlePage.module.css"
export const TitlePage = ({ logo, children }) => {
    return (
        <div className={styles.title_page}>
            <img src={logo} />
            <h1>{children}</h1>
        </div>
    )
}

export default TitlePage;