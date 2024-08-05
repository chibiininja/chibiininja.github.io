import React from "react";
import NavBar from "./NavBar";

import caveofumbrapic from "../data/images/caveofumbra/caveofumbra.png";
import caveofumbragif from "../data/images/caveofumbra/cavesofumbraintro.gif";
import polaristitlepic from "../data/images/polaris/polaristitle.png";
import polarisbenchpic from "../data/images/polaris/polarisbench.png";
import polarisgif from "../data/images/polaris/polaris.gif";
import sleepdeprivedpic from "../data/images/sleepdeprived/sleepdeprivedimg.png";

import "./_Default.css";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import { HashLink } from "react-router-hash-link";

const Projects = () => {
    const caveofumbraslides = [
        <img src={caveofumbrapic} className="image" alt="caveofumbraimage" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={caveofumbragif} className="image" alt="caveofumbragif" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
    ];
    const polarisslides = [
        <img src={polaristitlepic} className="image" alt="polaristitleimage" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={polarisbenchpic} className="image" alt="polarisbenchimage" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={polarisgif} className="image" alt="polarisgameplayimage" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
    ];
    const sleepslides = [
        <img src={sleepdeprivedpic} className="image" alt="sleepdeprivedimage" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <iframe id="sleepdep" src="https://www.youtube.com/embed/RA7vakkuBxw?si=rDj41g5QUbTyyb81?autoplay=1&mute=1&enablejsapi=1" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ maxWidth: "100%", height: "40vmin" }}></iframe>
    ];

    return (
        <div className="Default">
            <div className="Upper">
                <div id="header"/>
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
                            <HashLink to="/projects/#header">Site Navigation</HashLink>
                        </li>
                        <li>
                            <HashLink to="/projects/#greenhouse">Greenhouse Game Dev</HashLink>
                        </li>
                        <ul>
                            <HashLink to="/projects/#caveofumbra">Cave of Umbra</HashLink>
                        </ul>
                        <ul>
                            <HashLink to="/projects/#polaris">Polaris</HashLink>
                        </ul>
                        <li>
                            <HashLink to="/projects/#classprojects">Class Projects</HashLink>
                        </li>
                        <ul>
                            <HashLink to="/projects/#sleepdeprived">Sleep Deprived</HashLink>
                        </ul>
                    </ol>
                </div>
                <div className="Content">
                    <br />
                    <br />
                    <div className="Textbox" style={{ width: "40%" }}>
                        <div id="greenhouse"></div>
                        <h3 style={{ fontSize: "48px", textAlign: "center" }}>Greenhouse<br />Game Development Team</h3>

                        <div className="line" />
                        <div id="caveofumbra"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>Cave of Umbra<br />2D Platformer</h3>
                        <Slideshow slides={caveofumbraslides} manual={true}/>
                        <p>
                        A 2D Platformer with a twist: every time you jump, the platforms switch! <br />
                        Role: Lead Gameplay Programmer <br /><br />
                        - Implemented Shaders for transparent platforms <br />
                        - Created moving platforms and dimension switch mechanic
                        </p>
                        <br />

                        <div className="line" />
                        <div id="polaris"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>Polaris<br />2D Platformer</h3>
                        <Slideshow slides={polarisslides} manual={true}/>
                        <p>
                        A 2D Unity game that empowers individuals to make positive changes toward ocean pollution. <br />
                        Role: Gameplay Programmer <br /><br />
                        - Created intro and ending cutscenes using Unity UI <br />
                        - Utilized Unity's Animator and Timeline functions to integrate cutscenes and dialogue together <br />
                        - Worked with a team of ~15 in an agile setting with goals each week to complete
                        </p>
                    </div>
                    <br />
                    <br />
                    <div className="Textbox" style={{ width: "40%" }}>
                        <div id="classprojects"></div>
                        <h3 style={{ fontSize: "48px", textAlign: "center" }}>Class Projects</h3>
                        <div className="line" />
                        <div id="sleepdeprived"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>Sleep Deprived<br />A VR Game/Experience</h3>
                        <Slideshow slides={sleepslides} manual={true}/>
                        <p>
                        A VR Unity game about the importance of work-life balance and getting sleep. <br />
                        Role: Solo Game Developer <br /><br />
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