import React from "react";
import styles from "./SendButton.module.css"

export const SendButton = ({onClick, "data-cy": dataCy}) => {
    return (
        <button data-cy={dataCy} className={styles.send} onClick={onClick}>
            Надіслати
        </button>
    )
}

export default SendButton