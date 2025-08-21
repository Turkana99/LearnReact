import "./App.css";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import NameForm from "./components/NameForm";
import FrsExample from "./components/frsExample/FrsExample";
import StateExample from "./components/State/stateExample";
import "bulma/css/bulma.css";
import StateExample2 from "./components/State/State proj. example/stateExample2";
import SearchMain from "./components/Images project/searchMain";
import Task from "./components/Forms example/task";
import UseEffect from "./components/effect example/useEffect";
import ContextProvider from "./components/Context Provider/contextprovider";
import AuthContext from "./components/Context Provider/authContext";
import { Provider } from "./components/Context Provider/taskContext";
import Course from "./components/CourseProject/Course";
import Reducer from "./components/useReducer/reducer";
import Memo from "./components/useMemo/memo";
import Callback from "./components/useCallback/callback";
import RefDom from "./components/useRef/refDom";
import Ref from "./components/useRef/ref";
import Transition from "./components/useTransition/transition";
import DifferedValue from "./components/useDefferedValue/defferedValue";
import CustomHook from "./components/CustomHook/customHook";
import Router from "./components/Router/router";
import BurgerApp from "./components/BurgerProjects/BurgerApp";
import TodoApp from "./components/ToDoApp/TodoApp";
// import { useState } from "react";
function App() {
  // const [authStatus, setAuthStatus] = useState(false);
  // const loginAuth =()=>{
  //  setAuthStatus(true);
  // }
  return (
    <>
      {/* <Hello />
      <Welcome />
      <Counter name="Turkana" />
      <NameForm />  */}
      {/* <FrsExample /> */}
      {/* <StateExample/> */}
      {/* <StateExample2 /> */}
      {/* <SearchMain /> */}
      {/* <Provider>
        <Task />
      </Provider> */}
      {/* <UseEffect/> */}
      {/* <AuthContext.Provider value={{status: authStatus, login:loginAuth}}>
        <ContextProvider />
      </AuthContext.Provider> */}
      {/* <Course/> */}
      {/* <Reducer/> */}
      {/* <Memo /> */}
      {/* <Callback/> */}
      {/* <RefDom /> */}
      {/* <Ref/> */}
      {/* <Transition/> */}
      {/* <DifferedValue/> */}
      {/* <CustomHook/> */}
      {/* <Router /> */}
      {/* <BurgerApp /> */}
      <TodoApp />
    </>
  );
}

export default App;
