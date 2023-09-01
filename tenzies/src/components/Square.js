import React from "react"

export default function Square(props){

    const styles={
        backgroundColor: props.selected ? "#59E391" : "#FFFFFF"
    }

    return(
        <div className="square" style={styles} onClick={()=>props.toggleClick(props.id)} >
            <h2 className="square-num">{props.value}</h2>
        </div>
    )
}