import React from 'react';
import Navbar from "../components/Navbar";
import NavbarNav from "../components/NavbarNav";
import Footer from "../components/Footer";
import SongiXabarlar from "../components/SongiXabarlar";
import Basic from "../components/Basic";


const Yangiliklar = () => {
    return (
        <div className="yangiliklar">
            <div className="container">
                <div className="row">
                    <Navbar/>
                </div>
            </div>
                <div className="bg-white"><div className="container p-1">
                    <NavbarNav/>
                </div>
            </div>
            <Basic/>
            <div className="">
                <SongiXabarlar/>
            </div>
            <Footer/>
        </div>
    );
};

export default Yangiliklar;