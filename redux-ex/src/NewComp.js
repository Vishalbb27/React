import React from "react";
import { connect } from "react-redux";

const NewComp = () => {
  const [msg, setName] = React.useState();
  React.useEffect(() => {
    setName("Hello From Simplilearn");
  }, []);

  const ButtonChange = () => {
    setName("Thanks for opting the Simplilearn!!!!!");
  };
  return (
    <div>
      <h2 >{msg}</h2>
      <button onClick={ButtonChange}>Subscribe</button>
    </div>
  );
};

export default NewComp;
