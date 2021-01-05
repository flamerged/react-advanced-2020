import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const updateSize = () =>  {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateSize)
    return () => {
      window.removeEventListener("resize", updateSize)
    }
  })

  return (
    <>
      <h2>Window Size</h2>
      <h3>{size}</h3>
    </>
  );
};

export default UseEffectCleanup;
