import React from "react";
import NavBar from "./NavBar";
 
import "./_Default.css";

const Home = () => {
    return (
        <div className="Default">
            <div className="Upper">
                <NavBar />
                <h1>Home Page</h1>
            </div>
        </div>
    );
};
 
export default Home;