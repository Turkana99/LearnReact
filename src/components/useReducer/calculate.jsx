import "../../App.css";
import { useContext } from "react";
import { NumberContext } from "./numberContext";
function Calculate() {
  const numberContext = useContext(NumberContext);
  return (
    <>
      <div>count = {numberContext.count}</div>
      <button
        style={{ marginRight: "5px"}}
        onClick={() => numberContext.dispatch("increment")}
      >
        Increment
      </button>
      <button
        style={{ marginRight: "5px"}}
        onClick={() => numberContext.dispatch("decrement")}
      >
        Decrement
      </button>
      <button
        onClick={() => numberContext.dispatch("reset")}
      >
        Reset
      </button>
    </>
  );
}

export default Calculate;
