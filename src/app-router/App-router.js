import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import NavbarC from "../components/navbar/NavbarC";


const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <NavbarC />
                <Home/>
                <Routes>
                    <Route path="*" />
                    <Route path="/" />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;