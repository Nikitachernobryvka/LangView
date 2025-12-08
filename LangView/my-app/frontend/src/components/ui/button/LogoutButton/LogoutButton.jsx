import {React, useContext} from "react";
import logoutIcon from "../../../../assets/svg/Logout.svg"
import styles from "./LogoutButton.module.css"
import { AuthContext } from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    return (
        <button className={styles.logoutButton} onClick={handleLogout}>
            <img src={logoutIcon} alt="Вихід з акаунту"/>
        </button>
    )
}

export default LogoutButton;