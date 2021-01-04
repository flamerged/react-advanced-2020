import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Mersad",
    age: 31,
    message: "Hello World, this is Mersad",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "Hello Mersad!" });
  };
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
