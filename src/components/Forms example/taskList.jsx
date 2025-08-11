import TaskShow from "./taskShow";
import { useContext } from "react";
import TaskContext from "../Context Provider/taskContext";
import "./task.css";
function TaskList() {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        // task artiq burda bize icerisinde obyektler olan bir array formatinda gelir, bu arrayi map edirik.
        return <TaskShow task={task} key={index} />; // Burda keyden ist. olunmalidir.
        // Cunki task bir array oldugu ucun ferqlendirici birsey olmalidir, cox zaman bunun ucun index-den istifade edilir.
        // Ve yaxudda arrayimizin daxilindeki id paramateri unikal oldugundan key olaraq ondan da ist. ede bilerdik.
      })}
    </div>
  );
}

export default TaskList;
