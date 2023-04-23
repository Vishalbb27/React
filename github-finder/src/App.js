import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Pages/Home";
import Alert from "./components/layout/Alert";
import About from "./components/Pages/About";
import User from "./components/Users/User";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/Alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <React.Fragment>
            <Navbar title="Github Finder" icon="fab fa-github" />
            <Alert />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/user" element={<User />} />
            </Routes>
          </React.Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
