import React from 'react';
import {NavLink} from "react-router-dom";
import tour from "../traveLogo.jpg";
import "./Navbar.css";

function Navbar() {
    return ( 
        <div className="Navbar">
            <NavLink to="/">
            <img src={tour} className="navbar-image" alt="tourLogo" />
            </NavLink>

            <div className="nav-links">
                <NavLink to="/" className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    About
                </NavLink>
                <NavLink to="/tours" className="nav-link active-tours">
                    Tours
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;


