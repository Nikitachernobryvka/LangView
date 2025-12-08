import {React, useState, useContext} from "react";
import styles from "./LoginPage.module.css"
import AuthButton from "../../components/ui/button/AuthButton/AuthButton"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


export function LoginPage() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleClick = async () => {

        if (!identifier || !password) {
            setError("Заповніть всі поля");
            return
        }

        const data = await login(identifier, password);

        if (data.user) {
            navigate("/");
        }
        else {
            setError(data.message || "Помилка сервера");
        }
    }

    return (
        <>
        <div className={styles.loginFrame}>
            <div className={styles.loginExternal}>
                <h3 className={styles.title}>Авторизація</h3>
                <div className={styles.loginInternal}>
                    <input type="text" placeholder="Електронна пошта/Ім'я користувача" value={identifier}
                    onChange={(event) => setIdentifier(event.target.value)}/>

                    <input type="password" placeholder="Пароль" value={password}
                    onChange={(event) => setPassword(event.target.value)}/>

                    <AuthButton onClick={handleClick}>Увійти</AuthButton>
                    
                    {error && <p className={styles.errorMessage}>{error}</p>}

                    <p className={styles.offer}>Немає акаунту? <Link to="/signup">Створіть його</Link></p>
                </div>
            </div>        
        </div>
        </>
    )
}

export default LoginPage