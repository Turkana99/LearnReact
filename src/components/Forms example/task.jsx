import TaskCreate from "./taskCreate";
import TaskList from "./taskList";
import { useEffect, useContext } from "react";
import "./task.css";
import TaskContext from "../Context Provider/taskContext";
function Task() {
  const { fetchTasks } = useContext(TaskContext); // Context APi-mizi import edib bu komponentde metodlarindan hansini istifade 
  // edeceyimizi qeyd edirik. Meselen bu numunede fetchTasks-dan istifade edeceyik)
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="task">
      <TaskCreate />
      <h1>Task List</h1>
      <TaskList />
    </div>
  );
}

export default Task;
