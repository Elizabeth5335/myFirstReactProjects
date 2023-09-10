import React from "react"

export default function MainPage (props) {

  return(
    <div className="main-page">
        <h1 className="main-text">Quizzical</h1>
        <span className="main-description">Give answers to all questions!</span>
        <button className="myBtn" onClick={props.toggleStarted}>Start game</button>
    </div>
  )
}