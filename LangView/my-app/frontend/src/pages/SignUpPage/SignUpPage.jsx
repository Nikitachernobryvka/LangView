import {React, useState, useContext} from "react";
import styles from "./SignUpPage.module.css"
import AuthButton from "../../components/ui/button/AuthButton/AuthButton"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export function SignUpPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {register} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleClick = async () => {

        if (!username || !email || !password) {
            setError("Заповніть всі поля");
            return;
        }

        const data = await register(username, email, password);

        if (data.user) {
            navigate("/login");
        }

        else {
            setError(data.message || "Помилка сервера");
        }
    }
    return (
        <>
            <div className={styles.registerFrame}>
                <div className={styles.registerExternal}>
                    <h3 className={styles.title}>Створення акаунту</h3>
                    <div className={styles.registerInternal}>
                        <input type="text" placeholder="Ім'я користувача" value={username}
                        onChange={(event) => setUsername(event.target.value)}/>

                        <input type="email" placeholder="Пошта" value={email}
                        onChange={(event) => setEmail(event.target.value)}/>
                        
                        <input type="password" placeholder="Пароль" value={password}
                        onChange={(event) => setPassword(event.target.value)}/>

                        <AuthButton onClick={handleClick}>Зареєструватися</AuthButton>

                        {error && <p className={styles.errorMessage}>{error}</p>}

                        <p className={styles.offer}>Є акаунт? <Link to="/login">Авторизуйтесь</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpPage