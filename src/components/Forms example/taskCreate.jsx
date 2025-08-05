import "./task.css";
import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate,onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : ""); //form daxilindeki title value-su saxlamaq ucun ist. edirik.
  // Burada initial value olaraq eger props-um olan tasks arrayinda task varsa onu, yoxdursa bos string menimsedirem.
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : ""); // form daxilindeki task description value-sunu saxlamaq ucun ist. edirik.
  const handleChange = (event) => {
    setTitle(event.target.value);
  }; // form title value-sunu set edirik.
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  }; // form description value-sunu set edirik.
  const handleSubmit = (event) => {
    event.preventDefault(); // Avtomatik yenilenmeni bloklayir submit zamani
    if (taskFormUpdate) { // Bizde form-fa her iki halda submit button eynidir ve eyni funksiyani cagirir. 
    // Lakin funksiya bilmelidir ki o edit etmelidir yoxsa create
      onUpdate(task.id, title, taskDesc); // Eger editdirse, bu melumatlari gonderirik.
    } else {
      onCreate(title, taskDesc); // onCreate bir funks.dir props kimi gelir ve diger komponentde task yaratma isine baxir.
    }
    setTitle(""); // Taski yaratdiqdan ve ya edit etdikden sonra form title valuesunu resetlemek ucun ist. olunur.
    setTaskDesc(""); // Taski yaratdiqdan ve ya edit etdikden sonra form description valuesunu resetlemek ucun ist. olunur.
  };
  return (
    <>
      {taskFormUpdate ? ( // Gelen taskFormUpdate props valuesine gore komponentin edit-de nece, create-de nece goruneceyini tenzimleyirik.
        <div className="taskEdit">
          <h3>Please edit task!</h3>
          <form>
            <label>Please edit title</label>
            <input value={title} onChange={handleChange} />
            <label>Pls edit task!</label>
            <textarea value={taskDesc} onChange={handleTaskChange} />
            <button onClick={handleSubmit}>Edit task</button>
          </form>
        </div>
      ) : (
        <div className="taskCreate">
          <h3>Please enter task!</h3>
          <form>
            <label>Title</label>
            <input value={title} onChange={handleChange} />
            <label>Enter task!</label>
            <textarea value={taskDesc} onChange={handleTaskChange} />
            <button onClick={handleSubmit}>Create task</button>
          </form>
        </div>
      )}
    </>
  );
}

export default TaskCreate;
