import React, { useState } from "react";

const ErrorExample = () => {
  const [text, setText] = useState("This is the old title");

  const clickHandler = () => {
    if (text === "This is the old title") {
      setText("This is the new title");
    } else {
      setText("This is the old title");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" onClick={clickHandler} className="btn">
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
