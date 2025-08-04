import "./searchHeader.css";
import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // /* eslint-disable no-debugger */
    // debugger;
    // /* eslint-enable no-debugger */
    search(valueInput);
  };
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label>What do you search?</label>
        <input type="text" value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
