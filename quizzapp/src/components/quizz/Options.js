import React from "react";

const Options = (props) => {const data = "hi";
  return (
    
    <div>
      <div className="option" key={props.id}>
        <input type="radio" value={props.option} name="options" />
        {data}
      </div>
    </div>
  );
};

export default Options;
