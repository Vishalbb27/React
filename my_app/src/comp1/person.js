import React from "react";

const Person = (props) => {
  return (
    <div className="person">
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
    </div>
  );
};

export default Person;
