import logo from "./logo.svg";
import Person from "./comp1/person.js";
import Info from "./comp1/info.js";
import "./App.css";
import Class1 from "./classComponent/class1.js";
import React, { Component } from "react";

class Codestudio extends Component {
  constructor(props) {
    //this is the constructor of the class component state is set here using the constructor method and props to set internal state
    super(props);
    this.state = {
      username: "John",
    };
  }
  newSate = () => {
    this.setState({ username: "James" }); //setstate triggers ui method to update the ui
  };
  render() {
    return (
      <div className="hi">
        <h1>Class Component</h1>
        <p>
          <label>Username : {this.state.username}</label>
        </p>

        <button onClick={this.newSate}>Change State</button>

        <Class1 name="hi" />
      </div>
    );
  }
}

// class Employee extends Component{
//   render(){
//     return (
//       <div>
//         <h1>Employee Component</h1>
//         <p><label>Name :{this.props.Name} </label></p>
//         <Department Name={this.props.DeptName}/>
//       </div>
//   )}
// }
// class Department extends Component{
//   render(){
//     return (
//       <div>
//         <h1>Department Component</h1>
//         <p><label>Name :<b>{this.props.Name}</b> </label></p>
//       </div>
//   )}
// }

// const Element = <Employee DeptName="IT" Name="hi"/>;

function App() {
  const[name,setName] = React.useState('')
  return (
    <div className="App">
      {/* pass the person name and age */}
      <Person name="John" age="20" />
      <Info city="New York" country="USA" />
      <Class1 />
      <Codestudio />
      <form>
        <label>Name </label>
        <input id="name-filed" value={name} onChange={event=>{setName(event.target.value);}}/>

      </form>
      <p>
        <strong>Current Value : </strong>
        {name || '(empty)'}
      </p>
    </div>
  );
}

export default App;