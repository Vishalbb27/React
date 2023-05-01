import React from "react";
import Posts from "./Posts";
import Header from "./Header"
import MenuDemo from './num'
function App() {
  function handleClick(e) {
    e.preventDefault();
    console.log("clicked");
  }
  return (
    <div className="App">
      {/* <form onSubmit={ handleClick }>
        <button type="submit">submit</button>
      </form> */}
      <Header />
      <Posts />
      <MenuDemo />
    </div>
  );
}

export default App;
