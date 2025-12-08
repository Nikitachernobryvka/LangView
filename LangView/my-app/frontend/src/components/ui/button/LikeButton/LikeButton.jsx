import React, { useState } from "react";
import styles from "./LikeButton.module.css"
import like from "../../../../assets/svg/Like.svg"
import likeActive from "../../../../assets/svg/LikeActive.svg"

export const LikeButton = ({active, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}><img src = {active ? likeActive : like} alt="Like button"/></button>
    )
}

export default LikeButton
