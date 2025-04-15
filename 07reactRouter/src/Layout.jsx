import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/header.jsx";

function Layout() {
    return(
       <>
       <Header/>
       <Footer/>
       <Outlet/>
       </>
    )
}

export default Layout
