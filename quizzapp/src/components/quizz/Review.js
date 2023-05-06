import React from "react";
import QuizContext from "../../context/quizz/quizContext";
import { Link } from "react-router-dom";
const Review = () => {
  const quizContext = React.useContext(QuizContext);

  const { login } = quizContext;
  return (
    <div>
      {login ? (
        <h1>Review</h1>
      ) : (
        <h1>
          Click here to <Link to="/login">Login</Link>
        </h1>
      )}
    </div>
  );
};

export default Review;
