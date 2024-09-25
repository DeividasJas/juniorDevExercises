import React from "react";
import { useAppContext } from "./context/context";

export default function RemoveTaskButton({ task }) {
  const { setAllTasks } = useAppContext();
  const handleRemove = () => {
    setAllTasks((prev: Task[]) => {
      return prev.filter((filterTask) => filterTask.id !== task.id);
    });
  };

  return <button onClick={handleRemove}>❌ remove</button>;
}
