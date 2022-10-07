import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import NavbarC from "../components/navbar/NavbarC";
import Footer from "../components/footer/Footer";
import TemplatedV1 from "../components/templated_house/TemplatedV1";


const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <NavbarC />

                <Footer />
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="templated" element={<TemplatedV1 />} />

                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;