import React from "react";
import deleteIcon from "../../../../assets/svg/DeleteIcon.svg"
import styles from "./DeleteButton.module.css"

export const DeleteButton = ({onClick, "data-cy": dataCy}) => {
    return (
        <button data-cy={dataCy} className={styles.delete} onClick={onClick}><img src={deleteIcon}></img></button>
    )
}