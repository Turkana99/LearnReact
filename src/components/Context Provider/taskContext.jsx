import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
const TaskContext = createContext(); // Contextimizi yaratdiq.

function Provider({ children }) {
  // Provider daxiline paylasmaq istediyimiz element ve methodlari elave edirik.
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
  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    editTaskById,
    deleteTaskById,
  }; // Bunu yazma sebebimiz provider daxilinde diger komponentlerde istifade ede bileceyimiz value ve methodlari saxlamaqdir.
  return (
    <TaskContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TaskContext.Provider>
  );
}

export { Provider }; // Diger komponentlerde istifade edile bilmesi ucundur.
export default TaskContext;
