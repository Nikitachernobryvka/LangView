import React from "react";
import styles from "./EndTestWindow.module.css"
import { Link, useNavigate } from "react-router-dom";

export const EndTestWindow = ({ cancel, onSubmit }) => {
    const navigate = useNavigate();

    const handleEnd = async () => {
        try {
            const result = await onSubmit();
            navigate("/result");
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={styles.end_frame}>
            <div className={styles.end_content}>
                <p>Ви впевнені, що хочете завершити тест?</p>
                <div className={styles.button_container}>
                    <button onClick={handleEnd}>Завершити</button>
                    <button onClick={cancel}>Відмінити</button>
                </div>

            </div>
        </div>
    )
}

export default EndTestWindow
