import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import example from "./Example";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Example />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//APPEND APP COMPONENT TO THE EXAMPLE COMPONENT
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//APPENND THE APP COMPONENT TO THE ROOT ELEMENT

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
