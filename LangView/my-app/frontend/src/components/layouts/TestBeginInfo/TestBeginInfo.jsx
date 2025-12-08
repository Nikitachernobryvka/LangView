import React, {useContext} from "react";
import styles from "./TestBeginInfo.module.css"
import { AuthContext } from "../../../context/AuthContext";
import { useFetch } from "../../../hooks/useFetch";

export const TestBeginInfo = () => {
    const {user} = useContext(AuthContext);
    const name = user ? user.username : "";

    const {data, loading, error} = useFetch(`/api/test/info?user_name=${name}`)

    if (loading) {
        return <p>Завантаження</p>
    }

    if (error) {
        return <p>Помилка</p>
    }

    return (
        <>  
            <div className={styles.test_info}>
                <h2>{data.test_name}</h2>
                <div className={styles.info_block}>
                    <div className={styles.info_line}>
                        <p>Кількість питань: <span>{data.questions_count}</span></p>
                    </div>

                    <div className={styles.info_line}>
                    <p>Спроба: <span>{data.user_attempts ? data.user_attempts : 0}</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestBeginInfo