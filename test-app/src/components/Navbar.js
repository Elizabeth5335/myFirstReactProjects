import React from "react";
import navImg from "../images/favicon.ico"

export default function Navbar(){
    return(
        <div className="navbar">
            <div>
                <img className="nav-image" src={navImg} />
                <h1>ReactFacts</h1>
            </div>
            <h3>React Course - Project 1</h3>
        </div>
    )
}