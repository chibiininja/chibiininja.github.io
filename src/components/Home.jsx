import React from "react";
import NavBar from "./NavBar";
 
import "./_Default.css";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="Default">
            <div className="Upper">
                <NavBar />
                <div className="Heading" id="header">
                    <h1>Darren Inouye</h1>
                    <h6>Aspiring Game Dev/Programmer</h6>
                </div>
                <p>go make games! -thor</p>
            </div>
            <div className="Middle">
                <div className="Sidebar">
                    <ol>
                        <li>
                            <a href="#header">Site Navigation</a>
                        </li>
                        <li>
                            <a href="#about">Who am I?</a>
                        </li>
                    </ol>
                </div>
                <div className="Content">

                </div>
            </div>
            <Footer />
        </div>
    );
};
 
export default Home;