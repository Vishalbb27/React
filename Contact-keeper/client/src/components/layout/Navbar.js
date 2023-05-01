import React, { Fragment, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;
  const onLogout =() =>{
    // clearContacts();
    logout(); 
    
  }
  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="#!" onClick={onLogout} className="navbar-brand text-white">
          <span className="">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link className="text-white" to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link className="text-white" to="/login">
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar  bg-primary text-white">
      <a className="navbar-brand text-white" href="#">
        <i className={icon}></i> {title}
      </a>
      <ul className="navbar-nav">{isAuthenticated ? authLinks : guestLinks}</ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
