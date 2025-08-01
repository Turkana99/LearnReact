import { useState } from "react";

function StateExample() {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <>
      <button onClick={handleClick}>Add</button>
      <p>Course count: {value}</p>
    </>
  );
}

export default StateExample;
