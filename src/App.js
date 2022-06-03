import React, { useState } from "react";
import "./App.css";
import Die from "./Die.js";

function App() {
  let [array, setArray] = useState(allNewDice());

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 7) + 1;
      newDice.push(randomNumber);
    }
    return newDice;
  }
  allNewDice();
  return (
    <div className="App">
      <div className="container">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="die-grid">
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
        </div>
        <button>Roll</button>
      </div>
    </div>
  );
}

export default App;
