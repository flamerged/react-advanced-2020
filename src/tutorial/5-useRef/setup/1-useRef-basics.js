import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
  }

  useEffect(() => {
    refContainer.current.focus()
  }, [])

  return <>
  <form className="form" onSubmit={handleSubmit}>
    <input ref={refContainer} />
    <button className="btn" type="submit">Submit</button>
  </form>
  </>;
};

export default UseRefBasics;
