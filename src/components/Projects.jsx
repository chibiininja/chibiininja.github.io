import React from "react";
import NavBar from "./NavBar";

import "./_Default.css";
import Footer from "./Footer";

const Projects = () => {
    return (
        <div className="Default">
            <div className="Upper">
                <NavBar />
                <div className="Heading">
                    <h1>Projects</h1>
                </div>
                <p>things i work on in past and present :)</p>
            </div>
            <div className="Middle">

            </div>
            <Footer />
        </div>
    );
};
 
export default Projects;