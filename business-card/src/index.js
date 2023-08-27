import React from "react"
import ReactDOM from "react-dom"
import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

import "./style.css"

ReactDOM.render(
    <div className="main">
        <div className="content">
            <Info />
            <About />
            <Interests />
            <Footer />

        </div>
    </div>,
    document.getElementById('root')
)