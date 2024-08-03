import React, {useState} from "react";
import useSound from "use-sound";

import NavBar from "./NavBar";

import gradpic from '../data/images/gradpic.jpg';
import gdcpic from '../data/images/gdcpic.jpg';
import saundercarrypic from '../data/images/saundercarrypic.jpg';
import dragonpic from '../data/images/dragonpic.jpg';
import psyduckstarepic from '../data/images/psyduckstarepic.jpg';
import darrencrabpic from '../data/images/darrencrabpic.jpg';
import funnyduck from '../data/images/funnyduckpfp.gif';

import quack1SFX from '../data/sounds/quack1.mp3';
import quack2SFX from '../data/sounds/quack2.mp3';
import quack3SFX from '../data/sounds/quack3.mp3';
import quack4SFX from '../data/sounds/quack4.mp3';
 
import "./_Default.css";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import { HashLink } from "react-router-hash-link";

const Home = () => {
    const descriptions = [
        <p>"go make games!" -thor</p>,
        <a href="https://crouton.net">click me for a crouton</a>,
        <p>did you drink enough water today?</p>,
        <p>have a nice day :)</p>
    ];

    const [index, setIndex] = useState(getRandomInt(descriptions.length));
    const [counterclockwise, setCounterclockwise] = useState(true);
    const [interact, setInteract] = useState("ScaleUp 1 .2s linear forwards");

    const slides1 = [
        <img src={gradpic} className="image" alt="gradpic" style={{ borderRadius: "5px", maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={gdcpic} className="image" alt="gdcpic" style={{ borderRadius: "5px", maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={saundercarrypic} className="image" alt="saundercarrypic" style={{ borderRadius: "5px", maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={dragonpic} className="image" alt="dragonpic" style={{ borderRadius: "5px", maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={psyduckstarepic} className="image" alt="psyduckstarepic" style={{ borderRadius: "5px", maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={darrencrabpic} className="image" alt="darrencrabpic" style={{ borderRadius: "5px", maxWidth: "100%", height: "40vmin", display: "block" }}/>
    ];

    const rotateStyle = {
        borderRadius: "50%",
        animation: counterclockwise ? "Rotate-counterclock infinite 5s linear"
        : "Rotate-clock infinite 5s linear"
    }

    const scaleStyle = {
        display: "inline-block",
        pointerEvents: "none",
        textAlign: "center",
        animation: interact
    }

    const [playQuack1] = useSound(quack1SFX);
    const [playQuack2] = useSound(quack2SFX);
    const [playQuack3] = useSound(quack3SFX);
    const [playQuack4] = useSound(quack4SFX);

    const quacksounds = [
        playQuack1,
        playQuack2,
        playQuack3,
        playQuack4
    ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function handleClick() {
        setIndex((index + 1) % descriptions.length);
    }

    function duckMouseEnter() {
        setInteract("ScaleDown 1 .2s linear forwards");
    }

    function duckMouseLeave() {
        setInteract("ScaleUp 1 .2s linear forwards");
    }

    function duckMouseDown() {
        setInteract("ScaleDownClick 1 .2s linear forwards");
    }

    function duckMouseUp() {
        setInteract("ScaleUpClick 1 .2s linear forwards");
        setCounterclockwise(!counterclockwise);
        quacksounds[getRandomInt(quacksounds.length)]();
    }

    return (
        <div className="Default">
            <div className="Upper">
                <div id="header" />
                <NavBar />
                <div className="Heading">
                    <h1>Darren Inouye</h1>
                    <h6 onClick={handleClick}>Game Dev/Programmer</h6>
                </div>
                {descriptions[index]}
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
 
export default Home;