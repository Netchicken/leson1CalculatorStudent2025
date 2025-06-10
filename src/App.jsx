import { useState } from "react";
import "./App.css"; // import the CSS file for styling
import { CalcButtons } from "./Components/calcButtons"; // Assuming you have a calcButtons component
function App() {
  return (
    <>
      <div className="App-Header">
        <h1>Calculator</h1>
        <CalcButtons />
      </div>
      <footer>
        <p>Made with ❤️ by Gary</p>
      </footer>
    </>
  );
}
export default App;

// const [calc, setCalc] = useState({
//   first: "",
//   second: "",
//   operator: "",
//   result: "",
//   enteringSecond: false,
// });
