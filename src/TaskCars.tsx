import React from "react";
import CompleteTaskButton from "./CompleteTaskButton";
import RemoveTaskButton from "./RemoveTaskButton";
import { useAppContext } from "./context/context";
export default function TaskCard({ task }) {
  // const { setAllTasks } = useAppContext();

  return (
    <div className="task">
      <p>{task.task}</p>
      <RemoveTaskButton task={task} />
      <CompleteTaskButton task={task} />
    </div>
  );
}
