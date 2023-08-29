import React from "react"
import star from "../images/Star.png"
// import sports from "../images/sports.png"



export default function Card(props){
    console.log(props);
    let badgeText;
    if(props.openSpots===0){
        badgeText = "SOLD OUT";
    } else if(props.location === "Online"){
        badgeText = "ONLINE";
    }
  return(
    <div className="card"> 
        <img className="card-image" src={require(`../images/${props.coverImg}`)} alt="sports" />
        {badgeText && <div className="soldOut">{badgeText}</div>}
        <div className="card-stats"> 
            <img className="card-star" src={star} alt="star"/>  
            <span>{props.stats.rating}</span>  
            <span className="gray">({props.stats.reviewCount}) • </span>  
            <span className="gray"> {props.location}</span>  
        </div>
        <p className="card-title">{props.title}</p>
        <p className="card-price"><b>From ${props.price}</b> / person</p>
    </div>
  )
}