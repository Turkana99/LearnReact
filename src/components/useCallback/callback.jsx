import { useState, useCallback } from "react";
import "../../App.css";
function Callback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Count:", count);
  }, [count]); // yalnız count dəyişəndə handleClick yenidən yaradılır

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Artır</button>
      <button onClick={handleClick}>Console-a yaz</button>
    </div>
  );
}

export default Callback;


