import { useState, useDeferredValue } from "react";

function DefferedValue() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query); // Axtarış sözünü gecikdir

  const bigArray = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
  const filtered = bigArray.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Axtar..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DefferedValue;
