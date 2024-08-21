import React from "react";
import NavBar from "./NavBar";
 
import "./_Default.css";
import Footer from "./Footer";

const Interests = () => {
    return (
        <div className="Default">
            <div className="Upper">
                <div id="header" />
                <NavBar />
                <div className="Heading">
                    <h1>Interests</h1>
                </div>
                <p>hobbies, passions, and current learnings!</p>
            </div>
            <div className="Middle">
                <div className="Sidebar">
                    <ol>
                        <li>
                            <HashLink to="/#header">Site Navigation</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#about">About Me</HashLink>
                        </li>
                    </ol>
                </div>
                <div className="Content">
                    <div id="about"></div>
                    <br />
                    <br />
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h2 style={{ fontSize: "40px", textAlign: "center" }}>About Me</h2>
                        <div className="line" />
                        <br />
                        <Slideshow slides={slides1} manual={false} seconds={10}/>
                        <p>
                            My name is Darren Inouye. I graduated from Santa Clara University with a B.S. in 
                            Computer Science and Engineering in 2024 and have been developing games since 
                            2022. I have participated in multiple game jams and have worked on many different 
                            games with friends at my university's VR lab. I'm a programmer, game developer, and 
                            lover of goofy things and fun times!
                        </p>
                        <div style={scaleStyle}>
                            <img src={funnyduck} className="Rotate" alt="funnyduck" 
                            onMouseEnter={duckMouseEnter} onMouseLeave={duckMouseLeave} onMouseDown={duckMouseDown} onMouseUp={duckMouseUp}
                            style={rotateStyle}/>
                        </div>
                        <a href="https://www.youtube.com/watch?v=HlYTls-UbUs&ab_channel=LouieZong" 
                        style={{ color: "#444444", textDecoration: "none", fontSize: "14px", display: "block", textAlign: "center" }}>
                            funny duck from louie zong's funky animals theme song
                        </a>
                        <p>
                            Feel free to explore my pages and learn more about my work and interests.
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
 
export default Interests;