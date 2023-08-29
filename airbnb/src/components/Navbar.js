import React from "react"
import airbnbLogo from "../images/airbnb 1.png"

export default function Navbar(){
  return(
    <nav className="navbar"> 
        <img src={airbnbLogo} alt="AirBnb Logo" />
    </nav>
  )
}