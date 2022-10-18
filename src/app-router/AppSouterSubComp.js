import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Location from "../components/templated_house/sub-components/location/Location";
import Surroundings from "../components/templated_house/sub-components/surroundings/Surroundings";
import Features from "../components/templated_house/sub-components/features/features";





const AppSouterSubComp = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="features" element={<Features/>} />
                    <Route path="location" element={<Location />} />
                    <Route path="surroundings" element={<Surroundings/>} />

                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppSouterSubComp;