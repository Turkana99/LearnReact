import "../../App.css";
import  { useEffect, useReducer } from "react";
import Calculate from "./calculate";
import { NumberContext } from "./numberContext";


const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function Reducer() {
  const [count, dispatch] = useReducer(reducer, initialValue);
 useEffect(()=>{
console.log('render');

 }, [])
  return (
    <div style={{ textAlign: "center" }}>
      <NumberContext.Provider value={{ count, dispatch }}>
        <Calculate />
      </NumberContext.Provider>
    </div>
  );
}

export default Reducer;






