import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useIsAuth = () => {
    const {isAuth, loading} = useContext(AuthContext);
    return {isAuth, loading};
}