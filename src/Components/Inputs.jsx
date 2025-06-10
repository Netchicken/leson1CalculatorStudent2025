import React from "react";

const Inputs = ({ first, setFirst, second, setSecond, answer }) => {
  return (
    <>
      <input
        type="number"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <input
        type="number"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
      />
      <input type="number" value={answer} readOnly />
    </>
  );
};

export default Inputs;
