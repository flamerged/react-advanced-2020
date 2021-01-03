import React from "react";
import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    const newPeople = people.filter(person => person.id !== id)
    setPeople(newPeople);
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              type="button"
              onClick={() => removePerson(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear List
      </button>
    </>
  );
};

export default UseStateArray;
