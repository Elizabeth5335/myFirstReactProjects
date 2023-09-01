import React from "react"

export default function Square(props){
    const styles = {
        backgroundColor: props.selected ? "#59E391" : "#FFFFFF"
    };

    const generateDiceDots = () => {
        const diceArray = [];
        for (let i = 0; i < props.value; i++) {
            diceArray.push(<span className="dot" key={i}></span>)
        }
        return diceArray;
    };

    return (
        <div className="square" style={styles} onClick={() => props.toggleClick(props.id)}>
            {generateDiceDots()}
        </div>
    );
}
