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
            <Link to="/interests">Interests</Link>
            <Link to="/recommendations">Recommendations</Link>
        </div>
    );
};

export default NavBar;