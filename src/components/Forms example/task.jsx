import TaskCreate from "./taskCreate";
import TaskList from "./taskList";
import "./task.css";
import { useEffect, useState } from "react";
import axios from "axios";
function Task() {
  const [tasks, setTasks] = useState([]); // yaradilan task melumatlarini yenilemek ucun ist. olunur.
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    console.log(response.data);

    const createdTask = [
      // Yaradilan tasklarimizi ozunde saxlayan bir array olmalidir.
      ...tasks, // spread operator vasitesile kohne yaradilan tasklarimizi arrayimizde saxlamis oluruq.
      response.data,
    ];
    setTasks(createdTask); // bu funk. vasitesile tasklarimizi update edirik.
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    // // eslint-disable-next-line no-debugger
    // debugger;
    setTasks(response.data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    // taskimizi silmek ucun ist. olunur/.
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    }); // filter bize yeni array qaytarir hansiki icerisinde bizim silmeli oldugumuz taskin olmadigi
    setTasks(afterDeletingTasks); // ve filterden gelen arrayi setTask metodu ile tasks arrayimizin icerisine otururuk.
  };
  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    // taskimizi silmek ucun ist. olunur/.
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
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








