import React from "react";
class Updating extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <h1>User List</h1>
        <button onClick={() => this.setState({ show: true })}>Get Users</button>
        {this.state.show ? <User amount="1000" /> : null}
      </div>
    );
  }
}
class User extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 2000,
    };
  }

  componentDidMount() {
    this.setState({ amount: this.props.amount });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // previous state
    document.getElementById("previous").innerHTML =
      "Previous Amount: " + prevState.amount;
  }

  componentDidUpdate() {
    // current state
    document.getElementById("new").innerHTML =
      "Current Amount: " + this.state.amount;
  }

  render() {
    return (
      <div>
        <div id="previous">Previous Amount: </div>
        <div id="new">New Amount: </div>
      </div>
    );
  }
}

export default Updating;