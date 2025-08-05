import "./task.css";
import { useState } from "react";
import TaskCreate from "./taskCreate";
function TaskShow({ task, onDelete,onUpdate}) {
  const [showEdit, setShowEdit] = useState(false); // Bunu edit ve create formlari eyni oldugu lakin css-de ve is mexanizminde
  // kicik deyisiklikler oldugu ucun ferqlenmelerine gore bu deyisen vasitesile ferqlendireceyik.True-dursa nece gorunsun, false-dursa nece gorunsun.
  const handleDelete = () => {
    onDelete(task.id);
  }; // burada bize props kimi gelen onDelete funk. icerisine delete edeceyimiz task id-ni otururuk.
  const handleSubmit = (id, updatedTitle, uptadetTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, uptadetTaskDesc);
  };
  const handleEdit = () => {
    setShowEdit(!showEdit); // Ilkin olaraq showEdit false alir, edit duymesine clickde true olaraq deyisir.
  }; // burada bize props kimi gelen onEdit funk. icerisine edit edeceyimiz task id-ni otururuk.
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} /> // Burada taskCreate komponentine showEdit truedursa, taskFormUpdate( bu edit ve ya create ayira bilmesi ucundur),
      ) : (
        // ve tebii ki tasklari gonderirik.
        //Digeri ise eks hal
        <div>
          <h3>Task</h3>
          <p>{task.title}</p>
          <h3>Works</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
            <button className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
