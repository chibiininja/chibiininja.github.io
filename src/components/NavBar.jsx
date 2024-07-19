import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { useLocation, Link } from "react-router-dom";

import "./NavBar.css";
 
function NavBar() {
    var path = useLocation().pathname;

    return (
        <div className="NavBar" id="myTopnav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contactus">Contact Us</Link>
        </div>
    );
};
 
export default NavBar;