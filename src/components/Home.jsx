import React, {useState} from "react";
import NavBar from "./NavBar";
import gradpic from '../data/gradpic.jpg';
import funnyduck from '../data/funnyduckpfp.gif';
 
import "./_Default.css";
import Footer from "./Footer";

const Home = () => {
    const descriptions = [
        <p>"go make games!" -thor</p>,
        <a href="https://crouton.net">click me for a crouton</a>,
        <p>did you drink enough water today?</p>,
        <p>have a nice day :)</p>
    ];

    const [index, setIndex] = useState(getRandomInt(descriptions.length));

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function handleClick() {
        setIndex((index + 1) % descriptions.length);
    }

    return (
        <div className="Default">
            <div className="Upper">
                <NavBar />
                <div className="Heading" id="header">
                    <h1>Darren Inouye</h1>
                    <h6 onClick={handleClick}>Aspiring Game Dev/Programmer</h6>
                </div>
                {descriptions[index]}
            </div>
            <div className="Middle">
                <div className="Sidebar">
                    <ol>
                        <li>
                            <a href="#header">Site Navigation</a>
                        </li>
                        <li>
                            <a href="#about">About Me</a>
                        </li>
                    </ol>
                </div>
                <div className="Content">
                    <div id="about"></div>
                    <br />
                    <br />
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h2 style={{ fontSize: "40px", textAlign: "center" }}>About Me</h2>
                        <img src={gradpic} className="image" style={{ borderRadius: "5px" }}/>
                        <p>
                            My name is Darren Inouye. I graduated from Santa Clara University with a B.S. in 
                            Computer Science and Engineering in 2024 and have been developing games since 
                            2022. I have participated in multiple game jams and have worked on many different 
                            games with friends at my university's VR lab. I'm a programmer, game developer, and 
                            lover of goofy things and fun times!
                        </p>
                        <img src={funnyduck} className="App-logo" alt="logo" style={{  borderRadius: "50%" }}/>
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
 
export default Home;