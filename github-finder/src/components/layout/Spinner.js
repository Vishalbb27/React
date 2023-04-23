import React, { Fragment } from "react";
// import spinner from "./spinner.gif";

const Spinner = () => (
  <Fragment>
    <i className="fas fa-spinner fa-spin" />
    <img
      src=""
      alt="Loading..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Spinner;
