import React from "react";
import NavBar from "./NavBar";

import "./_Default.css";
import Footer from "./Footer";

const Recommendations = () => {
    return (
        <div className="Default">
            <div className="Upper">
                <NavBar />
                <div className="Heading">
                    <h1>Recommendations</h1>
                </div>
                <p>resources, inspriations, and cool people :D</p>
            </div>
            <div className="Middle">

            </div>
            <Footer />
        </div>
    );
};
 
export default Recommendations;