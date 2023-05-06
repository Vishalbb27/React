import React, { useReducer } from "react";
import { TEST, REVIEW, RESULT, USER, LOGOUT } from "../types";
import data from "../../components/Data/question.json";
import QuizContext from "./quizContext";
import QuizReducer from "./quizReducer";

const QuizState = (props) => {
  const initialState = {
    test: [],
    review: {},
    result: {},
    user: {},
    login: false,
  };
  
  const [state, dispatch] = useReducer(QuizReducer, initialState);

  const getQuestion = () => {
    dispatch({
      type: TEST,
      payload: data,
    });
  };

  const userLogin = (userDetails) => {
    dispatch({
      type: USER,
      payload: userDetails
    });
  };

  const logout = () =>{
    dispatch({
      type: LOGOUT
    })
  }

  return (
    <QuizContext.Provider
      value={{
        test: state.test,
        review: state.quiz,
        result: state.result,
        user: state.user,
        login: state.login,
        getQuestion,
        userLogin,
        logout
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
