import React from "react";
import { Navigate } from "react-router-dom";
import { useIsAuth } from "../../../../hooks/useIsAuth";

export const ProtectedRoute = ({children}) => {
    const {isAuth, loading} = useIsAuth();

    if (loading) {
        return <div>Loading</div>
    }

    if (!isAuth) {
        return <Navigate to="/login" replace/>
    }

    return children
}