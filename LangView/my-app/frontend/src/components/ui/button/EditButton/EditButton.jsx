import React from "react";
import editIcon from "../../../../assets/svg/EditIcon.svg"
import styles from "./EditButton.module.css"

export const EditButton = ({onClick, "data-cy": dataCy}) => {
    return (
        <button data-cy={dataCy} className={styles.edit} onClick={onClick}><img src={editIcon}></img></button>
    )
}
