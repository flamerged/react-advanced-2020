import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  return (
    <>
      <h2>Counter</h2>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      <button type="button" className="btn" onClick={reset}>
        Reset
      </button>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </>
  );
};

export default UseStateCounter;
