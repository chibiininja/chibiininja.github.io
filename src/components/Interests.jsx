import React from "react";
import NavBar from "./NavBar";

import darrensingchorale from "../data/images/singing/darrensinginglachorale.avif"
import darrensingsupertonic from "../data/images/singing/darrensingsupertonic.jpg"

import darrenguitar from "../data/images/darrenguitar.jpg"

import "./_Default.css";
import Footer from "./Footer";
import { HashLink } from "react-router-hash-link";
import Slideshow from "./Slideshow";

const Interests = () => {
    const gameslides = [
        
    ];
    const singingslides = [
        <img src={darrensingchorale} className="image" alt="darrensingchorale" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={darrensingsupertonic} className="image" alt="darrensingsupertonic" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
    ];

    return (
        <div className="Default">
            <div className="Upper">
                <div id="header" />
                <NavBar />
                <div className="Heading">
                    <h1>Darren Inouye</h1>
                    <h6>Interests</h6>
                </div>
                <p>hobbies, passions, and current learnings!</p>
            </div>
            <div className="Middle">
                <div className="Sidebar">
                    <ol>
                        <li>
                            <HashLink to="/interests/#header">Site Navigation</HashLink>
                        </li>
                        <li>
                            <HashLink to="/interests/#creation">Creation</HashLink>
                        </li>
                        <ul>
                            <HashLink to="/interests/#pixelart">Pixel Art</HashLink>
                        </ul>
                        <ul>
                            <HashLink to="/interests/#3dmodeling">3D Modeling</HashLink>
                        </ul>
                        <li>
                            <HashLink to="/interests/#games">Games</HashLink>
                        </li>
                        <li>
                            <HashLink to="/interests/#music">Music</HashLink>
                        </li>
                        <li>
                            <HashLink to="/interests/#singing">Singing</HashLink>
                        </li>
                        <li>
                            <HashLink to="/interests/#guitar">Guitar</HashLink>
                        </li>
                    </ol>
                </div>
                <div className="Content">
                    <br />
                    <br />
                    <div id="creation"></div>
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h3 style={{ fontSize: "48px", textAlign: "center" }}>Creation</h3>
                        <div className="line" />
                        <br />
                        <div id="pixelart"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>
                            Pixel Art</h3>
                        <p>
                        I do pixel art for some of my projects, but I also just like creating pixel art of works 
                        that I find inspirational and awesome. My consistency is not the best due to work, but
                        when I do feel motivated and in the mood I break out Aseprite and go ham.
                        </p>
                        <br />

                        <div className="line" />
                        <div id="3dmodeling"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>
                            3D Modeling</h3>
                        <p>
                        Because of the personal game I am currently working on, I have done a LOT of low-
                        poly 3D modeling. While the process is sometimes pretty time consuming, I enjoy
                        seeing the finished product and am happy to just create. Hoping the finished product
                        will be something I'm proud of!
                        </p>
                    </div>
                    <br />
                    <br />
                    <div id="games"></div>
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h3 style={{ fontSize: "48px", textAlign: "center" }}>Games</h3>
                        <div className="line" />
                        <br />
                        <p>
                        I have grown up with video games since I was a smol child playing on the couch with 
                        a GameBoy in hand. Since then, my Steam library has grown to uncontrollable 
                        proportions.
                        <br /><br />
                        I have a bad habit of picking up games that I find fun, playing them for a good
                        chunk of time and then never finishing them. However, even though I don't finish 
                        them, they hold special places in my heart because they influence my taste in the way
                        I play and create games of my own! (I swear I'll get back to them one day)
                        </p>
                    </div>
                    <br />
                    <br />
                    <div id="music"></div>
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h3 style={{ fontSize: "48px", textAlign: "center" }}>Music</h3>
                        <div className="line" />
                        <br />
                        <p>
                        My taste in music has evolved drastically since middle school (yikes :/); I would say my 
                        current taste is mostly indie pop with an assortment of rhythm-game soundtracks, 
                        jpop, and game OSTs. (I don't actually have a good grasp of what sub-genres my liked 
                        songs are, so I'm just taking a guess)
                        </p>
                    </div>
                    <br />
                    <br />
                    <div id="singing"></div>
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h3 style={{ fontSize: "48px", textAlign: "center" }}>Singing</h3>
                        <div className="line" />
                        <br />
                        <Slideshow slides={singingslides} manual={false} seconds={5}/>
                        <p>
                        I began singing in choirs and a capella groups starting my freshman year of high 
                        school. It's a healthy hobby to have and one where I have made countless life-long 
                        friends and learned many lessons (It's also how I retain my ability to read sheet music). 
                        Even after graduating college, I sing at my university's choir and enjoy every moment 
                        of it.
                        </p>
                    </div>
                    <br />
                    <br />
                    <div id="guitar"></div>
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h3 style={{ fontSize: "48px", textAlign: "center" }}>Guitar</h3>
                        <div className="line" />
                        <br />
                        <img src={darrenguitar} className="image" alt="darrenguitar" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
                        <p>
                        I picked up the guitar around the middle of high school after playing around with the 
                        ukelele. Something about plucking strings and strumming familiar chords makes me 
                        feel comfortable. It also helps that I like to play acoustic songs I hear on Spotify from 
                        my favorite artists :) 
                        <br /><br />
                        I've been pretty busy recently, so I don't play as often as I used to (my calluses have 
                        gone away). However, if I get the urge I crack it out and strum some fun tunes. 
                        <br /><br />
                        There are some performances of mine where I sing and play guitar floating around 
                        somewhere on the internet, so go find them or something idk ¯\_(ツ)_/¯
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

/*
Games:
    The Binding of Issac
    Borderlands
    Can of Wormholes
    Chants of Sennaar
    Chicory: A Colorful Tale
    Crypt of the NecroDancer
    Cult of the Lamb
    Dave the Diver
    Dead Cells
    Death's Door
    Deep Rock Galactic
    Dicey Dungeons
    Digimon
    Don't Starve
    Dragon Quest
    Dredge
    Dungeon Munchies
    Dungreed
    Enter the Gungeon
    Evoland
    FEZ
    Gunfire Reborn
    Hades
    Hi-Fi Rush
    Hyper Light Drifter
    It Takes Two
    Jusant
    Kingsway
    Knuckle Sandwich
    Lethal Company
    Little Witch in the Woods
    Loop Hero
    Luck be a Landlord
    Minit
    Monster Hunter
    Monster Sanctuary
    Moonring
    Ni No Kuni
    Nobody Saves the World
    Nuclear Throne
    Omori
    Ori
    Outer Wilds
    Overcooked
    Pacific Drive
    PlateUp!
    Portal
    Potion Craft
    Rabbit & Steel
    Raft
    Remnant
    Revita
    Rhythm Doctor
    Risk of Rain
    Roboquest
    Rusty's Retirement
    Sanctuary RPG: Black Edition
    Shadows over Loathing
    Skul: The Hero Slayer
    Slasher's Keep
    Slay the Spire
    Spaceman Sparkles 2
    Springblades
    Stacklands
    Starbound
    Stardew Valley
    SteamWorld Dig 2
    Stone Shard
    Super Meat Boy
    Taiji
    Teardown
    Terraria
    (the) Gnorp Apologue
    Tiny Rogues
    Tunic
    UnderMine
    Undertale
    While True: Learn()
    Wildfrost
    The Witness

    Celeste
    A Short Hike
    Pikuniku
    Underhero
    Hidden Folks
    MidBoss

    Osu
    Cytus
    Arcaea
    Lanota
    Deemo

    Cave Story
    Kirby
    Mario & Luigi
    Mario
    Paper Mario
    Animal Crossing
    Pokemon
    Pokemon Mystery Dungeon
    Pokemon Ranger
    The Legend of Zelda
    Earthbound / Mother
    The Legendary Starfy
*/

export default Interests;