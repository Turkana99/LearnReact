import TaskCreate from "./taskCreate";
import TaskList from "./taskList";
import "./task.css";
import { useState } from "react";

function Task() {
  const [tasks, setTasks] = useState([]); // yaradilan task melumatlarini yenilemek ucun ist. olunur.
  const createTask = (title, taskDesc) => {
    const createdTask = [
      // Yaradilan tasklarimizi ozunde saxlayan bir array olmalidir.
      ...tasks, // spread operator vasitesile kohne yaradilan tasklarimizi arrayimizde saxlamis oluruq.
      {
        id: Math.round(Math.random() * 999999), // Bize silme prosesini etmek ucun unikal birsey lazim oldugu ucun math random ile id elde edirik.
        title,
        taskDesc,
      },
    ];
    setTasks(createdTask); // bu funk. vasitesile tasklarimizi update edirik.
  };
  const deleteTaskById = (id) => {
    // taskimizi silmek ucun ist. olunur/.
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    }); // filter bize yeni array qaytarir hansiki icerisinde bizim silmeli oldugumuz taskin olmadigi
    setTasks(afterDeletingTasks); // ve filterden gelen arrayi setTask metodu ile tasks arrayimizin icerisine otururuk.
  };
  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    // taskimizi silmek ucun ist. olunur/.
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="task">
      <TaskCreate onCreate={createTask} />
      <h1>Task List</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default Task;
