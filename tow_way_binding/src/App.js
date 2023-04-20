import logo from './logo.svg';
import './App.css';
import React from 'react'
import UserInput from './classes/userInput'
import ReactLifecycle from './classes/reactLifecycle';
import Mounting from './classes/Mounting';
import Updating from './classes/Updating';
function App() {

    const[name,setName] = React.useState('hi');
    const handleChange = (e) =>{
      setName(e.target.value);
    }
    var Bstyle = {
      fontSize:50,
      color:'blue'
    }
    const greet = "welcome user";
    return(
      <div>
        <h1 id={greet}>My first funciton </h1>
        <ul>
          <li>
            <button onClick={event=>alert(event.target.id)}>button</button>
          </li>
        </ul>
        <h2 style={Bstyle}>{3*3*4}</h2>





        <input onChange={handleChange} value={name}/>
        <h1>{name || '(empty)'}</h1><UserInput />

        <Mounting />
        <Updating />
      </div>
      
    );

}

export default App;
