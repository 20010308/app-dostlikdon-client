import React from 'react';

const NavbarNav = () => {
    return (
        <div className="col-12">
            <ul className="nav my-3 align-items-center">
                <li className="nav-item"><a className="nav-link text-dark" href="#"></a>
                    <div className="logo">
                        <img src="/image/Vector.svg" alt=""/>
                    </div></li>
                <li className="nav-item"><a className="nav-link ml-3 mt-2 text-dark" href="#">Jamiyat haqida</a></li>
                <li className="nav-item"><a className="nav-link ml-3 mt-2 text-dark" href="#">Struktura</a></li>
                <li className="nav-item"><a className="nav-link ml-3 mt-2 text-dark" href="#">Yangiliklar</a></li>
                <li className="nav-item"><a className="nav-link ml-3 mt-2 text-dark" href="#">Elektron murojatlar</a></li>
                <li className="nav-item"><a className="nav-link ml-3 mt-2 text-dark" href="#">Interaktiv xizmatlar</a></li>
                <li className="nav-item"><a className="nav-link ml-3 mt-2 text-dark" href="#">Aloqa</a></li>
            </ul>
        </div>
    );
};

export default NavbarNav;