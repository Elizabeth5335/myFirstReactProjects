import React from "react"
import me from "../images/me.jpg"
import email from "../images/email.png"


export default function Info(){
    return(
    <div className="info">
        <img className="main-img" src={me} alt="me" />
        <h1>Yelyzaveta Lazarieva</h1>
        <h3>Frontend developer</h3>
        <a href="http://yelyzavetalazarieva.space/">yelyzavetalazarieva.space</a>
        <a className="info-btn" href="mailto:lazareva15elizaveta@gmail.com">
            <img src={email} />Email</a>
    </div>)
}