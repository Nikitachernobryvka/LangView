import React from "react";
import styles from "./Panel.module.css"

export const Panel = ({title, children, className}) => {
    return (
        <div className={`${styles.panel} ${className}`}>
            <h2>{title}</h2>
            <div className={styles.panel_content}>
                {children}
            </div>
        </div>
    )
}

export default Panel;