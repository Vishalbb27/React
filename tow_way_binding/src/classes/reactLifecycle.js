import React, { Component } from "react";

class ReactLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { hello: "simplilearn" };
    this.changeS = this.changeS.bind(this);
  }
  reander() {
    return (
      <div>
        <h1>Lifecycle</h1>
        <button onClick={this.changeS}>Click me</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("component mounted");
  }
  changeS() {
    this.setState({ hello: "learning react and js" });
  }
  shouldComponentUpdate(newProp, newState) {
    return true;
  }
  componentWillUpdate(nextProps, newState) {
    console.log("component update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  static getDerivedStateFromProps(state,props){
    return{
        
    }
  }
}

export default ReactLifecycle;
