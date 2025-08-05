import "./App.css";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

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
function App() {
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
      <Task/>
    </>
  );
}

export default App;
















