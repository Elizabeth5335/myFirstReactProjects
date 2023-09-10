import React from "react"
import Question from "./Question"
import {nanoid} from "nanoid"

export default function Quiz () {

  const [flag, setFlag] = React.useState(true);
  const [questions, setQuestions] = React.useState([])
  const [score, setScore] = React.useState(0);
  const [answersChecked, setAnswersChecked] = React.useState(false);

  const shuffleArray = (arr) =>{
    return arr.sort(()=>Math.random() - 0.5)
  }
  
  React.useEffect(() => {
    async function getQuestion() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&category=31&type=multiple")
      const data = await res.json()
      let q = []
      data.results.forEach(question =>{
        q.push({
          id: nanoid(), 
          answers:shuffleArray([...question.incorrect_answers, question.correct_answer]), 
          question:question.question, 
          correctAnswer:question.correct_answer, 
          selectedAnswer: null, 
          checked:false
          }
          )
      })
      setQuestions(q)
  }
    getQuestion()
}, [flag])


const generateQuiz = questions ? questions.map((question) => {
  return <Question 
            question={question}
            key={question.id} 
            id={question.id}
            toggleAnswer={toggleAnswer}
        />
}) : []


function toggleAnswer(newAnswer, questionID){
  setQuestions(prevQuestions => prevQuestions.map(question => {
        return question.id === questionID ?  {...question, selectedAnswer : newAnswer} : question
  }))
}


function checkAnswers(){
  let selected = true

  questions.forEach(question =>{
    if (question.selectedAnswer === null){
      selected = false
      return
    }
  })

  if (!selected){
    window.alert("Please, answer all the questions")
    return
  }

  setAnswersChecked(true)

  setQuestions(questions => questions.map(question => {
    return {...question, checked:true}
  }))

  let score = 0
  questions.forEach(question =>{
    if (question.correctAnswer === question.selectedAnswer){
      score += 1
    }
  })

  setScore(score)
}

    

function startNewGame(){
  setScore(score => score + 1)
  setAnswersChecked(false)
  setFlag(prevFlag => !prevFlag)
}

  return(
    <div className="quiz-content">
      {generateQuiz}

      <button className="myBtn" onClick={answersChecked ? startNewGame : checkAnswers}>
        {answersChecked ? "Play again" : "Check answers"}</button>

      {answersChecked && <h3 className="score">{score}/5 right answers</h3>}
    </div>
  )
}




// import React from "react"

// export default function Question (props) {


//     const {questionId, question, answers, rightAnswer} = props.question

//     // function setState(i){
//     //     if(buttonsState.every((state) => state === false)){
//     //         setButtonsState(prevState =>{
//     //             return [
//     //                 ...prevState,
//     //                 prevState[i] = !prevState[i]  
//     //             ]
//     //         })
//     //     }
        
//     // }

   


//     return(
//         <div>
//             <h1>{question}</h1>
//             {buttonsState.map((isDisabled, index) => (
//                 <button
//                     key={index}
//                     onClick={() => handleButtonClick(index)}
//                     disabled={isDisabled}
//                 >
//                 {answers[index]}
//                 </button>
//             ))}
//         </div>
//     )
// }






