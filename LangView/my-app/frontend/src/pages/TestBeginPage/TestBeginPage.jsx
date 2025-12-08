import React from "react";
import styles from "./TestBeginPage.module.css"
import { TestBeginInfo } from "../../components/layouts/TestBeginInfo";
import { BoldHr } from "../../components/ui/hr/BoldHr";
import { ToHomeButton } from "../../components/ui/button/ToHomeButton";
import { TestBeginButton } from "../../components/ui/button/TestBeginButton";
import { RatingButton } from "../../components/ui/button/RatingButton";

export function TestBeginPage() {
    return (
        <>
            <div className={styles.begin_frame}>
                <div className={styles.begin_external}>
                    <div className={styles.begin_internal}>
                        <TestBeginInfo/>
                        <BoldHr className={styles.horizontal_line}/>
                        <div className={styles.button_container}>
                            <ToHomeButton/>
                            <TestBeginButton/>
                            <RatingButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestBeginPage