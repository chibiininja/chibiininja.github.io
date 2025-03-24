import React from "react";
import NavBar from "./NavBar";

import linguavitaelooking from "../data/images/linguavitae/linguavitaelooking.gif";
import linguavitaedialogue from "../data/images/linguavitae/linguavitaedialogue.gif";
import linguavitaesign from "../data/images/linguavitae/linguavitaesign.gif";
import linguavitaedialoguesystemx from "../data/images/linguavitae/linguavitaedialoguesystemx.gif";

import golfypic from "../data/images/golfy/golfyicon.ico"
import golfygolfing from "../data/images/golfy/golfing.gif"
import golfymovement from "../data/images/golfy/movement.gif"
import golfyferris from "../data/images/golfy/ferris_wheel.gif"

import wheelevatorpic from "../data/images/wheelevator/wheelevator.png"

import barrelbreakthroughsquadpic from "../data/images/barrelbreakthroughsquad/barrelbreakthroughsquadcover.png";
import barrelbreakthroughsquadscreeny1 from "../data/images/barrelbreakthroughsquad/barrelbreakthroughsquadscreeny1.gif";
import barrelbreakthroughsquadscreeny2 from "../data/images/barrelbreakthroughsquad/barrelbreakthroughsquadscreeny2.gif";
import barrelbreakthroughsquadscreeny3 from "../data/images/barrelbreakthroughsquad/barrelbreakthroughsquadscreeny3.gif";

import corporateclimberpic from "../data/images/corporateclimber/corporateclimber.png";
import corporateclimberview from "../data/images/corporateclimber/corporateclimberview.gif";
import corporateclimberclimb from "../data/images/corporateclimber/corporateclimberclimb.gif";
import corporateclimberkick from "../data/images/corporateclimber/corporateclimberkick.gif";

import shadowapprenticepic from "../data/images/shadowapprentice/shadowapprentice.png";
import shadowapprenticeintro from "../data/images/shadowapprentice/shadowapprenticeintro.gif";
import shadowapprenticegather from "../data/images/shadowapprentice/shadowapprenticegather.gif";
import shadowapprenticeinteraction from "../data/images/shadowapprentice/shadowapprenticeinteraction.gif";
import shadowapprenticedialogue from "../data/images/shadowapprentice/shadowapprenticedialogue.gif";

import aberratepic from "../data/images/aberrate/aberrate.png";
import aberrateintro from "../data/images/aberrate/aberrateintro.gif";
import aberrategameplay from "../data/images/aberrate/aberrategameplay.gif";

import doorsofopportunitypic from "../data/images/doorsofopportunity/doorsofopportunity.png";
import doorsofopportunityintro from "../data/images/doorsofopportunity/doorsofopportunityintro.gif";
import doorsofopportunitygameplay from "../data/images/doorsofopportunity/doorsofopportunitygameplay.gif";

import scubaguy from "../data/images/submersion/scubaguy.png";
import submersionintro from "../data/images/submersion/submersionintro.gif";
import submersionquicktime from "../data/images/submersion/submersionquicktime.gif";

import bowlinghelltitle from "../data/images/bowlinghell/bowlinghelltitle.png";
import bowlinghellgameplaygif from "../data/images/bowlinghell/bowlinghellgameplay.gif";
import bowlinghellendgif from "../data/images/bowlinghell/bowlinghellend.gif";

import siniganggif from "../data/images/sinigang/sinigang.gif";
import sinigangslicegif from "../data/images/sinigang/sinigangslice.gif"

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
    const linguavitaeslides = [
        <img src={linguavitaelooking} className="image" alt="linguavitaelooking" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={linguavitaedialogue} className="image" alt="linguavitaedialogue" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={linguavitaesign} className="image" alt="linguavitaesign" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={linguavitaedialoguesystemx} className="image" alt="linguavitaedialoguesystemx" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
    ];
    const golfyslides = [
        <img src={golfypic} className="image" alt="golfypic" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={golfygolfing} className="image" alt="golfygolfing" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={golfymovement} className="image" alt="golfymovement" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={golfyferris} className="image" alt="golfyferris" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
    ];
    const wheelevatorslides = [
        <img src={wheelevatorpic} className="image" alt="wheelevatorimage" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <iframe id="wheelevator" src="https://www.youtube.com/embed/nKYg2_6-VCg?si=RHtVTPaMyyjMPUHo?autoplay=1&mute=1&enablejsapi=1" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ maxWidth: "100%", height: "40vmin" }}></iframe>
    ];
    const barrelbreakthroughsquadslides = [
        <img src={barrelbreakthroughsquadpic} className="image" alt="barrelbreakthroughsquadpic" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={barrelbreakthroughsquadscreeny1} className="image" alt="barrelbreakthroughsquadscreeny1" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={barrelbreakthroughsquadscreeny2} className="image" alt="barrelbreakthroughsquadscreeny2" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={barrelbreakthroughsquadscreeny3} className="image" alt="barrelbreakthroughsquadscreeny3" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
    ];
    const corporateclimberslides = [
        <img src={corporateclimberpic} className="image" alt="corporateclimberpic" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={corporateclimberview} className="image" alt="corporateclimberview" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={corporateclimberclimb} className="image" alt="corporateclimberclimb" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={corporateclimberkick} className="image" alt="corporateclimberkick" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
    ];
    const shadowapprenticeslides = [
        <img src={shadowapprenticepic} className="image" alt="shadowapprenticepic" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={shadowapprenticeintro} className="image" alt="shadowapprenticeintro" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={shadowapprenticegather} className="image" alt="shadowapprenticegather" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={shadowapprenticeinteraction} className="image" alt="shadowapprenticeinteraction" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={shadowapprenticedialogue} className="image" alt="shadowapprenticedialogue" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
    ];
    const aberrateslides = [
        <img src={aberratepic} className="image" alt="aberratepic" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={aberrateintro} className="image" alt="aberrateintro" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={aberrategameplay} className="image" alt="aberrategameplay" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
    ];
    const doorsofopportunityslides = [
        <img src={doorsofopportunitypic} className="image" alt="doorsofopportunitypic" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={doorsofopportunityintro} className="image" alt="doorsofopportunityintro" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={doorsofopportunitygameplay} className="image" alt="doorsofopportunitygameplay" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
    ];
    const submersionslides = [
        <img src={scubaguy} className="image" alt="scubaguy" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={submersionintro} className="image" alt="submersionintro" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={submersionquicktime} className="image" alt="submersionquicktime" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
    ];
    const bowlinghellslides = [
        <img src={bowlinghelltitle} className="image" alt="bowlinghelltitle" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={bowlinghellgameplaygif} className="image" alt="bowlinghellgameplaygif" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={bowlinghellendgif} className="image" alt="bowlinghellendgif" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
    ];
    const sinigangslides = [
        <img src={siniganggif} className="image" alt="siniganggif" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>,
        <img src={sinigangslicegif} className="image" alt="sinigangslicegif" style={{ maxWidth: "100%", height: "40vmin", display: "block" }}/>
    ];
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
                            <HashLink to="/projects/#work">Work</HashLink>
                        </li>
                        <ul>
                            <HashLink to="/projects/#linguavitae">Lingua Vitae</HashLink>
                        </ul>
                        <li>
                            <HashLink to="/projects/#personal">Personal</HashLink>
                        </li>
                        <ul>
                            <HashLink to="/projects/#golfy">Golfy's Adventure</HashLink>
                        </ul>
                        <li>
                            <HashLink to="/projects/#gamejams">Game Jams</HashLink>
                        </li>
                        <ul>
                            <HashLink to="/projects/#wheelevator">Whe[el]evator</HashLink>
                        </ul>
                        <ul>
                            <HashLink to="/projects/#barrelbreakthroughsquad">Barrel Breakthrough Squad</HashLink>
                        </ul>
                        <ul>
                            <HashLink to="/projects/#corporateclimber">Corporate Climber</HashLink>
                        </ul>
                        <ul>
                            <HashLink to="/projects/#shadowapprentice">A Shadow Apprentice</HashLink>
                        </ul>
                        <ul>
                            <HashLink to="/projects/#aberrate">a&#91;BE&#93;rr&#91;AT&#93;e</HashLink>
                        </ul>
                        <ul>
                            <HashLink to="/projects/#doorsofopportunity">Doors of Opportunity</HashLink>
                        </ul>
                        <ul>
                            <HashLink to="/projects/#submersion">Submersion</HashLink>
                        </ul>
                        <ul>
                            <HashLink to="/projects/#bowlinghell">Bowling Hell</HashLink>
                        </ul>
                        <li>
                            <HashLink to="/projects/#greenhouse">Greenhouse Game Dev</HashLink>
                        </li>
                        <ul>
                            <HashLink to="/projects/#sinigang">Sinigang</HashLink>
                        </ul>
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
                    <div id="work"></div>
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h3 style={{ fontSize: "48px", textAlign: "center" }}>Work</h3>
                        <div className="line" />
                        <div id="linguavitae"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>
                            <a href="https://www.scu.edu/imaginarium/research/lingua-vitae/">Lingua Vitae</a><br />
                            VR Language Learning Module</h3>
                        <Slideshow slides={linguavitaeslides} manual={true}/>
                        <p>
                        A VR interactive fiction project that takes place in ancient Rome in which all dialogue is in conversational Latin. <br /><br />
                        Role: Unreal Developer/Programmer <br />
                        Duration: 1 year and 3 months <br />
                        Technologies: Unreal, Audacity <br />
                        Keywords: VR, Dialogue, MetaHumans, Blueprint, Optimization <br /><br />
                        - Implemented dialogue system with conditional branching paths using a 3rd-party plugin and Blueprint code <br />
                        - Developed VR player and widget interactions and implementing animations on NPC characters <br />
                        - Optimized gameplay framerate through hardware testing and 3D model reduction
                        </p>
                    </div>
                    <br />
                    <br />
                    <div id="personal"></div>
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h3 style={{ fontSize: "48px", textAlign: "center" }}>Personal</h3>
                        <div className="line" />
                        <div id="golfy"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>
                            Golfy's Adventure
                        </h3>
                        <Slideshow slides={golfyslides} manual={true}/>
                        <p>
                        A golfball's adventure that slowly becomes less about golfing. <br /><br />
                        Engine: Godot <br />
                        Development Time: October - Current <br />
                        Technologies: Godot, Blender
                        <br /><br />
                        - Creating low-poly 3D assets for 18 different environments using Blender <br />
                        - Designing multiple character controllers and gameplay mechanics for each area <br />
                        - Implemented save and load system
                        </p>
                    </div>
                    <br />
                    <br />
                    <div id="gamejams"></div>
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h3 style={{ fontSize: "48px", textAlign: "center" }}>Game Jams</h3>

                        <div className="line" />
                        <div id="wheelevator"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>
                            <a href="https://chibiininja.itch.io/wheelevator">Whe[el]evator</a><br />
                            <a href="https://itch.io/jam/wheeljam">WHEELJAM 2025</a></h3>
                        <Slideshow slides={wheelevatorslides} manual={true}/>
                        <p>
                        A 3D game about controlling an elevator with a wheel as a controller and things get weird and go wrong...
                        <br /><br />
                        Theme: "Elder Scrolls IV: Oblivion's Persuasion Wheel" <br />
                        Role: Game Developer <br />
                        Duration: 1 week <br />
                        Technologies: Godot, Blender, Audacity <br />
                        Keywords: Level Design, Lighting, Post-Processing, 3D Modeling <br /><br />
                        - 3D modeled wheel controller, elevator, shaft using Blender <br />
                        - Stretched and shrunk music track to make it spooky using Audacity <br />
                        - Implemented NPCs with dialogue, speech noise generation, and tween animations <br />
                        - Added interaction system and object pick-up using raycast <br />
                        - Connected systems together using signals
                        </p>
                        <br />

                        <div className="line" />
                        <div id="barrelbreakthroughsquad"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>
                            <a href="https://chibiininja.itch.io/barrel-breakthrough-squad">Barrel Breakthrough Squad</a><br />
                            <a href="https://itch.io/jam/pirate">Pirate Software - Game Jam 16</a></h3>
                        <Slideshow slides={barrelbreakthroughsquadslides} manual={true}/>
                        <p>
                        A 2D speedrunning platformer about traversing through the barrels of newly manufactured guns. <br />
                        Awarded Honorable Mention!
                        <br /><br />
                        Theme: "You are the Weapon" <br />
                        Role: Game Developer <br />
                        Duration: 2 weeks <br />
                        Technologies: Godot, Aseprite, Audacity, Reaper <br />
                        Keywords: Character Movement, Level Design, Music, Sound Design, Pixel Art <br /><br />
                        - Implemented character controller with variable jump height and dashing <br />
                        - Composed looping music track using Reaper <br />
                        - Created foley and other sound effects using Audacity <br />
                        - Created art and animation assets using Aseprite <br />
                        - Designed level with obstacles, one-way platforms, and flip-flop doors <br />
                        - Created tutorial area to teach player controls <br />
                        - Voiced-over intro cutscene
                        </p>
                        <br />

                        <div className="line" />
                        <div id="corporateclimber"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>
                            <a href="https://chibiininja.itch.io/corporate-climber">Corporate Climber</a><br />
                            <a href="https://itch.io/jam/gmtk-2024">GMTK Game Jam 2024</a></h3>
                        <Slideshow slides={corporateclimberslides} manual={true}/>
                        <p>
                        A ragdoll-physics based platformer about climbing a corporate building and breaking windows. <br /><br />
                        Theme: "Built to Scale" <br />
                        Role: Gameplay Programmer and Developer <br />
                        Duration: 4 days <br />
                        Technologies: Godot, Blender <br />
                        Keywords: Ragdoll, Physics, Joints, Level Design <br /><br />
                        - Created ragdoll character controller using Physical Bone Simulation, Joints, and scripting <br />
                        - Created climbable handholds, moving and sliding bars, ropes, and a launch pad using Joints and Animations <br />
                        - Designed obstacle placement on main building <br />
                        - Created tutorial area to teach player controls and provide context <br />
                        - Fixed normals and merged extra vertices on 3D models using Blender
                        </p>
                        <br />

                        <div className="line" />
                        <div id="shadowapprentice"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>
                            <a href="https://chibiininja.itch.io/a-shadow-apprentice">A Shadow Apprentice</a><br />
                            <a href="https://itch.io/jam/pirate15">Pirate Software - Game Jam 15</a></h3>
                        <Slideshow slides={shadowapprenticeslides} manual={true}/>
                        <p>
                        A point-and-click puzzle game about deciphering alchemical recipes, identifying ingredients, and interacting with customers. <br /><br />
                        Theme: "Shadows" and "Alchemy" <br />
                        Role: Game Developer <br />
                        Duration: 2 weeks <br />
                        Technologies: Unity, LMMS, Aseprite, Audacity <br />
                        Keywords: Inventory, UI, Dialogue, Music, Sound Design <br /><br />
                        - Planned a Game Design Doc for the first week <br />
                        - Created entire game using Unity UI <br />
                        - Implemented dialogue system using linked GameObjects <br />
                        - Implemented audio system to play sound effects, integrated with dialogue <br />
                        - Implemented flag system to track state of game, triggers dialogue <br />
                        - Implemented inventory system to store ingredients <br />
                        - Created custom Property Drawers for Unity Editor UI <br />
                        - Created looping music track and sound effects from my mouth :&#41;
                        </p>
                        <br />

                        <div className="line" />
                        <div id="aberrate"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>
                            <a href="https://chibiininja.itch.io/aberrate">a&#91;BE&#93;rr&#91;AT&#93;e</a><br />
                            <a href="https://itch.io/jam/acerola-jam-0">Acerola Jam 0</a> & <a href="https://itch.io/jam/noartjam">No Art Jam</a></h3>
                        <Slideshow slides={aberrateslides} manual={true}/>
                        <p>
                        A rhythm-based platformer about jumping to the beat. <br /><br />
                        Theme: "Aberration" <br />
                        Role: Solo Game Developer <br />
                        Duration: 2 weeks <br />
                        Technologies: Unity, LMMS <br />
                        Keywords: Post-processing, Shaders, HLSL, Audio Visualization, Portals, Music <br /><br />
                        - Made audio-visualization system that interacts with level environment and post-processing <br />
                        - Implemented dithering, color quantization and correction, palette swapping, and chromatic aberration using HLSL <br />
                        - Created portals for level separation &#40;accurately shows space in real-time!&#41; <br />
                        - Synthesized looping music track with layering instruments
                        </p>
                        <br />

                        <div className="line" />
                        <div id="doorsofopportunity"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>
                            <a href="https://paladindigital.itch.io/doors-of-opportunity">Doors of Opportunity</a><br />
                            <a href="https://itch.io/jam/brackeys-11">Brackeys Game Jam 2024.1</a></h3>
                        <Slideshow slides={doorsofopportunityslides} manual={true}/>
                        <p>
                        A puzzle game based around the 'Lights Out' logic puzzle based on opening doors. <br /><br />
                        Theme: "What's Behind the Door?" <br />
                        Role: Gameplay Programmer <br />
                        Duration: 1 week <br />
                        Technologies: Unity <br />
                        Keywords: Level Building, Puzzle System <br /><br />
                        - Created room structure and puzzle system <br />
                        - Implemented interaction system and door scripts <br />
                        - Added UI elements to teach controls and provide quotes
                        </p>
                        <br />

                        <div className="line" />
                        <div id="submersion"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>
                            <a href="https://chibiininja.itch.io/submersion">Submersion</a><br />
                            <a href="https://itch.io/jam/brackeys-10">Brackeys Game Jam 2023.2</a></h3>
                        <Slideshow slides={submersionslides} manual={true}/>
                        <p>
                        A game about exploring a deep and creepy ocean. <br /><br />
                        Theme: "Diving Deeper" <br />
                        Role: Gameplay Systems Programmer <br />
                        Duration: 1 week <br />
                        Technologies: Unity <br />
                        Keywords: Character Controller, Coroutines, Quaternions, Version Control<br /><br />
                        - Created a character controller system and a quick-time event system utilizing coroutines in C# scripts <br />
                        - Solved version control issue on GitHub due to miscommunicated merge &#40;i caused it and then solved it, oops&#41;
                        </p>
                        <br />

                        <div className="line" />
                        <div id="bowlinghell"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>
                            <a href="https://chibiininja.itch.io/bowling-hell">Bowling Hell</a><br />
                            <a href="https://itch.io/jam/gmtk-2023">GMTK Game Jam 2023</a></h3>
                        <Slideshow slides={bowlinghellslides} manual={true}/>
                        <p>
                        A game about dodging poorly thrown bowling balls. <br /><br />
                        Theme: "Roles Reversed" <br />
                        Role: Gameplay Programmer and 3D Artist <br />
                        Duration: 48 hours <br />
                        Technologies: Unity, Blender <br />
                        Keywords: State Machines, Animation, 3D Modeling, Texturing <br /><br />
                        - Led a 4-person team to develop a game in a short timeframe <br />
                        - Designed AI attack patterns and player movement using animation state machines <br />
                        - Created player and enemy animations in Unity, as well as character models and textures in Blender
                        </p>
                    </div>
                    <br />
                    <br />
                    <div id="greenhouse"></div>
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h3 style={{ fontSize: "48px", textAlign: "center" }}>Greenhouse<br />Game Development Team</h3>

                        <div className="line" />
                        <div id="sinigang"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>Sinigang<br />VR Cooking Game</h3>
                        <Slideshow slides={sinigangslides} manual={true}/>
                        <p>
                        A game about cooking a family recipe at college and reminiscing about home. <br /><br />
                        Role: Lead Gameplay Programmer <br />
                        Duration: 6 months <br />
                        Technologies: Unity, OBS, Google Forms & Sheets <br />
                        Keywords: Filipino, Audio, Dynamic Object Slicing, User Testing <br /><br />
                        - Created audio system for temporary noise and random noise<br />
                        - Implemented and modified dynamic object slicing plugin <br />
                        - Worked with artists, musician, and other programmers in team of 8 <br />
                        - Conducted user testing with a survey and post-testing interview
                        </p>
                        <br />

                        <div className="line" />
                        <div id="caveofumbra"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}><a href="https://greenhouse-gamedev.itch.io/cave-of-umbra">Cave of Umbra</a><br />2D Platformer</h3>
                        <Slideshow slides={caveofumbraslides} manual={true}/>
                        <p>
                        A platformer with a twist: every time you jump, the platforms switch! <br /><br />
                        Role: Lead Gameplay Programmer <br />
                        Duration: 10 weeks <br />
                        Technologies: Unity<br />
                        Keywords: Shaders, Character Movement, Platforms<br /><br />
                        - Implemented shaders for transparent platforms <br />
                        - Created moving platforms and dimension switch mechanic <br />
                        - Researched and modified 3rd-party character controller plugin <br />
                        - Created custom editor and gizmos for moving platforms
                        </p>
                        <br />

                        <div className="line" />
                        <div id="polaris"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}><a href="https://greenhouse-gamedev.itch.io/polaris">Polaris</a><br />2D Platformer</h3>
                        <Slideshow slides={polarisslides} manual={true}/>
                        <p>
                        A game that empowers individuals to make positive changes toward ocean pollution. <br /><br />
                        Role: Gameplay Programmer <br />
                        Duration: 9 months <br />
                        Technologies: Unity, Trello<br />
                        Keywords: UI, Animator, Timeline, Cutscenes, Dialogue<br /><br />
                        - Created intro and ending cutscenes using Unity UI <br />
                        - Utilized Unity's Animator and Timeline functions to integrate cutscenes and dialogue together <br />
                        - Worked with a team of ~15 in an agile setting with goals each week to complete
                        </p>
                    </div>
                    <br />
                    <br />
                    <div id="classprojects"></div>
                    <div className="Textbox" style={{ width: "40%" }}>
                        <h3 style={{ fontSize: "48px", textAlign: "center" }}>Class Projects</h3>
                        <div className="line" />
                        <div id="sleepdeprived"></div>
                        <h3 style={{ fontSize: "36px", textAlign: "center" }}>Sleep Deprived<br />VR Game/Experience</h3>
                        <Slideshow slides={sleepslides} manual={true}/>
                        <p>
                        A game about the importance of work-life balance and getting sleep. <br /><br />
                        Role: Solo Game Developer <br />
                        Duration: ~5 weeks <br />
                        Technologies: Unity, Blender<br />
                        Keywords: VR, Photogrammetry, Animation, Dialogue<br /><br />
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