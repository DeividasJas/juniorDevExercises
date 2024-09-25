import React from "react";
import { useState, useRef } from "react";
import { useAppContext } from "./context/context";
export default function AddTask() {
  const [task, setTask] = useState<string | null>("");
  const { allTasks, setAllTasks } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      return <p>hello</p>;
    }
    if (task.trim().length > 1)
      setAllTasks((prev) => [...prev, { id: allTasks.length + 1, task: task }]);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        id=""
        value={task || ""}
        placeholder="Enter a task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
