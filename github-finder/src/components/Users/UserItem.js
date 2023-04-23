import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  const handleClick = () => {
    console.log("clicked")
  prompt("Enter your name", "Harry Potter");
    const data = login;
    window.location.href = `/user?data=${data}`;
  }
  console.log(login)

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <button onClick={handleClick}>More</button>
        {/* // <Link to={`/user/data=${login}`} className="btn btn-dark btn-sm my-1">More</Link> */}
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
