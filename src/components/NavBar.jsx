import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
    return (
        <div className="NavBar" id="myTopnav">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <a href={`${process.env.PUBLIC_URL}/files/DarrenInouye_Resume.pdf`} without rel='noreferrer' target='_blank'>Resume</a>
            <Link to="/interests">Interests</Link>
            <Link to="/contacts">Contacts</Link>
        </div>
    );
};

export default NavBar;