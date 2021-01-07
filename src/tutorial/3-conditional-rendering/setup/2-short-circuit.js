import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h2>Testing Short Circuit</h2>
      <h3>{text || `Hello World text is ${text}`}</h3>
      <h3>{isError && "Error"}</h3>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {/* use of ternary */}
      {isError ? (
        <p>There is an error. </p>
      ) : (
        <div>
          <h2>There is no Error.</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
