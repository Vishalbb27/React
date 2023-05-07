import React, { Component } from "react";
import { connect } from "react-redux";

class NewComp1 extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
        <button onClick={this.props.ButtonChange}>Subscribe</button>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    message: state.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ButtonChange: () => dispatch({ type: "Message_change" }),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(NewComp1);
