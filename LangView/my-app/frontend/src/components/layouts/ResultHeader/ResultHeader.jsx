import React from "react";
import styles from "./ResultHeader.module.css"

export const ResultHeader = ({testName}) => {
    return (
        <div>
            <div>
                <h3>{testName}</h3>
            </div>
        </div>
    )
}

export default ResultHeader