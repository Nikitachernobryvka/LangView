import React from "react";
import styles from "./CommentTextArea.module.css"
import TextareaAutosize from "react-textarea-autosize"

export const CommentTextArea = ({onFocus, value, onChange, "data-cy": dataCy}) => {
    return (
       <TextareaAutosize data-cy={dataCy} placeholder="Введіть коментар" className={styles.text_area} onFocus={onFocus} value={value} onChange={onChange}/>
    )
}
