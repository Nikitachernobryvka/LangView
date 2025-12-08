import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem("token"))

    useEffect(() => {
        const fetchUser = async () => {
            if (!token) {
                setLoading(false);
                return
            }

            try {
                const response = await fetch("http://localhost:8080/api/auth/currentUser", {
                    headers: {Authorization: `Bearer ${token}`}
                })

                if (response.ok) {
                    const data = await response.json();
                    setUser(data.user);
                }
                else {
                    setUser(null);
                }
            }
            catch (error) {
                console.error("Помилка:", error);
                setUser(null);
            }

            setLoading(false);
        }

        fetchUser();

    }, [token])

    const login = async (identifier, password) => {
        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({identifier, password})
            })

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                setToken(data.token);
                setUser(data.user)
            }

            return data
        }
        catch (error) {
            console.error("Помилка:", error)
            return {message: "Помилка сервера"}
        }
    }

    const register = async (username, email, password) => {
        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({username, email, password})
            })

            const data = await response.json();
            
            return data
        }
        catch (error) {
            console.error("Помилка:", error);
            return {message: "Помилка сервера"}
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    }

    return (
        <AuthContext.Provider value = {{user, token, loading, login, register, logout, isAuth: !!user}}>
            {children}
        </AuthContext.Provider>
    )
}
