import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0); // set initial state for count

  var Add = (x) => {
    x = x + 1;
    console.log("Add 1 to counter", x);
    setCount(x);
  };
  return (
    <div>
      <button className="Addbutton" onClick={() => Add(count)}>
        Add 1 to {count}
      </button>
      <h2>{count}</h2>
    </div>
  );
}

//App;
