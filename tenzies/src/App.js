import React from "react"
import "./index.css"
import Square from "./components/Square"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {

  const [dice, setDice] = React.useState(genDiceArray);
  const [tenzies, setTenzies] = React.useState(false);
  const [rolls, setRolls] = React.useState(0);

  const squares = dice.map((die)=>{
      return <Square toggleClick={toggleClick} key={die.id} value={die.value} id={die.id} selected={die.selected}/>
  })


  React.useEffect(()=>{
    const value = dice[0].value
    if(dice.every(die => die.selected)&& dice.every(die => die.value===value))  {
      setTenzies(true) 
      console.log("You won!")
    }
    
  }, [dice])


  function toggleClick(id){
    setDice((prevDie)=>{
      return prevDie.map(die =>{
        return die.id===id ? {...die, selected: !die.selected} : die;
      })
    })
  }

  function genDiceArray(){
    const diceArray = [];
    for(let i = 0; i < 10; i++){
      diceArray.push(generateNewDie())
    }
    return diceArray
  }


  function generateNewDie(){
    let id = nanoid()
    return {
      id: id,
      value: Math.ceil(Math.random() * 6),
      selected: false,
      key: id
    }
  }

  function genNewSquares(){
    setDice( prevDie =>{
      return prevDie.map(currDie =>{
        return currDie.selected===true ? currDie : generateNewDie()
      })
    })
  }

  function continueGame(){
    if(!tenzies) {
      genNewSquares()
      setRolls(prevRolls => prevRolls+1)
    }
    else {
      setTenzies(false)
      setDice(genDiceArray())
      setRolls(0)
    }
  }

  React.useEffect(()=>{
    if(rolls>0){
      localStorage.getItem("rolls")>0 ? 
        localStorage.setItem("rolls", Math.min(rolls, localStorage.getItem("rolls"))) : localStorage.setItem("rolls", rolls)
    }
  }, [tenzies])


  return (
    <main>
      {tenzies && <Confetti />}
      <div className="gameBoard">
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="square-container">
          {squares}
        </div>
        <button className="roll-btn" onClick={continueGame}>{tenzies ? "New game" : "Roll"}</button>

        <h3>Rolls: {rolls}   Best rolls: {localStorage.getItem("rolls")}</h3>
      </div>
    </main>
  );
}

