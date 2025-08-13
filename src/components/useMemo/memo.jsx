import { useState, useMemo } from "react";
import "../../App.css";
function Memo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Sadə hesablama funksiyası
  const doubleCount = (num) => {
    console.log("doubleCount işləyir...");
    return num * 2;
  };

  // count dəyişəndə yenidən hesablansın
  const calculatedValue = useMemo(() => doubleCount(count), [count]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useMemo nümunəsi</h1>
      <p>Say: {count}</p>
      <p>İkiqat dəyər: {calculatedValue}</p>
      <button onClick={() => setCount(count + 1)}>Artır</button>

      <br />
      <input
        type="text"
        placeholder="Metn yaz..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default Memo;
