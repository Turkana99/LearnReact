// import { useState } from "react";
import UseInput from "./useInput";

function PersonalInfo() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  const [firstName, bindFirstName, resetFirstName] = UseInput("");
  const [lastName, bindLastName, resetLastName] = UseInput("");
  const submitForm = (e) => {
    e.preventDefault();
    alert(`Merhaba ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label>FirstName</label>
          <input {...bindFirstName} />
        </div>
        <div>
          <label>LastName</label>
          <input {...bindLastName} />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}

export default PersonalInfo;










