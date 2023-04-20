import react from "react";
import Logo from "../logo.svg";
const Info = (props) => {
  return (
    <div>
      <p>City: {props.city}</p>
      <p>Country: {props.country}</p>
      <img src={Logo} alt="logo" />
    </div>
  );
};

export default Info;
