import React from "react";
import NavBar from "./NavBar";

import sleepdeprivedpic from "../data/images/sleepdeprivedimg.png";

import "./_Default.css";
import Footer from "./Footer";
import Slideshow from "./Slideshow";

const Projects = () => {
    const slides1 = [
        <img src={sleepdeprivedpic} className="image" alt="sleepdeprivedimage" style={{ width: "100%", display: "block" }}/>,
        <iframe id="sleepdep" src="https://www.youtube.com/embed/RA7vakkuBxw?si=rDj41g5QUbTyyb81?autoplay=1&mute=1&enablejsapi=1" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    ];

    return (
        <div className="Default">
            <div className="Upper">
                <NavBar />
                <div className="Heading">
                    <h1>Darren Inouye</h1>
                    <h6>Projects</h6>
                </div>
                <p>things i work on in past and present :)</p>
            </div>
            <div className="Middle">
                <div className="Sidebar">
                    <ol>
                        <li>
                            <a href="#projects/#header">Site Navigation</a>
                        </li>
                        <li>
                            <a href="#projects/#sleepdeprived">Sleep Deprived - VR Class Project</a>
                        </li>
                    </ol>
                </div>
                <div className="Content">
                    <div id="sleepdeprived"></div>
                    <br />
                    <br />
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h2 style={{ fontSize: "40px", textAlign: "center" }}>Sleep Deprived<br />A VR Design Game/Experience</h2>
                        <div className="line" />
                        <br />
                        <Slideshow slides={slides1}/>
                        <p>
                        A VR Unity game about the importance of work-life balance and getting sleep. <br />
                        Role: Solo Game Developer <br />
                        - Implemented event flag system and branching dialogue <br />
                        - Imported, edited, and re-textured 3D models in Unity and Blender <br />
                        - Created 3D model using photogrammetry
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
 
export default Projects;