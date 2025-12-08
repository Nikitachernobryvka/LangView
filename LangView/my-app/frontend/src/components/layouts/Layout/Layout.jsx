import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/navigationBar";
import Footer from "../Footer/Footer"
export const Layout = () => {
    return (
        <>
            <div>
                <NavigationBar/>
                
                <Outlet/>

                <Footer/>
            </div>
        </>
    )
}

export default Layout
