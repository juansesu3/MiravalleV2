import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import NavbarC from "../components/navbar/NavbarC";
import Footer from "../components/footer/Footer";
import TemplatedV1 from "../components/templated_house/TemplatedV1";
import Location from "../components/templated_house/sub-components/location/Location";
import Surroundings from "../components/templated_house/sub-components/surroundings/Surroundings";
import Features from "../components/templated_house/sub-components/features/features";
import Login from '../components/login/Login';
import FirebaseApp from '../components/credentials/Credentials';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import CrudProperties from '../components/crud/CrudProperties';

const auth = getAuth(FirebaseApp)
const AppRouter = () => {

    const [usuario, setUsuario] = useState(null);

    onAuthStateChanged(auth, (usuarioFirebase)=>{
      if(usuarioFirebase){
        setUsuario(usuarioFirebase)
      }else{
        setUsuario(null)
      }
    })



    return (
        <>
            <BrowserRouter>
                <NavbarC />
                <br/>
                <br/>
                <br/>
                <br/>
                {usuario?<CrudProperties emailUsuario ={usuario.email}/>:<Login/> }

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