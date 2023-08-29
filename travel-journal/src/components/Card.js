import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <img className="card-image" src={props.item.image} />
            <div className="card-body">
                <div className="card-details">
                    <img className="map-point" src="/images/point.png" />
                    <h3 className="card-country">{props.item.country}</h3>
                    <a className="gray" href={props.item.link}>View on Google Maps</a>
                </div>
                <h1>{props.item.name}</h1>
                <b>{props.item.startDate} - {props.item.endDate}</b>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}