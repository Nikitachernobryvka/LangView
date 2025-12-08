import styles from "./TestHeader.module.css"

export const TestHeader = ({testInfo, elapsedTime, currentQuestion, totalQuestion}) => {

    const attempt = testInfo.user_attempts;
    const time = testInfo.time_seconds;

    const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, "0");
    const seconds = (elapsedTime % 60).toString().padStart(2, "0");

    const formattedTime = `${minutes}:${seconds}`;

    return (
            <div className={styles.test_header}>
                <h3>{testInfo.test_name}</h3>
                <p>Спроба: {attempt}</p>
                <p>Час: {formattedTime}</p>
                <p>Питання: {currentQuestion}/{totalQuestion}</p>
            </div>
    )
}

export default TestHeader