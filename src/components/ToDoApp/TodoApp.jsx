import { useState } from "react";
import CreateTask from "./CreateTask";
import Header from "./Header";
import Task from "./Task";
import Footer from './Footer';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    setTasks((prevTask) => {
      return [...prevTask, newTask];
    });
  };
  const deleteTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((taskItem, index) => {
        return index != id;
      });
    });
  };
  return (
    <div>
      <Header />
      <CreateTask onAdd={addTask} />
      <div className="container">
        <div className="row my-5">
          {tasks.map((taskItem, index) => {
            return (
              <Task
                key={index}
                id={index}
                title={taskItem.title}
                content={taskItem.content}
                onDelete={deleteTask}
              />
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default TodoApp;
