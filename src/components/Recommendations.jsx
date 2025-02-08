import React from "react";
import NavBar from "./NavBar";

import "./_Default.css";
import Footer from "./Footer";
import { HashLink } from "react-router-hash-link";

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
                <div className="Sidebar">
                    <ol>
                        <li>
                            <HashLink to="/#header">Site Navigation</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#inprogress">IN PROGRESS</HashLink>
                        </li>
                    </ol>
                </div>
                <div className="Content">
                    <div id="inprogress"></div>
                    <br />
                    <br />
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h2 style={{ fontSize: "40px", textAlign: "center" }}>IN PROGRESS</h2>
                        <div className="line" />
                        <br />
                        <p>
                            i gotta think real hard about cool stuff i find online, so come back later :)
                        </p>
                        <p>
                            Feel free to explore my other pages and learn more about my work and interests.
                        </p>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
            <Footer />
        </div>
    );
};
 
export default Recommendations;