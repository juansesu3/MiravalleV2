import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import NavbarC from "../components/navbar/NavbarC";
import Footer from "../components/footer/Footer";
import TemplatedV1 from "../components/templated_house/TemplatedV1";
import Location from "../components/templated_house/sub-components/location/Location";
import Surroundings from "../components/templated_house/sub-components/surroundings/Surroundings";
import Features from "../components/templated_house/sub-components/features/features";


const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <NavbarC />

                <Footer />
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="templated" element={<TemplatedV1 />} />



                    <Route path="features" element={<Features/>} />
                    <Route path="location" element={<Location />} />
                    <Route path="surroundings" element={<Surroundings/>} />

                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;