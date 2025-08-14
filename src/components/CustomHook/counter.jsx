import useCounter from "./useCounter";

function Counter() {
  const [num, increment, decrement, reset] = useCounter();
  return (
    <div>
      <h2>Count = {num}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
