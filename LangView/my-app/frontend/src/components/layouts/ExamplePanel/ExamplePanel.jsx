import React from "react"
import styles from "./ExamplePanel.module.css"
import { BoldHr } from "../../ui/hr/BoldHr"

export const ExamplePanel = ({ children, name, text }) => {
    return (
        <div>
            <BoldHr/>
            <h2 className={styles.title}>Приклад використання мови {name}</h2>
            <p>{text}</p>
            <div className={styles.frame_example}>
                <h3>Приклад</h3>
                <div className={styles.example}>
                    <pre>
                        {children}
                    </pre>
                </div>
            </div>
            <BoldHr/>
        </div>
    )
}