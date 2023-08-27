import React from "react"
import facebook from "../images/Facebook.png"
import github from "../images/GitHub.png"
import instagram from "../images/Instagram.png"
import linkedin from "../images/Linkedin.png"

export default function Footer(){
    return(
    <div class="footer">
        <a href="https://github.com/Elizabeth5335">
            <img src={github} alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/yelyzaveta-lazarieva-876047235/">
            <img src={linkedin} alt="linkedin"/>
        </a>
        <a href="https://www.instagram.com/eli_che_va/?igshid=YmMyMTA2M2Y%3D">
            <img src={instagram} alt="instagram"/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100046831201474">
            <img src={facebook} alt="facebook"/>
        </a>
        
    </div>
    )
}