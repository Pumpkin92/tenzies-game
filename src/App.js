import React, { useState } from "react";
import "./App.css";
import Die from "./Die.js";
import { nanoid } from "nanoid";

function App() {
  let [dice, setDice] = useState(allNewDice());

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map(function (die) {
    return (
      <Die
        die={die.value}
        isHeld={die.isHeld}
        key={die.id}
        id={die.id}
        holdDice={() => holdDice(die.id)}
        // onClick={holdDice()}
        // holdDice={(id) => holdDice(id, die.id)}
      />
    );
  });

  function rollNewDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>

        <div className="die-grid">{diceElements}</div>
        <button onClick={rollNewDice}>Roll</button>
      </div>
    </div>
  );
}

export default App;
