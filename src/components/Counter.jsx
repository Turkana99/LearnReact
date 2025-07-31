import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Salam , {props.name}!</h3>
      <p>Say: {count}</p>
      <button onClick={() => setCount(count + 1)}>Artır</button>
    </div>
  );
}

export default Counter;
