import React from "react";
import styles from "./CancelButton.module.css"

export const CancelButton = ({onClick}) => {
    return (
        <button data-cy="cancel-button" className={styles.cancel} onClick={onClick}>
            Скасувати
        </button>
    )
}

export default CancelButton