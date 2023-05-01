import React from "react";

const initialState = {
  message: "Subscribe to Simplilearn",
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "Message_change")
    newState.message = "Thanks for choosing the Simplilearn";

  return newState;
};

export default Reducer;
