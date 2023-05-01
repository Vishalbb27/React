import React from "react";
import {Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import Login from "../auth/Login";
import Home from "../pages/Home";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = React.useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return (
    <Routes>
    <Route
      {...rest}
      element={
        isAuthenticated ||loading ? (
          <Home />
        ) : (
          <Login />
        )
      }
    /></Routes>
  );
};

export default PrivateRoute;
