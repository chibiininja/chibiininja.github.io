import React, {useState} from "react";
import useSound from "use-sound";

import NavBar from "./NavBar";

import gradpic from '../data/images/gradpic.jpg';
import funnyduck from '../data/images/funnyduckpfp.gif';
import quack1SFX from '../data/sounds/quack1.mp3';
import quack2SFX from '../data/sounds/quack2.mp3';
import quack3SFX from '../data/sounds/quack3.mp3';
import quack4SFX from '../data/sounds/quack4.mp3';
 
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
    const [counterclockwise, setCounterclockwise] = useState(true);
    const [interact, setInteract] = useState({animation: "Scale 1 .2s alternate"});

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
    function handleClickImage() {
        setCounterclockwise(!counterclockwise);
        setInteract({animation: "Scale initial .2s alternate"});
        quacksounds[getRandomInt(quacksounds.length)]();
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
                        <img src={gradpic} className="image" alt="gradpic" style={{ borderRadius: "5px" }}/>
                        <p>
                            My name is Darren Inouye. I graduated from Santa Clara University with a B.S. in 
                            Computer Science and Engineering in 2024 and have been developing games since 
                            2022. I have participated in multiple game jams and have worked on many different 
                            games with friends at my university's VR lab. I'm a programmer, game developer, and 
                            lover of goofy things and fun times!
                        </p>
                        <img src={funnyduck} className="Rotate" alt="funnyduck" onClick={handleClickImage} 
                        style={
                            counterclockwise ? { borderRadius: "50%", animation: "Rotate-counterclock infinite 5s linear, Scale1 1 .2s alternate" }
                            : { borderRadius: "50%", animation: "Rotate-clock infinite 5s linear, Scale2 1 .2s alternate" }
                        }/>
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