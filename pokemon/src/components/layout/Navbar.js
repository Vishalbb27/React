import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ icon, title }) => {
  return (
    <React.Fragment>
    <header class="bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <h1>{title}</h1>
          </div>
          <div class="col-auto">
            <Link to="/" class="btn btn-primary">Home</Link>
          </div>
        </div>
      </div>
    </header>
    </React.Fragment>
  );
};

Navbar.defaultProps = {
  title: "Pokemon Finder",
  // icon: "fab fa-github",
};
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
// };
export default Navbar;
