import React from "react";
import styles from "./BoldHr.module.css"

export const BoldHr = ({className}) => {
    return (
        <hr className={`${styles.bold_hr} ${className}`}/>
    )
}