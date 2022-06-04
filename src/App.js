import React, { useState, useEffect } from "react";
import "./App.css";
import Die from "./Die.js";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };
  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("Winner");
    }
  }, [dice]);

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
      />
    );
  });

  function rollNewDice() {
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice());
      reset();
    } else {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
      increase();
    }
  }

  console.log(count);

  return (
    <div className="App">
      {tenzies ? (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      ) : null}
      <div className="container">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>

        <div className="die-grid">{diceElements}</div>
        <button onClick={rollNewDice}>{tenzies ? "New Game" : "Roll"}</button>
        <h3>Number of rolls: {count}</h3>
      </div>
    </div>
  );
}

export default App;
