export const reducer = (state, action) => {
  if(action.type === "ADD_PERSON") {
    const newPeople = [...state.people, action.payload];
    return {...state, isModalOpen: true, modalContent: "Added Person", people: newPeople};
  }
  if(action.type === "NO_NAME"){
    return {...state, isModalOpen: true, modalContent: "Please add a name before submitting"}
  }
  if(action.type === "REMOVE_PERSON") {
    const newPeople = state.people.filter(person => person.id !== action.payload)
    return {...state, people: newPeople, isModalOpen: true, modalContent: "Removed Person"}
  }
  if(action.type === "CLOSE_MODAL") {
    return {...state, isModalOpen: false}
  }

  throw new Error("Unknown action type");
};