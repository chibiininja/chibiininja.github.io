import React from "react";
import NavBar from "./NavBar";
 
import "./_Default.css";
import Footer from "./Footer";

const Interests = () => {
    return (
        <div className="Default">
            <div className="Upper">
                <NavBar />
                <div className="Heading">
                    <h1>Interests</h1>
                </div>
                <p>hobbies, passions, and current learnings!</p>
            </div>
            <div className="Middle">

            </div>
            <Footer />
        </div>
    );
};
 
export default Interests;