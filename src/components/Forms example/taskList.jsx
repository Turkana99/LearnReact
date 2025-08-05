import TaskShow from "./taskShow";
import "./task.css";
function TaskList({ tasks, onDelete , onUpdate}) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {// task artiq burda bize icerisinde obyektler olan bir array formatinda gelir, bu arrayi map edirik.
        return <TaskShow task={task} key={index} onDelete={onDelete} onUpdate={onUpdate}/>; // Burda keyden ist. olunmalidir. 
        // Cunki task bir array oldugu ucun ferqlendirici birsey olmalidir, cox zaman bunun ucun index-den istifade edilir. 
        // Ve yaxudda arrayimizin daxilindeki id paramateri unikal oldugundan key olaraq ondan da ist. ede bilerdik.
      })}
    </div>
  );
}

export default TaskList;
