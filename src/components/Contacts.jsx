import React from "react";
import NavBar from "./NavBar";

import dog from "../data/images/dog.jpg";

import "./_Default.css";
import Footer from "./Footer";
import { HashLink } from "react-router-hash-link";

const Contacts = () => {
    return (
        <div className="Default">
            <div className="Upper">
                <NavBar />
                <div className="Heading">
                    <h1>Darren Inouye</h1>
                    <h6>Contacts</h6>
                </div>
                <p>if you wanna talk about work or cool stuff</p>
            </div>
            <div className="Middle">
                <div className="Sidebar">
                    <ol>
                        <li>
                            <HashLink to="/#header">Site Navigation</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#contacts">Contacts</HashLink>
                        </li>
                    </ol>
                </div>
                <div className="Content">
                    <div id="contacts"></div>
                    <br />
                    <br />
                    <div className="Textbox" style={{ width: "40%" }}>
                        <img src={dog} className="image" alt="dog" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
                        <p style={{ color: "#444444", textDecoration: "none", fontSize: "14px", display: "block", textAlign: "center" }}>
                            my dog chibi!!!
                        </p>
                        <p style={{textAlign: "center"}}>
                            <b>Wanna work on something together?</b>
                        </p>
                        <p style={{textAlign: "center"}}>
                            <b>Have questions?</b>
                        </p>
                        <p style={{textAlign: "center"}}>
                            <b>Talk about cool stuff together?</b>
                        </p>
                        <br />
                        <p>
                            If you need to contact me for any reason, try these:
                        </p>
                        <p>
                            - Email: darrensinouye@gmail.com<br />
                            - Discord: chibiininja<br />
                            - Bluesky: chibiininja.itch.io<br />
                            - <a href="https://www.linkedin.com/in/darren-inouye/">LinkedIn</a>
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
 
export default Contacts;