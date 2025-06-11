import React from "react";
import { evaluate } from "mathjs"; // Importing mathjs for calculations

/// Function to handle the calculation logic
export function handleMultiply(symbolUsed, setAnswer, first, second) {
  if (symbolUsed === "X") {
    let XUsed = "*"; // Convert 'X' to '*' for mathjs compatibility
    setAnswer(evaluate(`${first} ${XUsed} ${second}`));
  } else {
    setAnswer(evaluate(`${first} ${symbolUsed} ${second}`));
  }
}
// Function to handle the delete operation
export function handleDelete(trigger, first, setFirst, second, setSecond) {
  if (trigger === false && first !== 0) {
    let newFirst = String(first).slice(0, -1); // Remove last character from first
    setFirst(newFirst === "" ? 0 : Number(newFirst)); // Convert to number or set to 0 if empty
    console.log("Del pressed newFirst", newFirst);
  } else {
    if (trigger === true && second !== 0) {
      let newSecond = String(second).slice(0, -1); // Remove last character from second
      setSecond(newSecond === "" ? 0 : Number(newSecond)); // Convert to number or set to 0 if empty
      console.log("Del pressed newSecond", newSecond);
    }
  }
}
