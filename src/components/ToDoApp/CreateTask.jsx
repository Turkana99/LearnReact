import React from "react";
import { useState } from "react";
export default function CreateTask(props) {
  const [task, setTask] = useState({
    title: "",
    content: "",
  });
  function detectChange(event) {
    const { name, value } = event.target;

    setTask((prevTask) => {
      return { ...prevTask, [name]: value };
    });
  }

  function submitTask(event) {
    props.onAdd(task);
    setTask({
        title:'',
        content:''
    })
    event.preventDefault();
  }
  return (
    <div className="todoArea">
      <form className="createForm">
        <input
          type="text"
          value={task.title}
          className="form-control todoText mb-3"
          name="title"
          placeholder="Title"
          onChange={detectChange}
        />
        <textarea
          name="content"
          value={task.content}
          rows={3}
          placeholder="Enter task"
          className="form-control todoText mb-3"
          onChange={detectChange}
        ></textarea>
        <button className="btn btn-primary todoButton" onClick={submitTask}>
          Add
        </button>
      </form>
    </div>
  );
}
