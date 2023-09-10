import React from "react"
import {nanoid} from "nanoid"

export default function Question (props) {

    function handleSelect(answer){
        if (props.question.checked){
          return
        }
        props.toggleAnswer(answer, props.id)
      }


      const setAnswers = props.question.answers.map(answer =>{
        let id = null
        if (props.question.checked){
          if (props.question.correctAnswer === answer){
            id = 'correct'
          }
          else if(props.question.selectedAnswer === answer){
            id = 'incorrect'
          }
          else{
            id = 'not-selected'
          }
        }
        const htmlContent = { __html: answer};

        return (
        <button 
                dangerouslySetInnerHTML={htmlContent}
                key={nanoid()} 
                id={id} 
                className={answer === props.question.selectedAnswer ? 'answer selected' : 'answer'} 
                onClick={() => handleSelect(answer)}
        ></button>

        )
      })
      
    
    // function setAnswers () {
    //     return props.question.answers.map((answer) => {
    //         return (
    //             <button
    //                 key={nanoid()}
    //                 onClick={() => handleSelect(answer)}
    //                 className={btnClass}
    //             >
    //             {answer}
    //             </button>
    //         )
    //     })}

    const htmlContent = { __html: props.question.question};

    return(
        <div>
            <h2 dangerouslySetInnerHTML={htmlContent} className="question-text"></h2>
            {setAnswers}
            <div className='line'></div>
        </div>
    )
}