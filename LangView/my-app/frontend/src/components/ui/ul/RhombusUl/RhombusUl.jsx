import React from "react";
import styles from "./RhombusUl.module.css"

export const RhombusUl = ({children}) => {
    return (
        <ul className={styles.rhombus}>
            {children}
        </ul>
    )
}