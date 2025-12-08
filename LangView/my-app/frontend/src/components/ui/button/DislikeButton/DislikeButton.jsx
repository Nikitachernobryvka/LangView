import React, { useState } from "react";
import styles from "./DislikeButton.module.css"
import dislike from "../../../../assets/svg/Dislike.svg"
import dislikeActive from "../../../../assets/svg/DislikeActive.svg"

export const DislikeButton = ({active, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}><img src = {active ? dislikeActive : dislike} alt="Dislike button"/></button>
    )
}

export default DislikeButton