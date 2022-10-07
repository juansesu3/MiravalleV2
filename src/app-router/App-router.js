import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarC from "../components/home/navbar/NavbarC";


const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <NavbarC />
                <Routes>
                    <Route path="*" />
                    <Route path="/" />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;