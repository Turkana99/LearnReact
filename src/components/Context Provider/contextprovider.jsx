import authContext from "./authContext";
import { useContext } from "react";
function ContextProvider() {
  const { status , login} = useContext(authContext);
  console.log(status);
  
  return <div>
    <h1>Do you enter?</h1>
    {status ? <p>yessss</p> : <p>No</p>}
    <button onClick={login} className=" button">Login</button>
  </div>;
}

export default ContextProvider;
