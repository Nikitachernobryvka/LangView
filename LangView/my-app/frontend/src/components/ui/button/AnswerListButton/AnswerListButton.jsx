import React from "react";
import styles from "./AnswerListButton.module.css"
import ArrowDown from "../../../../assets/svg/DownArrow.svg"
import { CommentsCounter } from "../../../layouts/CommentsCounter";

export const AnswerListButton = ({ count, show, onClick }) => {
    return (
        <>
            <button className={styles.counter} onClick={onClick}>
                <img data-cy="answer-arrow" data-state={show ? "open" : "closed"} src={ArrowDown} alt="Стрілка" className={`${styles.arrow} ${show ? styles.arrow_open : ""}`}/>
                <CommentsCounter count={count} text="Відповіді"></CommentsCounter>
            </button>
        </>
    )
}

export default AnswerListButton;