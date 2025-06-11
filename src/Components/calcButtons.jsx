import React from "react";
import { useState } from "react";
import Inputs from "./Inputs"; // Assuming you have an Inputs component for input fields
import SingleButton from "./SingleButton"; // Assuming you have a SingleButton component for buttons
import ButtonKeypad from "./ButtonKeypad"; // Assuming you have a ButtonKeypad component for number buttons
import { evaluate } from "mathjs"; // Importing mathjs for calculations

export const CalcButtons = () => {
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState(""); // Initialize as an empty string to handle concatenation
  const [second, setSecond] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [symbolUsed, setSymbolUsed] = useState(""); // To store the operator

  let symbols = ["+", "-", "X", "/"]; // Array of symbols for operations

  //we are passing in the value of the button pressed
  const keyInput = (value) => {
    console.log(value + " " + trigger);

    if (trigger === false) {
      setFirst(Number(first + String(value))); //concatenate the numbers then save as number
      console.log("first value", value);
    }

    if (trigger === true) {
      setSecond(Number(second + String(value))); //concatenate the numbers then save as number
    }
  };

  //Value = +-/X
  const Calculate = (value) => {
    console.log(value);
    setTrigger(true);
    console.log("trigger run", value + " " + trigger);

    if (symbols.includes(value)) {
      //yay its  a symbol
      setSymbolUsed(value); //save it to use below
    }
    if (value === "=") {
      if (symbolUsed === "X") {
        let XUsed = "*"; // Convert 'X' to '*' for mathjs compatibility
        setAnswer(evaluate(`${first} ${XUsed} ${second}`));
      } else {
        setAnswer(evaluate(`${first} ${symbolUsed} ${second}`));
      }
    }
    if (value === "Del") {
      if (trigger === false) {
        let newFirst = String(first).slice(0, -1); // Remove last character from first
        setFirst(newFirst === "" ? 0 : Number(newFirst)); // Convert to number or set to 0 if empty
        console.log("Del pressed newFirst", newFirst);
      } else {
        let newSecond = String(second).slice(0, -1); // Remove last character from first
        setSecond(newSecond === "" ? 0 : Number(newSecond)); // Convert to number or set to 0 if empty
        console.log("Del pressed newSecond", newSecond);
      }
    }
  };
  return (
    <div>
      <Inputs
        first={first}
        setFirst={setFirst}
        second={second}
        setSecond={setSecond}
        answer={answer}
      ></Inputs>

      <div className="calc-box">
        <p>
          {first} {symbolUsed} {second} = {answer}
        </p>

        <div className="digits">
          <SingleButton symbol="+" Calculate={Calculate}></SingleButton>
          <SingleButton symbol="-" Calculate={Calculate}></SingleButton>
          <SingleButton symbol="/" Calculate={Calculate}></SingleButton>
          <SingleButton symbol="X" Calculate={Calculate}></SingleButton>
          <SingleButton symbol="=" Calculate={Calculate}></SingleButton>
          <SingleButton symbol="Del" Calculate={Calculate}></SingleButton>
          <SingleButton symbol="C" Calculate={Calculate}></SingleButton>
        </div>
        <ButtonKeypad keyInput={keyInput} />
      </div>
    </div>
  );
};
