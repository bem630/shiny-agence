import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumber - 1
  const nextQuestionNumber = questionNumber + 1
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
      {questionNumber === 10 ? ( <Link to="/results">Resultats</Link>) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      ) }
    </div>
  )
}
