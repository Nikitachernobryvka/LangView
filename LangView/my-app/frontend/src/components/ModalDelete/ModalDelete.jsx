import React from "react";
import styles from "./ModalDelete.module.css"

export const ModalDelete = ({cancel, confirm, parentId }) => {
    return (
        <div className={styles.del_frame}>
            <div className={styles.del_content}>
                <p>Ви впевнені, що хочете видалити цей коментар?</p>
                <div className={styles.button_container}>
                    <button data-cy={`cancel-delete-${parentId}`} onClick={cancel}>Відмінити</button>
                    <button data-cy={`confirm-delete-${parentId}`} onClick={confirm}>Видалити</button>
                </div>
            </div>
        </div>
    )
}