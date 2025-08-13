import { useState, useRef, useEffect } from "react";
function Ref() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count; 
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Prev Count: {previousCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Ref;
