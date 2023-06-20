import React from "react";
import Weather from "./Weather";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
    Weather app
    <Weather defaultCity="Johor Bahru"/>
    <footer>
      This project is created by Farah Johari and is {" "}
     <a href="https://github.com/faranora21/react-final-weather" target="_blank" rel="noreferrer">open-sourced on Github</a>
    </footer>
    </div>
    </div>
  );
}

export default App;
