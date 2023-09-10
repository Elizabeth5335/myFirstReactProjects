import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import imgBlue from "./images/spot-blue.png"
import imgYellow from "./images/spot-yellow.png"

ReactDOM.render(
  <div>
    <div className="corner-image top">
        <img src={imgYellow}  alt="" />
    </div>
    <div className="corner-image bottom">
        <img src={imgBlue} alt="" />
    </div>

    <App/>
  </div>, document.getElementById("root")
)