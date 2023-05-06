import React, { useState, useEffect } from "react";
import QuizContext from "../../context/quizz/quizContext";

function Questions() {
  const quizContext = React.useContext(QuizContext);
  const { test, getQuestion } = quizContext;
  var currentQuestion;
  React.useEffect(() => {
    getQuestion();
    console.log(test.questions);
    
    
  }, []);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };
  currentQuestion = test.questions;

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentQuestionIndex === test.questions.length - 1}
      >
        Next
      </button>
    </div>
  );
}

export default Questions;
