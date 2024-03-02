import logo from "./assests/images/logo.svg";
import "./assests/css/App.css";
import { Fragment } from "react";

// class components
// function components ----> a function that return jsx & have some options (hooks)
// jsx: js {} , read variables, ternary operator(if), map(loop), ()=>{}

function App() {
  const title = "Shadi App";
  const age = 16;
  // if (age < 18) {
  //   console.log("Forbidden");
  // } else {
  //   console.log("Welcome");
  // }

  // ternary operator or short if
  // age < 18 ? console.log("Forbidden") : console.log("Welcome");
  //jsx ---> js+xml
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>{title}</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {age < 18 ? <p>Forbidden</p> : <p>Welcome</p>}
      </div>
      <label htmlFor="">Email</label>
      <input type="text" />
    </>
  );
}

export default App;
