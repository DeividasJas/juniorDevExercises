import React from "react";
import { Task } from "./types/tasks";
import { useAppContext } from "./context/context";

export default function CompleteTaskButton({ task }) {
  const { completedTasks, setCompletedTasks, setAllTasks } = useAppContext();

  const handleComplete = () => {
    setCompletedTasks((prev) => [...prev, task]);

    setAllTasks((prev: Task[]) => {
      return prev.filter((filterTask) => filterTask.id !== task.id);
    });
  };
  return <button onClick={handleComplete}>✅ Done</button>;
}
