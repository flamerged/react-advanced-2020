import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  
  useEffect(()=> {
    if (value > 0) {
      document.title = `New Messages (${value})`
    } else {
      document.title = "Inbox"
    }
  }, [value])

  return <>
    <h2>Messages ({value})</h2>
    <button type="button" className="btn" onClick={() => setValue(value + 1)}>Get messages</button>
  </>;
};

export default UseEffectBasics;
