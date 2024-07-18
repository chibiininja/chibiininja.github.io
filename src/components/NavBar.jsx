import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { useLocation, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import "./NavBar.css";
 
function NavBar() {
    function toggleResponsive() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += "responsive";
        } else {
            x.className = "topnav";
        }
    }

    var path = useLocation().pathname;

    return (
        <div className="NavBar" id="myTopnav">
            <a className={path === "/" ? "active" : ""}>
                {/* Endpoint to route to Home component */}
                <Link to="/">Home</Link>
            </a>
            <a>
                {/* Endpoint to route to About component */}
                <Link to="/about">About</Link>
            </a>
            <a>
                {/* Endpoint to route to Contact Us component */}
                <Link to="/contactus">Contact Us</Link>
            </a>
            <a className="icon" onClick={toggleResponsive}>
                <RxHamburgerMenu />
            </a>
        </div>
    );
};
 
export default NavBar;