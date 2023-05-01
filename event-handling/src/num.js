import React from "react";
import ReactDOM from "react-dom";

function MenuDemo(props) {const number = [100, 200, 300, 400, 500];
  const list = number;
  const newNum = number.map((number) => {
    return <li>{number}</li>;
  });
  return(
    <ul>{newNum}</ul>
  )
}


export default MenuDemo;