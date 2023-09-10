import React from "react"
import MainPage from "./components/MainPage"
import Quiz from "./components/Quiz"

export default function App () {

  const [quizStarted, setQuizStarted] = React.useState(false)

  function toggleStarted(){
    setQuizStarted(prevQuizStarted => !prevQuizStarted)
  }

  return(
    <main>
      {quizStarted ? <Quiz /> : <MainPage toggleStarted={toggleStarted} /> }
    </main>
  )
}