import React from "react";
import styles from "./VerticalPanel.module.css";
export const VerticalPanel = ({src, title, text}) => {
    return (
        <div className={styles.vertical_panel}>
            <img src={src}/>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default VerticalPanel;