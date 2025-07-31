import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleClick = () => {
    setIsVisible(true);
    setName(""); // input sıfırlansın
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick} disabled={name.trim() == ""}>
        Salamla
      </button>
      {isVisible && <p id="sayHello">Salam, {name}!</p>}
    </div>
  );
}

export default NameForm;
