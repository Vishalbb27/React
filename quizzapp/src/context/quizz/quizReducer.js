import React from "react";
import { TEST, REVIEW, RESULT, USER, LOGOUT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case TEST: {
      return {
        ...state,
        test: action.payload,
      };
    }
    case USER: {
      return {
        ...state,
        login: true,
        user: action.payload,
      };
    }
    case LOGOUT: {
      return {

        test:{},
        login: false,
        user: {},
      };
    }
    default:
      return {
        state,
      };
  }
};
